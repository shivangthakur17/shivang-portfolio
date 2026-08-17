"use client";

import { useEffect, useRef } from "react";

export function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isCoarsePointer = window.matchMedia("(pointer: coarse)");

    if (prefersReducedMotion.matches || isCoarsePointer.matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let mouse = { x: -1000, y: -1000 };
    let current = { x: -1000, y: -1000 };
    const points: { x: number; y: number }[] = [];
    const MAX_POINTS = 15;

    const onMouseMove = (e: MouseEvent) => {
      if (mouse.x === -1000) {
        current.x = e.clientX;
        current.y = e.clientY;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Keep current point lagging behind mouse by a fraction
      const dx = mouse.x - current.x;
      const dy = mouse.y - current.y;
      current.x += dx * 0.25;
      current.y += dy * 0.25;

      // Only draw if we have a valid mouse position
      if (mouse.x !== -1000) {
        points.push({ x: current.x, y: current.y });

        if (points.length > MAX_POINTS) {
          points.shift();
        }

        if (points.length > 1) {
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);

          for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
          }

          // Compute sage color. Sage is #718267. Using a low opacity.
          ctx.strokeStyle = "rgba(113, 130, 103, 0.25)";
          ctx.lineWidth = 3;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden="true"
    />
  );
}
