import { motion } from "motion/react";
import { Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
          TENHA SUA IA <span className="text-gradient">OFFLINE HOJE</span>
        </h2>
        
        <div className="space-y-2 mb-12">
          <p className="text-2xl text-zinc-300 font-medium">Use quantas vezes quiser.</p>
          <p className="text-2xl text-zinc-300 font-medium">Sem mensalidades.</p>
          <p className="text-2xl text-zinc-300 font-medium">Sem limites.</p>
        </div>

        <a 
          href="#planos"
          className="w-full max-w-lg px-8 py-6 bg-gradient-to-r from-[#00f0ff] to-blue-600 text-black text-2xl font-bold rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.4)] hover:shadow-[0_0_80px_rgba(0,240,255,0.6)] flex items-center justify-center gap-3 relative overflow-hidden group hover:-translate-y-1 transition-all"
        >
          <span className="absolute inset-0 w-full h-full bg-white/30 -skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_infinite]"></span>
          <Zap className="w-8 h-8 fill-black" />
          QUERO MINHA IA OFFLINE AGORA
        </a>
        
        <p className="mt-6 text-zinc-500 font-medium text-sm tracking-wide uppercase">Garantia total de 7 dias • Acesso imediato à plataforma</p>
      </div>
    </section>
  );
}
