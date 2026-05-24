import { motion } from "motion/react";
import { Package, Download, Check } from "lucide-react";

export default function PricingOptions() {
  return (
    <section id="planos" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha seu formato
          </h2>
          <p className="text-zinc-400 text-lg">
            Adquira o pacote físico ou digital. Ambas as versões incluem todo o conteúdo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Pendrive Option */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col relative overflow-hidden group hover:border-blue-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Package className="w-32 h-32 text-blue-500" />
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">PENDRIVE IA OFFLINE</h3>
              <p className="text-zinc-400 mb-6">Receba tudo pronto e configurado.</p>
              
              <div className="mb-8">
                <span className="text-zinc-500 line-through text-lg font-medium">De R$ 499,00</span>
                <div className="text-5xl font-bold text-white flex items-baseline gap-2 mt-1">
                  <span className="text-2xl text-blue-400 font-medium">Por</span> R$ 199<span className="text-2xl text-zinc-400">,00</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <Check className="w-5 h-5 text-[#00f0ff]" /> Plug and Play (Conecte e use)
                </li>
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <Check className="w-5 h-5 text-[#00f0ff]" /> Instalação super rápida
                </li>
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <Check className="w-5 h-5 text-[#00f0ff]" /> Ideal para iniciantes
                </li>
              </ul>
            </div>

            <a 
              href="https://mpago.la/1FCXQgo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 mt-auto bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-colors border border-zinc-700 flex items-center justify-center text-center"
            >
              SELECIONAR PENDRIVE
            </a>
          </motion.div>

          {/* Download Option */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-[#00f0ff]/50 p-8 flex flex-col relative overflow-hidden group shadow-[0_0_40px_rgba(0,240,255,0.1)]"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <Download className="w-32 h-32 text-[#00f0ff]" />
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="w-16 h-16 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] flex items-center justify-center mb-6 border border-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">DOWNLOAD IMEDIATO</h3>
              <p className="text-[#00f0ff] font-medium mb-6">Receba os arquivos agora mesmo.</p>
              
              <div className="mb-8">
                <span className="text-blue-300/60 line-through text-lg font-medium">De R$ 247,00</span>
                <div className="text-5xl font-bold text-white flex items-baseline gap-2 mt-1">
                  <span className="text-2xl text-[#00f0ff] font-medium">Por</span> R$ 14<span className="text-2xl text-white/50">,90</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white font-medium">
                  <Check className="w-5 h-5 text-[#00f0ff]" /> Entrega instantânea
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <Check className="w-5 h-5 text-[#00f0ff]" /> Acesso imediato à plataforma
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <Check className="w-5 h-5 text-[#00f0ff]" /> Atualizações futuras grátis
                </li>
              </ul>
            </div>

            <a 
              href="https://mpago.la/1moZaAN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 mt-auto bg-gradient-to-r from-[#00f0ff] to-blue-600 text-black text-lg font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(0,240,255,0.3)] flex items-center justify-center text-center"
            >
              BAIXAR AGORA
            </a>
          </motion.div>

        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-zinc-400">
            <strong>Atenção:</strong> Após realizar o pagamento, por favor envie uma mensagem no WhatsApp para <a href="https://wa.me/5511988677214" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] font-bold hover:underline">(11) 98867-7214</a> informando o comprovante para que possamos enviar seu link de acesso imediato ou os detalhes de rastreio do seu Pendrive.
          </p>
        </div>
      </div>
    </section>
  );
}
