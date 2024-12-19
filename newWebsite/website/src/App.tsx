import React, { useState, useEffect, useRef } from 'react';
import CoolLines from './portfolio/coolLines'; // Import the CoolLines component
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

const CanvasComponent: React.FC = () => {
  const [lineCoordinates, setLineCoordinates] = useState<{ x: number; y: number } | null>(null);
  const numLines = 48; // Number of lines to draw evenly spaced
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Set initial canvas size
    handleResize();

    // Adjust canvas size on window resize
    window.addEventListener('resize', handleResize);

    // Track mousemove events globally (for the whole window)
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
    
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
    
      // Calculate the radius based on the smaller dimension of the canvas (responsive)
      const radius = Math.min(canvasWidth, canvasHeight) * 0.35; // 35% of the smaller dimension
    
      // Calculate the mouse position relative to the canvas center
      const msx = event.clientX - canvas.offsetLeft - canvasWidth / 2;
      const msy = event.clientY - canvas.offsetTop - canvasHeight / 2;
    
      setLineCoordinates({ x: msx, y: msy });
    
      ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear previous lines
    
      // Draw the circle in the center with light gray fill color
      ctx.beginPath();
      ctx.arc(canvasWidth / 2, canvasHeight / 2, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'gray';
      ctx.fill(); // Fill the circle with the light gray color
      ctx.strokeStyle = 'black';
      ctx.stroke(); // Optional: Outline the circle
    
      // Skip drawing if the cursor is exactly at the center
      if (msx === 0 && msy === 0) return;
    
      // Draw lines from the perimeter to the edge of the circle based on mouse position
      for (let i = 0; i < numLines; i++) {
        const angle = (i * 2 * Math.PI) / numLines;
        const startX = canvasWidth / 2 + Math.cos(angle) * radius;
        const startY = canvasHeight / 2 + Math.sin(angle) * radius;
    
        // Calculate the direction of the line based on the mouse position
        const angleToMouse = Math.atan2(msy, msx); // Calculate the angle towards the mouse position
        const endX = canvasWidth / 2 + Math.cos(angleToMouse) * radius; // Use the angle to calculate the point on the circle
        const endY = canvasHeight / 2 + Math.sin(angleToMouse) * radius;
    
        ctx.beginPath();
        ctx.moveTo(startX, startY); // Start at the perimeter
        ctx.lineTo(endX, endY); // End at the point on the perimeter based on mouse direction
        ctx.strokeStyle = 'darkblue';
        ctx.stroke();
      }
    };
    

    // Add event listener to the whole window for mousemove
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh', width: '100vw', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1, // Ensure the canvas is behind the navbar
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const showNavbar = location.pathname === '/';

  return showNavbar ? (
    <nav style={{ position: 'relative', zIndex: 10 }}>
      {/* Styled button to navigate to CoolLines page */}
      <button style={{ margin: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        <Link to="/cool-lines" style={{ textDecoration: 'none', color: 'white' }}>CoolLines</Link>
      </button>
    </nav>
  ) : null;
};

const App: React.FC = () => {
  const location = useLocation();  // Move useLocation hook here where Router context is available
  const links = ['About', 'Contact', 'coolines']; // List of links to display around the circle

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CanvasComponent />} />
          <Route path="/cool-lines" element={<CoolLines />} />
        </Routes>
        {location.pathname === '/' && (  // Render links only on the homepage
          <div className="circle-links-container">
            {links.map((link, index) => {
              const angle = (index * 2 * Math.PI) / links.length;
              const radius = Math.min(window.innerWidth, window.innerHeight) * 0.35; // 35% of the smaller dimension
              const x = window.innerWidth / 2 + Math.cos(angle) * radius;
              const y = window.innerHeight / 2 + Math.sin(angle) * radius;

              return (
                <Link
                  key={index}
                  to={`/${link.toLowerCase()}`}
                  className="circle-link"
                  style={{
                    position: 'absolute',
                    left: `${x - 40}px`, // Adjust position to center the link text
                    top: `${y - 20}px`,  // Adjust position to center the link text
                    transform: 'translate(-50%, -50%)',
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '18px',
                  }}
                >
                  {link}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
