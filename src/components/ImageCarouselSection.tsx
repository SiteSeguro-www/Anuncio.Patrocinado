import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  "/ia41.jpeg",
  "/ia42.jpeg",
  "/ia43.jpeg",
  "/ia44.jpeg",
  "/ia45.jpeg",
  "/ia46.jpeg",
  "/ia47.jpeg",
  "/ia48.jpeg",
];

export default function ImageCarouselSection({ className = "bg-zinc-950" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  return (
    <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 w-full ${className}`}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-video rounded-2xl md:rounded-[32px] overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] group">
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-blue-600/10 mix-blend-overlay z-10 pointer-events-none"></div>
          
          <div className="relative w-full h-full text-zinc-400 group-hover:text-white transition-colors duration-300">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={IMAGES[currentIndex]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                alt={`Galeria de imagem ${currentIndex + 1}`}
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all shadow-lg hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all shadow-lg hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir para a imagem ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
