import { motion } from "motion/react";
import {
  Lock,
  Zap,
  HardDrive,
  MessageSquare,
  DollarSign,
  Globe,
  Database,
  Wrench,
  Lightbulb,
  Code2,
  GraduationCap,
  Box,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      title: "Privacidade Total",
      description: "Nenhuma conversa enviada para terceiros.",
    },
    {
      icon: <InfinityIcon className="w-6 h-6 text-purple-400" />,
      title: "Sem Limites",
      description: "Converse o dia inteiro.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-pink-400" />,
      title: "Sem Limites de Tokens",
      description: "Sem bloqueios artificiais.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Sem Mensalidade",
      description: "Pagamento único.",
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-400" />,
      title: "Funciona Sem Internet",
      description: "Use em qualquer lugar.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Mais Velocidade",
      description: "Processamento local.",
    },
    {
      icon: <Box className="w-6 h-6 text-orange-400" />,
      title: "Diversos Modelos",
      description: "Escolha a IA ideal.",
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      title: "Seus Dados São Seus",
      description: "Controle total.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-red-500" />,
      title: "Fácil Instalação",
      description: "Passo a passo incluso.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: "Criação de Conteúdo",
      description: "Vídeos, posts, blogs e roteiros.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Programação",
      description: "Ajuda em códigos e projetos.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      title: "Estudos",
      description: "Pesquisas e aprendizado.",
    },
  ];

  return (
    <section className="py-24 relative z-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display leading-tight text-3xl md:text-5xl font-bold text-white mb-4">
            POR QUE TER SUA <span className="text-gradient">IA OFFLINE?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="glow-box rounded-2xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col items-start hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center mb-5 border border-zinc-800/50 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-white font-medium text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfinityIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  );
}
