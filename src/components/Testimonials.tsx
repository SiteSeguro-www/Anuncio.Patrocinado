import { motion } from "motion/react";
import { Star, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rafael Cardoso",
      role: "Programador",
      content: "Uso os modelos locais para analisar código sem enviar o código do meu projeto pra nuvem. Muito bom, velocidade 10/10.",
      photo: "https://i.pravatar.cc/150?u=a"
    },
    {
      name: "Mariana Alves",
      role: "Copywriter",
      content: "Cancelai meu GPT Plus. Escrevo dezenas de e-mails de vendas por dia usando o Mixtral. Sem censura e zero limites. Perfeito.",
      photo: "https://i.pravatar.cc/150?u=b"
    },
    {
      name: "Felipe Mendes",
      role: "Dono de Agência",
      content: "Compramos a versão Pendrive para os funcionários. É espetacular plugar, instalar e já ter tudo pronto sem mensalidades pra equipe toda.",
      photo: "https://i.pravatar.cc/150?u=c"
    },
    {
      name: "Carolina Souza",
      role: "Estudante",
      content: "Estudo no ônibus onde não tem rede e continuo fazendo perguntas e resumos imensos. Mudou minha rotina.",
      photo: "https://i.pravatar.cc/150?u=d"
    },
    {
      name: "Thiago Rocha",
      role: "Marketing Digital",
      content: "Gerar centenas de copies sem bater no limite de tokens é o sonho de qualquer gestor de tráfego. Excelente pacote.",
      photo: "https://i.pravatar.cc/150?u=e"
    },
    {
      name: "Lúcia Almeida",
      role: "Criadora de Conteúdo",
      content: "Os roteiros do meu canal dobraram de volume. A IA roda fluidamente no meu notebook, chocada com a qualidade dos modelos.",
      photo: "https://i.pravatar.cc/150?u=f"
    },
    {
      name: "Roberto Silva",
      role: "Pesquisador",
      content: "Muito prático. A integração das pastas e o guia passo a passo fazem o trabalho de configurar um LLM local virar brincadeira de criança.",
      photo: "https://i.pravatar.cc/150?u=g"
    },
    {
      name: "Bruna Costa",
      role: "Designer",
      content: "O produto já se pagou no primeiro mês que não precisei renovar assinatura. Qualidade fantástica.",
      photo: "https://i.pravatar.cc/150?u=h"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 border-dashed">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-white mb-6">
          Excelente <span className="text-zinc-500 font-medium ml-2">4.9 de 5</span>
        </h2>
        <div className="flex justify-center gap-1 mb-16">
           {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-[#00b67a] p-1.5 rounded-sm">
                 <Star className="w-5 h-5 fill-white text-white" />
              </div>
           ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                 {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#00b67a] p-0.5 rounded-sm">
                       <Star className="w-3 h-3 fill-white text-white" />
                    </div>
                 ))}
              </div>
              <h4 className="text-white font-bold mb-2">"{t.content.substring(0, 30)}..."</h4>
              <p className="text-zinc-400 text-sm mb-6 flex-1">{t.content}</p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full border-2 border-zinc-700" />
                <div>
                  <h4 className="text-zinc-200 font-bold text-sm tracking-tight">{t.name}</h4>
                  <p className="text-zinc-500 text-xs flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-zinc-500" /> Comprador Verificado
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
