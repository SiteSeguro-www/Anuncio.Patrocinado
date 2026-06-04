import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background flare */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-1/4 max-w-sm h-[3px] blur-sm bg-gradient-to-r from-transparent via-blue-500/80 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Compare e entenda a vantagem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Cloud AI Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 opacity-70"
          >
            <div className="flex items-center justify-center mb-8 pb-6 border-b border-zinc-800">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-400 text-center uppercase tracking-widest">
                Serviços Online
              </h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <X className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-zinc-300 font-medium">
                  Mensalidade recorrente
                </span>
              </li>
              <li className="flex items-center gap-4">
                <X className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-zinc-300 font-medium">
                  Dependência de servidor
                </span>
              </li>
              <li className="flex items-center gap-4">
                <X className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-zinc-300 font-medium">
                  Limites de uso estritos
                </span>
              </li>
              <li className="flex items-center gap-4">
                <X className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-zinc-300 font-medium">
                  Limites de mensagens (Tokens)
                </span>
              </li>
              <li className="flex items-center gap-4">
                <X className="w-6 h-6 text-red-500 shrink-0" />
                <span className="text-zinc-300 font-medium">
                  Dependência total da internet
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Local AI Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-b from-blue-900/40 to-zinc-900 border border-[#00f0ff] p-8 relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-[60px]"></div>

            <div className="flex items-center justify-center mb-8 pb-6 border-b border-[#00f0ff]/30 relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center uppercase tracking-widest drop-shadow-md">
                IA OFFLINE
              </h3>
            </div>

            <ul className="space-y-6 relative">
              <li className="flex items-center gap-4">
                <div className="bg-green-500/20 rounded-full p-1.5 shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white font-bold text-lg">
                  Pagamento único
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-green-500/20 rounded-full p-1.5 shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white font-bold text-lg">
                  Uso ilimitado
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-green-500/20 rounded-full p-1.5 shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white font-bold text-lg">
                  Privacidade total
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-green-500/20 rounded-full p-1.5 shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white font-bold text-lg">
                  Sem limites de mensagens
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-green-500/20 rounded-full p-1.5 shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white font-bold text-lg">
                  Sem necessidade de internet
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
