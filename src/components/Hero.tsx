import { motion } from "motion/react";
import { Zap, CheckCircle2, Package, Download, MessageCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

import pendriveImg from "../assets/images/futuristic_pendrive.png";

const models = [
  { name: "Llama 3", size: "8B / 70B", specialty: "Uso Geral & Raciocínio" },
  { name: "DeepSeek", size: "V2 / Coder", specialty: "Programação Avançada" },
  { name: "Mistral", size: "7B / 8x7B", specialty: "Velocidade & Eficiência" },
  { name: "Gemma 2", size: "9B / 27B", specialty: "Textos & Criatividade" },
  { name: "Qwen", size: "14B / 72B", specialty: "Linguagem Multimodal" },
  { name: "Dolphin", size: "Diversos", specialty: "Uncensored (Sem Filtros)" },
  { name: "Phi 3", size: "Mini / Small", specialty: "Leve (Para Notebooks)" },
  { name: "Mixtral", size: "8x7B", specialty: "Especialista Múltiplo" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % models.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans bg-zinc-950">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] mix-blend-screen -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1]"
          >
            TODAS AS IAs SEM MENSALIDADE <span className="text-gradient block mt-2">POR APENAS R$ 49,90</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl text-zinc-300 font-semibold max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Gemini, ChatGPT, Ollama, Qwen, DeepSeek, Dolphin e muitos mais. 
            <span className="text-white block mt-2">Rode offline mesmo sem internet e sem assinatura!</span>
          </motion.p>

          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-zinc-300 mx-auto lg:mx-0 max-w-2xl text-left"
          >
             <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00f0ff]" /> Sem mensalidades</li>
             <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00f0ff]" /> Sem limites de uso</li>
             <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00f0ff]" /> Sem limites de tokens</li>
             <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00f0ff]" /> Total privacidade</li>
             <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00f0ff]" /> Funciona localmente</li>
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto lg:mx-0"
          >
            {/* Download Option */}
            <div className="flex-1 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-[#00f0ff]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-[#00f0ff] font-bold text-sm mb-1 uppercase tracking-wider">Formato Digital</div>
              <div className="text-zinc-500 line-through text-xs font-medium mb-0.5">De R$ 247,00</div>
              <div className="text-3xl font-bold text-white mb-1 flex items-baseline gap-1">
                R$ 49<span className="text-lg text-zinc-400">,90</span>
              </div>
              <div className="text-xs text-zinc-400">Download Imediato</div>
            </div>

            {/* Pendrive Option */}
            <div className="flex-1 p-5 rounded-2xl bg-blue-900/10 border border-blue-500/30 backdrop-blur-sm shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 opacity-100 group-hover:opacity-50 transition-opacity"></div>
              <div className="text-blue-400 font-bold text-sm mb-1 uppercase tracking-wider flex items-center justify-between">
                Pendrive Físico
                <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full">MAIS VENDIDO</span>
              </div>
              <div className="text-zinc-500 line-through text-xs font-medium mb-0.5">De R$ 499,00</div>
              <div className="text-3xl font-bold text-white mb-1 flex items-baseline gap-1">
                R$ 199<span className="text-lg text-zinc-400">,00</span>
              </div>
              <div className="text-xs text-blue-300">Receba em Casa</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#planos" className="flex-1 px-8 py-5 bg-gradient-to-r from-[#00f0ff] to-blue-600 text-black text-xl font-bold rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-[0_0_40px_rgba(0,150,255,0.4)] flex items-center justify-center gap-3 relative overflow-hidden group text-center">
                <span className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_infinite]"></span>
                🔥 COMPRAR AGORA
              </a>
              <a href="https://wa.me/5511988677214?text=Ol%C3%A1%2C%20acabei%20de%20comprar%20a%20Central%20de%20IA%20Offline!" target="_blank" rel="noopener noreferrer" className="px-6 py-5 bg-[#25D366] text-white text-lg font-bold rounded-2xl hover:scale-[1.03] transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 whitespace-nowrap">
                <MessageCircle className="w-6 h-6" /> Suporte
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://mpago.la/1FCXQgo" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-4 bg-zinc-900 border border-zinc-700 text-white text-sm sm:text-base font-bold rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 text-center">
                <Package className="w-5 h-5 text-blue-400" />
                RECEBER NO PENDRIVE
              </a>
              <a href="https://mpago.la/1moZaAN" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-4 bg-zinc-900 border border-zinc-700 text-white text-sm sm:text-base font-bold rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 text-center">
                <Download className="w-5 h-5 text-purple-400" />
                BAIXAR AGORA
              </a>
            </div>
            <p className="text-zinc-500 text-sm text-center lg:text-left mt-2">
              Após a compra, favor nos chamar no WhatsApp para liberação imediata.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual Dashboard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0"
        >
          {/* Holographic glowing rings behind the pendrive */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <div className="w-[120%] h-[120%] border-[2px] border-blue-500/20 rounded-full absolute animate-[spin_20s_linear_infinite] shadow-[0_0_50px_rgba(0,200,255,0.2)_inset]" />
             <div className="w-[100%] h-[100%] border-[1px] border-purple-500/20 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]" />
          </div>

          <div className="relative z-10 glow-box rounded-[2rem] w-full flex items-center justify-center aspect-square md:aspect-auto">
            {/* The actual image */}
            <img 
              src={pendriveImg} 
              alt="Pendrive IA Offline Futurista" 
              className="w-full h-auto object-contain rounded-[2rem] drop-shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:scale-105 transition-transform duration-700 relative z-20" 
              referrerPolicy="no-referrer" 
            />
          </div>

          {/* Carousel Cards floating around/below */}
          <div className="relative mt-12 z-20 overflow-hidden w-full max-w-[320px] mx-auto md:max-w-[400px]">
            <h3 className="text-center text-sm font-semibold text-[#00f0ff] uppercase tracking-widest mb-6">Modelos Inclusos no Pacote:</h3>
            <div className="relative h-28" ref={containerRef}>
              {models.map((model, idx) => {
                const isActive = idx === currentIndex;
                const isPrev = idx === (currentIndex - 1 + models.length) % models.length;
                const isNext = idx === (currentIndex + 1) % models.length;

                let transform = "translateX(100%) scale(0.8)";
                let opacity = 0;
                let zIndex = 0;

                if (isActive) {
                  transform = "translateX(0) scale(1)";
                  opacity = 1;
                  zIndex = 20;
                } else if (isPrev) {
                  transform = "translateX(-80%) scale(0.8)";
                  opacity = 0.5;
                  zIndex = 10;
                } else if (isNext) {
                  transform = "translateX(80%) scale(0.8)";
                  opacity = 0.5;
                  zIndex = 10;
                }

                return (
                  <div
                    key={model.name}
                    className="absolute top-0 left-0 right-0 mx-auto w-[280px] p-4 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-xl transition-all duration-500 ease-in-out backdrop-blur-md"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-bold text-white text-lg">{model.name}</div>
                      <div className="text-xs bg-blue-500/20 text-blue-300 font-mono px-2 py-1 rounded-full border border-blue-500/30">
                        {model.size}
                      </div>
                    </div>
                    <div className="text-sm text-zinc-400">
                      Especialidade: <span className="text-zinc-200 font-medium">{model.specialty}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  );
}
