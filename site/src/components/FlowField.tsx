"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  px: number;
  py: number;
  speed: number;
  life: number;
  maxLife: number;
}

export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = "#0c0907";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const NUM = 750;

    const particles: Particle[] = Array.from({ length: NUM }, () => {
      const life = Math.random() * 180;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        px: 0,
        py: 0,
        speed: 0.8 + Math.random() * 1.4,
        life,
        maxLife: 120 + Math.random() * 100,
      };
    });
    particles.forEach((p) => { p.px = p.x; p.py = p.y; });

    let time = 0;
    let animId: number;

    // Multi-frequency noise field — creates organic, flowing terrain-like currents
    function getAngle(x: number, y: number, t: number): number {
      const nx = x / canvas!.width;
      const ny = y / canvas!.height;
      return (
        Math.sin(nx * 4.2 + t * 0.35) * Math.PI +
        Math.cos(ny * 3.1 + t * 0.28) * Math.PI * 0.7 +
        Math.sin((nx * 1.8 + ny * 2.4) + t * 0.18) * Math.PI * 0.5 +
        Math.cos((nx * 0.9 - ny * 1.6) + t * 0.12) * Math.PI * 0.3
      );
    }

    function animate() {
      // Faster fade — cleaner canvas, more breathing room between lines
      ctx.fillStyle = "rgba(12, 9, 7, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const angle = getAngle(p.x, p.y, time);

        p.px = p.x;
        p.py = p.y;
        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;
        p.life++;

        // Smooth fade in → bright peak → fade out
        const progress = p.life / p.maxLife;
        const opacity = Math.sin(progress * Math.PI) * 0.38;

        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(218, 158, 82, ${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Reset when dead or escaped
        if (
          p.life >= p.maxLife ||
          p.x < -10 || p.x > canvas.width + 10 ||
          p.y < -10 || p.y > canvas.height + 10
        ) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.px = p.x;
          p.py = p.y;
          p.life = 0;
          p.maxLife = 120 + Math.random() * 100;
          p.speed = 0.8 + Math.random() * 1.4;
        }
      }

      time += 0.008;
      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
