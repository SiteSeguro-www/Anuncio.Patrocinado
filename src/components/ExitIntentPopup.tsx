import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves top of window and hasn't been shown yet
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const whatsappUrl =
    "https://wa.me/5511988677214?text=Ol%C3%A1%2C%20quero%20aproveitar%20o%20desconto%20de%2010%25%20mais%20os%20b%C3%B4nus!";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-4 sm:p-8 overflow-y-auto max-h-[90vh]"
          >
            <div className="absolute top-0 right-0 right-0 left-0 h-2 bg-gradient-to-r from-green-400 to-emerald-600" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 mt-2 sm:mt-0">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 sm:mb-4 leading-tight">
                Espera! Não vá ainda...
              </h2>

              <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 mt-2 w-full">
                <p className="text-base sm:text-lg text-zinc-300">
                  <span className="font-bold text-white text-lg sm:text-xl">
                    Chame agora no WhatsApp
                  </span>
                  <br />e comprando agora você ganha <br />
                  <span className="text-emerald-400 font-extrabold text-xl sm:text-2xl inline-block mt-2 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    10% de DESCONTO
                  </span>
                  <br />
                  <span className="text-white font-bold inline-block mt-2 sm:mt-4">
                    + BÔNUS EXCLUSIVO!
                  </span>
                  <br />
                  <span className="text-[#00f0ff] font-extrabold text-[12px] sm:text-lg inline-block mt-1 bg-blue-900/40 px-2 sm:px-3 py-1 rounded-lg border border-blue-500/30">
                    Pacote Para Usar iA Offline Sem Limites
                  </span>
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full relative overflow-hidden group py-3 sm:py-4 px-4 sm:px-6 bg-[#25D366] text-white text-sm sm:text-lg font-bold rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 sm:gap-3"
              >
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 overflow-hidden rounded-full shrink-0">
                  <img
                    src="/logo%20whatsapp.png"
                    alt="WhatsApp"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190%] h-[190%] max-w-none object-contain"
                  />
                </div>
                EU QUERO MEU DESCONTO AGORA
              </a>

              <p
                className="text-zinc-500 text-xs sm:text-sm mt-4 cursor-pointer hover:text-zinc-400"
                onClick={() => setIsOpen(false)}
              >
                Não, obrigado. Quero pagar o preço cheio.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
