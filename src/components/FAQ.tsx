import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Funciona sem internet?",
      answer:
        "Sim, 100%. Após instalar o modelo desejado no seu computador, você nunca mais precisará de conexão com a rede para utilizá-lo.",
    },
    {
      question: "Preciso pagar mensalidade?",
      answer:
        "Não. A solução tem pagamento único. Acabe para sempre com as assinaturas mensais.",
    },
    {
      question: "Tem limite de uso?",
      answer:
        "Zero limites. Como você está rodando as IAs no seu próprio hardware, não há restrições de número de mensagens, nem 'tokens/minuto' limitando sua velocidade de raciocínio ou análise de PDFs.",
    },
    {
      question: "Posso instalar novos modelos?",
      answer:
        "Sim! A ferramenta age como uma central flexível, permitindo que você adicione quase qualquer formato de LLM open-source recém-lançado na comunidade.",
    },
    {
      question: "Funciona em Windows?",
      answer:
        "Sim, é totalmente compatível com Windows moderno (10/11), e também roda no Mac.",
    },
    {
      question: "Preciso de placa de vídeo?",
      answer:
        "Modelos pequenos (Phi, Gemma) rodam bem utilizando apenas a memória RAM e a CPU do próprio computador/notebook. Para modelos muito avançados (Llama 70B, etc), é recomendável ter uma placa de vídeo.",
    },
    {
      question: "Posso usar para criar conteúdo?",
      answer:
        "É excelente para criadores! Como você não perde tokens por mensagem, você pode gerar centenas de ideias, roteiros de YouTube, artigos de blog e postagens em segundos até encontrar algo perfeito.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-12 uppercase">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-zinc-800 bg-zinc-900/50 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-zinc-200 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-zinc-400 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
