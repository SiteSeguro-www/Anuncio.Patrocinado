import { Play } from 'lucide-react';

export default function VideoSection({ className = "bg-zinc-950" }: { className?: string }) {
  return (
    <section className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 w-full ${className}`}>
      <div className="max-w-5xl mx-auto w-full">
        <div className="relative w-full aspect-video rounded-2xl md:rounded-[32px] overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] group flex items-center justify-center">
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-blue-600/10 mix-blend-overlay"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:bg-[#00f0ff]/20 group-hover:scale-110 group-hover:border-[#00f0ff]/30 transition-all duration-500 mb-4 shadow-lg">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-2 text-white/80 group-hover:text-white transition-colors" fill="currentColor" />
            </div>
            <p className="text-sm sm:text-base font-medium tracking-wide uppercase">Seu vídeo será inserido aqui</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
