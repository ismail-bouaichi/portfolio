"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouse = { x: null, y: null };

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Star properties
    const stars = [];
    const starCount = 100;
    const connectionDistance = 100;

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fill();

        // Move star
        star.x += star.speedX;
        star.y += star.speedY;

        // Bounce off edges
        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

        // Connect to mouse
        if (mouse.x != null) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Connect to other stars
        stars.forEach(otherStar => {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 2 }}
    />
  );
};

export default StarBackground;