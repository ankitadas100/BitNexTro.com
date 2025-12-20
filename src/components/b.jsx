import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Wave {
      constructor(y, speed, amplitude, color) {
        this.y = y;
        this.speed = speed;
        this.amplitude = amplitude;
        this.color = color;
        this.offset = 0;
      }

      update() {
        this.offset += this.speed;
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(0, this.y);

        for (let x = 0; x < canvas.width; x++) {
          const y = this.y + Math.sin((x + this.offset) * 0.01) * this.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, this.y - this.amplitude, 0, canvas.height);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 100 }, () => new Particle());
    const waves = [
      new Wave(canvas.height * 0.6, 0.5, 30, 'rgba(224, 231, 255, 0.3)'),
      new Wave(canvas.height * 0.7, 0.3, 40, 'rgba(199, 210, 254, 0.2)'),
      new Wave(canvas.height * 0.8, 0.4, 35, 'rgba(165, 180, 252, 0.15)')
    ];

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, '#ffffff');
      bgGradient.addColorStop(0.5, '#f8faff');
      bgGradient.addColorStop(1, '#ffffff');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw waves
      waves.forEach(wave => {
        wave.update();
        wave.draw();
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [dimensions]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      
     
    </div>
  );
}