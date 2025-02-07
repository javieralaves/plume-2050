'use client';

import { useEffect, useRef } from 'react';

const TransactionVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Transaction {
      x: number;
      y: number;
      targetY: number;
      opacity: number;
      speed: number;

      constructor() {
        this.x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
        this.y = canvas.height + 10;
        this.targetY = Math.random() * canvas.height * 0.8;
        this.opacity = 0;
        this.speed = 1 + Math.random() * 2;
      }

      update() {
        if (this.y > this.targetY) {
          this.y -= this.speed;
          this.opacity = Math.min(1, this.opacity + 0.05);
        } else {
          this.opacity -= 0.02;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(this.x - 10, this.y);
        ctx.lineTo(this.x + 10, this.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity})`;
        ctx.fill();
      }

      isFinished() {
        return this.opacity <= 0 && this.y <= this.targetY;
      }
    }

    let transactions: Transaction[] = [];
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new transaction randomly
      if (Math.random() < 0.1) {
        transactions.push(new Transaction());
      }

      // Update and draw transactions
      transactions.forEach(transaction => {
        transaction.update();
        transaction.draw();
      });

      // Remove finished transactions
      transactions = transactions.filter(t => !t.isFinished());

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default TransactionVisualization; 