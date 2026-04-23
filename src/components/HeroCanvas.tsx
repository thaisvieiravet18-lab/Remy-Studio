import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    // Particles and Objects
    let dots: any[] = [];
    let deepParticles: any[] = [];
    let closeParticles: any[] = [];
    let lines: any[] = [];
    let rings: any[] = [];
    let meteors: any[] = [];

    const init = () => {
      dots = [];
      const spacing = 48;
      for (let x = 0; x < width + spacing; x += spacing) {
        for (let y = 0; y < height + spacing; y += spacing) {
          dots.push({
            x,
            y,
            originalX: x,
            originalY: y,
            opacity: Math.random() * 0.08 + 0.02,
            pulseOffset: Math.random() * Math.PI * 2
          });
        }
      }

      deepParticles = Array.from({ length: 80 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.3 + 0.05,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.005 + 0.002,
        radius: Math.random() * 1 + 0.3,
        opacity: Math.random() * 0.2 + 0.05
      }));

      closeParticles = Array.from({ length: 60 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.6 + 0.4,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.01 + 0.005,
        radius: Math.random() * 1.8 + 0.6,
        opacity: Math.random() * 0.55 + 0.2
      }));

      lines = Array.from({ length: 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        angle: Math.random() * Math.PI * 2,
        length: Math.random() * 80 + 30,
        z: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.06 + 0.01,
        drift: (Math.random() - 0.5) * 0.004
      }));

      rings = Array.from({ length: 12 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 120,
        z: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.06 + 0.01
      }));

      meteors = Array.from({ length: 5 }, () => createMeteor());
    };

    const createMeteor = () => ({
      x: -200,
      y: Math.random() * height * 0.6,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 2.5 + 1.5,
      opacity: 0,
      maxOpacity: Math.random() * 0.25 + 0.08,
      delay: Math.random() * 400,
      state: 'waiting' // waiting, active
    });

    const draw = (time: number) => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      const mouseX = mouseRef.current.x || width / 2;
      const mouseY = mouseRef.current.y || height / 2;
      const parallaxX = (mouseX / width - 0.5);
      const parallaxY = (mouseY / height - 0.5);

      // 1. Grid of Dots
      dots.forEach(dot => {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const highlight = Math.max(0, 1 - dist / 200) * 0.3;
        const pulse = (Math.sin(time * 0.002 + dot.pulseOffset) * 0.5 + 0.5) * dot.opacity;
        
        ctx.beginPath();
        ctx.arc(
          dot.originalX + parallaxX * 15,
          dot.originalY + parallaxY * 10,
          0.8, 0, Math.PI * 2
        );
        ctx.fillStyle = `rgba(206, 193, 171, ${pulse + highlight})`;
        ctx.fill();
      });

      // 2. Rings
      rings.forEach(ring => {
        ring.radius += 0.05;
        if (ring.radius > 120) ring.radius = 0;
        const pulse = (Math.sin(time * 0.001 + ring.radius * 0.1) * 0.5 + 0.5) * ring.opacity;
        
        ctx.beginPath();
        ctx.arc(
          ring.x + parallaxX * 30 * ring.z,
          ring.y + parallaxY * 20 * ring.z,
          ring.radius, 0, Math.PI * 2
        );
        ctx.strokeStyle = `rgba(206, 193, 171, ${pulse})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // 3. Lines
      lines.forEach(line => {
        line.angle += line.drift;
        const pulse = (Math.sin(time * 0.0015 + line.x) * 0.5 + 0.5) * line.opacity;
        const x1 = line.x + parallaxX * 40 * line.z;
        const y1 = line.y + parallaxY * 30 * line.z;
        const x2 = x1 + Math.cos(line.angle) * line.length;
        const y2 = y1 + Math.sin(line.angle) * line.length;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(206, 193, 171, ${pulse})`;
        ctx.stroke();
      });

      // 4. Deep Particles
      deepParticles.forEach(p => {
        p.angle += p.speed;
        const ox = Math.sin(p.angle) * 18 * p.z;
        const oy = Math.cos(p.angle * 0.7) * 12 * p.z;
        const pulse = (Math.sin(time * 0.001 + p.x) * 0.5 + 0.5) * p.opacity;

        ctx.beginPath();
        ctx.arc(
          p.x + ox + parallaxX * 60 * p.z,
          p.y + oy + parallaxY * 40 * p.z,
          p.radius, 0, Math.PI * 2
        );
        ctx.fillStyle = `rgba(206, 193, 171, ${pulse})`;
        ctx.fill();
      });

      // 5. Close Particles
      closeParticles.forEach(p => {
        p.angle += p.speed;
        const ox = Math.sin(p.angle) * 24 * p.z;
        const oy = Math.cos(p.angle * 0.8) * 16 * p.z;
        const pulse = (Math.sin(time * 0.002 + p.x) * 0.5 + 0.5) * p.opacity;

        ctx.beginPath();
        ctx.arc(
          p.x + ox + parallaxX * 80 * p.z,
          p.y + oy + parallaxY * 60 * p.z,
          p.radius, 0, Math.PI * 2
        );
        ctx.fillStyle = `rgba(206, 193, 171, ${pulse})`;
        ctx.fill();
      });

      // 6. Meteors
      meteors.forEach((m, idx) => {
        if (m.state === 'waiting') {
          m.delay--;
          if (m.delay <= 0) m.state = 'active';
          return;
        }

        m.x += m.speed;
        m.y += m.speed * 0.4;
        
        if (m.x < width * 0.5) {
          m.opacity = Math.min(m.maxOpacity, m.opacity + 0.01);
        } else {
          m.opacity = Math.max(0, m.opacity - 0.005);
        }

        if (m.x > width + 200) {
          meteors[idx] = createMeteor();
        }

        const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.length, m.y - m.length * 0.4);
        grad.addColorStop(0, `rgba(206, 193, 171, ${m.opacity})`);
        grad.addColorStop(1, 'rgba(206, 193, 171, 0)');

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.length, m.y - m.length * 0.4);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 7. Global Vignette
      const vignette = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) * 0.7);
      vignette.addColorStop(0, 'rgba(206, 193, 171, 0.03)');
      vignette.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // 8. Cursor Light
      const cursorGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 180);
      cursorGrad.addColorStop(0, 'rgba(206, 193, 171, 0.04)');
      cursorGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cursorGrad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
      id="bg"
    />
  );
}
