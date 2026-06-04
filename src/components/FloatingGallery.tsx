import React, { useEffect, useRef } from "react";

const ALL_IMAGES = Array.from({ length: 48 }, (_, i) =>
  i === 0 ? "/ia.jpeg" : `/ia${i + 1}.jpeg`,
);

// Simple shuffle
for (let i = ALL_IMAGES.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [ALL_IMAGES[i], ALL_IMAGES[j]] = [ALL_IMAGES[j], ALL_IMAGES[i]];
}

export default function FloatingGallery() {
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
  const isHoveredRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children) as HTMLElement[];
    const totalItems = items.length;

    // Initialize item properties
    itemsRef.current = items.map((el, i) => {
      // Distribute evenly around the circle initially
      const angle = (i / totalItems) * Math.PI * 2;
      // Randomize speed slightly for organic feel
      const speed = 0.0015 + Math.random() * 0.001;

      // Ellipse radii
      const radiusX = 180 + Math.random() * 120; // 180 to 300
      const radiusZ = 120 + Math.random() * 80; // 120 to 200

      // Vertical offset to make it look like a cloud
      const yOffset = -100 + Math.random() * 200;

      const zOffset = Math.random() * 60 - 30;

      return { element: el, angle, speed, yOffset, radiusX, radiusZ, zOffset };
    });

    const animate = () => {
      itemsRef.current.forEach((item, index) => {
        // Slow down if this specific item is hovered
        const currentSpeed =
          isHoveredRef.current === index ? item.speed * 0.1 : item.speed;
        item.angle += currentSpeed;

        // Calculate 3D position
        const x = Math.cos(item.angle) * item.radiusX;
        const z = Math.sin(item.angle) * item.radiusZ + item.zOffset;
        // Add a gentle bobbing effect
        const y = item.yOffset + Math.sin(item.angle * 2) * 20;

        // Scale based on Z position (perspective)
        // Depth ranges roughly from -160 to +160
        // Near = positive Z, Far = negative Z
        const perspective = 500;
        const scale = perspective / (perspective - z);

        // Z-index based on Z position (elements closer should have higher z-index)
        const zIndex = Math.floor(z + 200);

        // Opacity and blur based on depth
        // If z is negative, it's further away, so blur it and fade it a bit
        let blur = 0;
        let opacity = 1;
        if (z < 0) {
          blur = Math.min(Math.abs(z) / 40, 5); // Max blur 5px
          opacity = Math.max(1 - Math.abs(z) / 250, 0.3); // Min opacity 0.3
        }

        // If hovered, enlarge and glow strongly
        const isHovered = isHoveredRef.current === index;
        const finalScale = isHovered ? scale * 1.2 : scale;

        item.element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${finalScale})`;
        item.element.style.zIndex = zIndex.toString();
        item.element.style.opacity = opacity.toString();
        item.element.style.filter = `blur(${isHovered ? 0 : blur}px)`;

        if (isHovered) {
          item.element.style.boxShadow =
            "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(168, 85, 247, 0.6)";
          item.element.style.borderColor = "rgba(255, 255, 255, 0.8)";
        } else {
          item.element.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.5)";
          item.element.style.borderColor = "rgba(255, 255, 255, 0.1)";
        }
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
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-0 h-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
        ref={containerRef}
      >
        {ALL_IMAGES.map((src, idx) => (
          <div
            key={idx}
            className="absolute rounded-xl overflow-hidden cursor-pointer transition-[box-shadow,border-color,filter] duration-300 border border-white/10 bg-zinc-900"
            style={{
              width: "120px",
              height: "160px",
              willChange: "transform, opacity, filter, z-index",
            }}
            onMouseEnter={() => (isHoveredRef.current = idx)}
            onMouseLeave={() => (isHoveredRef.current = null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10 pointer-events-none"></div>
            <img
              src={src}
              alt={`Exemplo IA ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Glow ambient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-full blur-[100px] pointer-events-none z-[-1] transform scale-150"></div>
    </div>
  );
}
