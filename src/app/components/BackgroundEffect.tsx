'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star particles
    interface Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      flickerSpeed: number;
      flickerOffset: number;
    }

    const stars: Star[] = [];
    const starCount = 200;

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.05 + 0.01,
        opacity: Math.random() * 0.5 + 0.3,
        flickerSpeed: Math.random() * 0.02 + 0.01,
        flickerOffset: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame: number;
    let frame = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Draw stars
      stars.forEach((star) => {
        // Flicker effect
        const flicker = Math.sin(frame * star.flickerSpeed + star.flickerOffset) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * flicker})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move stars slightly for parallax effect
        star.y += star.speed;
        star.x += Math.sin(frame * 0.001 + star.flickerOffset) * 0.1;

        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Gradient background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-r from-[#000000] via-[#0a0a0a] to-[#0a2a2a]" />
      
      {/* Radial gradient overlay for depth */}
      <div className="fixed inset-0 -z-10 bg-gradient-radial from-transparent via-transparent to-[#0a0a0a]/50" />
      
      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: 0.6 }}
      />
    </>
  );
}
