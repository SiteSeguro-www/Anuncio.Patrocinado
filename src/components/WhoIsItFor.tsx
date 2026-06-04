import { motion } from "motion/react";

export default function WhoIsItFor() {
  const audiences = [
    "Criadores de Conteúdo",
    "YouTubers",
    "Programadores",
    "Empresas",
    "Marketing Digital",
    "Designers",
    "Estudantes",
    "Pesquisadores",
    "Autônomos",
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-white mb-16">
          PERFEITO PARA:
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {audiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-6 py-4 bg-zinc-900/80 border border-zinc-700/80 rounded-full font-bold text-white text-lg hover:border-[#00f0ff] hover:bg-zinc-800 transition-colors shadow-lg cursor-default"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
