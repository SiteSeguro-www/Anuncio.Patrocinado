import React, { useEffect, useRef } from "react";

const AI_LOGOS = [
  "/logo chtgpt.png",
  "/logo deepseek.png",
  "/logo gemini.png",
  "/logo ollama.png",
  "/logo qwen.png",
];

export default function HeroFloatingLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<
    Array<{
      element: HTMLElement;
      angle: number;
      speed: number;
      yOffset: number;
      radiusX: number;
      radiusZ: number;
      zOffset: number;
    }>
  >([]);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];
    const totalItems = items.length;

    // Initialize item properties
    itemsRef.current = items.map((el, i) => {
      // Distribute evenly around the circle initially
      const angle = (i / totalItems) * Math.PI * 2;
      // Randomize speed slightly for organic feel
      const speed = 0.004 + Math.random() * 0.003;

      // Ellipse radii - adjusted for hero container
      const radiusX = 140 + Math.random() * 60;
      const radiusZ = 100 + Math.random() * 40;

      // Vertical offset to make it look like a cloud
      const yOffset = -60 + Math.random() * 120;

      const zOffset = Math.random() * 40 - 20;

      return { element: el, angle, speed, yOffset, radiusX, radiusZ, zOffset };
    });

    const animate = () => {
      itemsRef.current.forEach((item) => {
        // Simple rotation
        item.angle -= item.speed; // Reversing direction to make it dynamic

        // Calculate 3D position
        const x = Math.cos(item.angle) * item.radiusX;
        const z = Math.sin(item.angle) * item.radiusZ + item.zOffset;
        // Add a gentle bobbing effect
        const y = item.yOffset + Math.sin(item.angle * 2) * 20;

        // Scale based on Z position (perspective)
        const perspective = 500;
        const scale = perspective / (perspective - z);

        // Z-index based on Z position
        const zIndex = Math.floor(z + 200);

        // Opacity and blur based on depth
        let blur = 0;
        let opacity = 1;
        if (z < 0) {
          blur = Math.min(Math.abs(z) / 40, 4);
          opacity = Math.max(1 - Math.abs(z) / 250, 0.4);
        }

        item.element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
        item.element.style.zIndex = zIndex.toString();
        item.element.style.opacity = opacity.toString();
        item.element.style.filter = `blur(${blur}px)`;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center lg:mt-0"
      style={{ perspective: "800px" }}
    >
      <div
        className="relative w-0 h-0 flex items-center justify-center z-20"
        style={{ transformStyle: "preserve-3d" }}
        ref={containerRef}
      >
        {AI_LOGOS.map((src, idx) => (
          <div
            key={idx}
            className="absolute flex items-center justify-center hover:scale-110 transition-transform duration-300"
            style={{
              width: "140px",
              height: "140px",
              willChange: "transform, opacity, filter, z-index",
            }}
          >
            <img
              src={src}
              alt={`AI Logo ${idx + 1}`}
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Central big glow to ground the animation */}
      <div className="absolute w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-gradient-to-br from-[#00f0ff]/20 to-blue-600/30 rounded-full blur-[70px] z-10 pointer-events-none animate-pulse"></div>
    </div>
  );
}
