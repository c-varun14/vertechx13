"use client";
import { useEffect, useRef } from 'react';

const BlipAnimation = () => {
  const blipRefs = useRef([]);

  const blips = [
    { id: 1, className: '_8', style: { bottom: '22.5%', left: '10em' } },
    { id: 2, className: '_7 _2', style: { top: '61%', left: '35%' } },
    { id: 3, className: '_7', style: { bottom: '17.25%', right: '13.75%' } },
    { id: 4, className: '_6', style: { top: '53.75%', right: '23.75%' } },
    { id: 5, className: '_5', style: { top: '22.5%', right: '40%' } },
    { id: 6, className: '_2', style: { top: '61%', left: '35%' } },
    { id: 7, className: '_3', style: { top: '61%', left: '36%' } },
    { id: 8, className: '', style: { bottom: '22.5%', left: '10em' } }
  ];

  useEffect(() => {
    let mouseX = -1000; // start far away
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      blipRefs.current.forEach((blip, index) => {
        if (!blip) return;

        // Idle gentle floating using sine wave
        const time = Date.now() / 1000;
        const floatX = Math.sin(time + index) * 5; // horizontal float
        const floatY = Math.cos(time + index) * 5; // vertical float

        // Mouse interaction
        const rect = blip.getBoundingClientRect();
        const blipCenterX = rect.left + rect.width / 2;
        const blipCenterY = rect.top + rect.height / 2;

        const deltaX = blipCenterX - mouseX;
        const deltaY = blipCenterY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 150;

        let interactionX = 0;
        let interactionY = 0;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          interactionX = (deltaX / distance) * force * 20;
          interactionY = (deltaY / distance) * force * 20;
        }

        blip.style.transform = `translate(${floatX + interactionX}px, ${floatY + interactionY}px)`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate(); // start animation loop

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-[#0f131d] to-[#1a1f2e] overflow-hidden">
      <div className="w-full h-full absolute inset-0 pointer-events-none">
        {blips.map((blip, index) => (
          <div
            key={blip.id}
            ref={(el) => (blipRefs.current[index] = el)}
            className={`blip ${blip.className}`}
            style={blip.style}
          />
        ))}
      </div>

      <style>{`
        .blip {
          width: 0.5em;
          height: 0.5em;
          opacity: 0.75;
          background-color: #fff;
          position: absolute;
          border-radius: 2px;
          animation: blipPulse 5s linear infinite;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          transition: transform 0.2s ease-out;
        }

        @keyframes blipPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(0.95); }
        }

        .blip._2 { animation-delay: 0.5s; }
        .blip._3 { background-color: #797979; animation-delay: 1s; }
        .blip._5 { animation-delay: 1.5s; }
        .blip._6 { animation-delay: 2s; }
        .blip._7 { background-color: #797979; animation-delay: 2.5s; }
        .blip._8 { animation-delay: 3s; }

        @media screen and (max-width: 479px) {
          .blip { width: 1.5em; height: 1.5em; }
        }
      `}</style>
    </div>
  );
};

export default BlipAnimation;
