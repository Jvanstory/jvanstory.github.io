import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import Navbar from '../Navbar/Navbar';

const CanvasComponent: React.FC = () => {
  const [lineCoordinates, setLineCoordinates] = useState<{ x: number; y: number } | null>(null);
  const [radius, setRadius] = useState(0.2); // Circle radius as a percentage of the smaller dimension
  const [lineColor, setLineColor] = useState('cyan'); // Line color
  const [backgroundColor, setBackgroundColor] = useState('gray'); // Background color
  const [circleColor, setCircleColor] = useState('black'); // Circle background color
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
      const calculatedRadius = Math.min(canvasWidth, canvasHeight) * radius; // Use the state radius

      // Calculate the mouse position relative to the canvas center
      const msx = event.clientX - canvas.offsetLeft - canvasWidth / 2;
      const msy = event.clientY - canvas.offsetTop - canvasHeight / 2;

      setLineCoordinates({ x: msx, y: msy });

      ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear previous lines

      // Set the background color
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Draw the circle in the center with the specified circle color
      ctx.beginPath();
      ctx.arc(canvasWidth / 2, canvasHeight / 2, calculatedRadius, 0, Math.PI * 2);
      ctx.fillStyle = circleColor;
      ctx.fill(); // Fill the circle with the specified color
      ctx.strokeStyle = 'black';
      ctx.stroke(); // Optional: Outline the circle

      // Skip drawing if the cursor is exactly at the center
      if (msx === 0 && msy === 0) return;

      // Draw lines spaced evenly around the perimeter, starting at the circle's edge
      for (let i = 0; i < numLines; i++) {
        const angle = (i * 2 * Math.PI) / numLines;
        const startX = canvasWidth / 2 + Math.cos(angle) * calculatedRadius;
        const startY = canvasHeight / 2 + Math.sin(angle) * calculatedRadius;

        ctx.beginPath();
        ctx.moveTo(startX, startY); // Start at the perimeter
        ctx.lineTo(msx + canvasWidth / 2, msy + canvasHeight / 2); // End at the cursor
        ctx.strokeStyle = lineColor; // Use the state line color
        ctx.stroke();
      }
    };

    // Add event listener to the whole window for mousemove
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [radius, lineColor, backgroundColor, circleColor]);

  return (
    <div>
      <Navbar />
      <div style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh', width: '100vw', paddingTop: '60px' }}>
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
        <div style={{ position: 'absolute', top: 70, left: 10, zIndex: 10 }}>
          <label style={{ color: 'white', textShadow: '1px 1px 2px black' }}>
            Circle Radius (%):
            <input
              type="range"
              min="0.1"
              max="0.5"
              step="0.01"
              value={radius}
              onChange={(e) => setRadius(parseFloat(e.target.value))}
            />
          </label>
          <label style={{ color: 'white', textShadow: '1px 1px 2px black' }}>
            Line Color:
            <input
              type="color"
              value={lineColor}
              onChange={(e) => setLineColor(e.target.value)}
            />
          </label>
          <label style={{ color: 'white', textShadow: '1px 1px 2px black' }}>
            Background Color:
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </label>
          <label style={{ color: 'white', textShadow: '1px 1px 2px black' }}>
            Circle Color:
            <input
              type="color"
              value={circleColor}
              onChange={(e) => setCircleColor(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CanvasComponent;