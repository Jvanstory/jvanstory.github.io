import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './homeBackground.css'; // Optional for styling

const HomeBackground: React.FC = () => {
  const [lineCoordinates, setLineCoordinates] = useState<{ x: number; y: number } | null>(null);
  const numLines = 48;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      setIsSmallScreen(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (event: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const radius = Math.min(canvasWidth, canvasHeight) * 0.35;

      const msx = event.clientX - canvas.offsetLeft - canvasWidth / 2;
      const msy = event.clientY - canvas.offsetTop - canvasHeight / 2;

      setLineCoordinates({ x: msx, y: msy });

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      ctx.beginPath();
      ctx.arc(canvasWidth / 2, canvasHeight / 2, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'black'; // Circle color
      ctx.fill();
      ctx.strokeStyle = 'white'; // Circle outline color
      ctx.stroke();

      if (msx === 0 && msy === 0) return;

      for (let i = 0; i < numLines; i++) {
        const angle = (i * 2 * Math.PI) / numLines;
        const startX = canvasWidth / 2 + Math.cos(angle) * radius;
        const startY = canvasHeight / 2 + Math.sin(angle) * radius;

        const angleToMouse = Math.atan2(msy, msx);
        const endX = canvasWidth / 2 + Math.cos(angleToMouse) * radius;
        const endY = canvasHeight / 2 + Math.sin(angleToMouse) * radius;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'cyan'; // Line color
        ctx.stroke();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const radius = Math.min(window.innerWidth, window.innerHeight) * 0.35; // Circle radius
  const linkOffset = 50; // Space between links and the circle

  const links = ['About', 'Cool-Lines', 'Old Website', 'Contact', 'Resume']; // Add the old website link

  return (
    <div className={`container ${isSmallScreen ? 'small-screen' : ''}`} style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'absolute',
          zIndex: -1,
        }}
      />
      {links.map((link, index) => {
        const angle = (index * 2 * Math.PI) / links.length;
        const radius = Math.min(window.innerWidth, window.innerHeight) * 0.34; 
        const linkOffset = 70; // Offset from the circle
        const x = window.innerWidth / 2 + Math.cos(angle) * (radius + linkOffset) - 15;
        const y = window.innerHeight / 2 + Math.sin(angle) * (radius + linkOffset) + 5;

        return (
          <Link
            key={index}
            to={link === 'Old Website' ? '/oldWebsite' : `/${link.toLowerCase()}`}
            className={`link ${isSmallScreen ? 'link-small' : ''}`}
            style={isSmallScreen ? {} : { left: `${x}px`, top: `${y}px` }} // Inline styles for dynamic positioning
          >
            {link}
          </Link>
        );
      })}
      <p className='homeP'>For the best experience, view on a computer</p>
    </div>
  );
};

export default HomeBackground;