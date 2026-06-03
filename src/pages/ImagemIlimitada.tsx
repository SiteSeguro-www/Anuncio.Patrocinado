import { motion } from "framer-motion";
import {
  Check,
  X,
  Shield,
  Star,
  Image as ImageIcon,
  Zap,
  Infinity,
  CreditCard,
  Sparkles,
  MonitorSmartphone,
  Gift,
} from "lucide-react";
import FloatingGallery from "../components/FloatingGallery";
import ChatWidget from "../components/ChatWidget";
import ImageCarouselSection from "../components/ImageCarouselSection";

export default function ImagemIlimitada() {
  const whatsappUrl =
    "https://wa.me/5511988677214?text=Ol%C3%A1%2C%20quero%20acesso%20%C3%A0%20IA%20de%20Imagens!";
  const checkoutUrl = "https://mpago.la/33tWczi";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/30 text-zinc-900 overflow-x-hidden w-full max-w-[100vw]">
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              CRIE IMAGENS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                ILIMITADAS
              </span>{" "}
              COM IA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-zinc-300 font-medium mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Sem mensalidade. Sem limite de uso. Sem limite de tokens.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl sm:text-2xl lg:text-[28px] leading-tight font-bold text-white mb-10 space-y-4 text-left max-w-2xl mx-auto lg:mx-0"
            >
              <div className="flex items-start gap-3">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 shrink-0 mt-0.5" />
                <span className="drop-shadow-sm">Crie Imagens Sem Censura</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 shrink-0 mt-0.5" />
                <span className="drop-shadow-sm">
                  Crie seu Perfil Mulher para Conteúdo Picante
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 shrink-0 mt-0.5" />
                <span className="drop-shadow-sm">
                  Ganhe Dinheiro Criando Personalidades Femininas
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 shrink-0 mt-0.5" />
                <span className="drop-shadow-sm">
                  Fotos Ultra Realista Feminina em Qualquer Posição sem Censura
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 p-6 rounded-2xl w-full sm:w-auto"
              >
                <div className="flex flex-col items-center sm:items-start gap-1 mb-4">
                  <div className="text-zinc-400 line-through text-lg font-medium">
                    DE R$ 97,00
                  </div>
                  <div className="text-white text-xl">POR APENAS</div>
                  <div className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    R$ 12,90
                  </div>
                </div>

                <ul className="space-y-2 mt-4 text-sm sm:text-base font-semibold">
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400 w-5 h-5" /> ACESSO IMEDIATO
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400 w-5 h-5" /> PAGAMENTO ÚNICO
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-green-400 w-5 h-5" /> ACESSO
                    VITALÍCIO
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center mt-0 sm:mt-12"
              >
                {/* 7 Days Shield */}
                <div className="relative z-10 w-20 h-24 bg-gradient-to-b from-zinc-800 to-black rounded-b-full border border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)] flex flex-col items-center pt-3">
                  <div className="text-4xl font-black text-yellow-500 drop-shadow-md leading-none">
                    7
                  </div>
                  <div className="text-xs font-bold text-yellow-500 tracking-wider">
                    DIAS
                  </div>
                </div>

                {/* Right text panel */}
                <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-r-xl h-[86px] flex flex-col justify-center py-2 pr-4 pl-6 -ml-4 z-0 shadow-lg">
                  <div className="text-black font-black text-xs sm:text-sm uppercase leading-tight mb-1">
                    Garantia
                    <br />
                    Seu dinheiro
                    <br />
                    de volta
                  </div>
                  <div className="bg-black text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 w-max">
                    <Shield className="w-3 h-3 text-red-500 fill-current" />{" "}
                    COMPRA SEGURA MERCADO PAGO
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-xl sm:text-2xl py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-105"
              >
                QUERO ACESSO AGORA
              </a>
              <div className="flex flex-col text-center sm:text-left bg-blue-900/30 border border-blue-500/20 py-2 sm:py-3 px-4 sm:px-5 rounded-xl border-dashed">
                <span className="text-emerald-400 font-bold text-xs sm:text-sm mb-0.5 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                  <Gift className="w-4 h-4" /> Bônus Exclusivo
                </span>
                <span className="text-white font-bold text-sm sm:text-base leading-tight">
                  Pacote Para Usar iA
                  <br className="hidden sm:block" /> Offline Sem Limites
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full h-[300px] sm:h-[400px] md:h-[500px]"
          >
            <FloatingGallery />
          </motion.div>
        </div>
      </section>

      <ImageCarouselSection className="bg-zinc-900 !pt-0" />

      {/* DOR DO CLIENTE */}
      <section className="py-24 px-4 sm:px-6 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-black text-zinc-900 mb-12 tracking-tight"
          >
            VOCÊ ESTÁ CANSADO DE PAGAR TODO MÊS?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12 text-left">
            {[
              "Mensalidades caras",
              "Limites de geração frustrantes",
              "Créditos acabam rapidamente",
              "Bloqueios por limite de tokens",
              "Assinaturas cada vez mais caras",
              "Dependência de pagamentos recorrentes",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                  <X className="w-5 h-5 text-red-600" strokeWidth={3} />
                </div>
                <span className="text-lg font-semibold text-zinc-800">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-bold text-red-600 max-w-3xl mx-auto leading-relaxed p-6 bg-red-50 rounded-2xl"
          >
            "Todo mês você paga novamente apenas para continuar usando uma
            ferramenta que já deveria ser sua."
          </motion.p>
        </div>
      </section>

      {/* SOLUÇÃO & BENEFÍCIOS */}
      <section className="py-24 px-4 sm:px-6 bg-zinc-900 text-white relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-black mb-6 tracking-tight"
            >
              A SOLUÇÃO DEFINITIVA
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl sm:text-2xl text-zinc-300 font-medium max-w-3xl mx-auto leading-relaxed"
            >
              Tenha acesso a uma poderosa IA para criar imagens quando quiser,
              sem mensalidades e sem limitações absurdas.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              "Imagens ilimitadas",
              "Sem limite de tokens",
              "Sem mensalidade",
              "Pagamento único",
              "Acesso vitalício",
              "Uso 24 horas por dia",
              "Interface simples",
              "Resultados rápidos",
              "Economize centenas de reais por ano",
              "Atualizações incluídas",
              "Sem cobranças recorrentes",
              "Acesso imediato após pagamento",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-4 rounded-xl flex items-center gap-3 hover:bg-zinc-800 hover:border-zinc-600 transition-all"
              >
                <div className="bg-green-500/20 p-1.5 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-green-400" strokeWidth={3} />
                </div>
                <span className="font-semibold text-zinc-100">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-black text-zinc-900 mb-16 tracking-tight"
          >
            POR QUE PAGAR TODO MÊS?
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Outras IAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 bg-zinc-50 border border-zinc-200 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
              <h3 className="text-2xl font-black text-zinc-400 mb-8 uppercase tracking-widest">
                OUTRAS IAs
              </h3>
              <ul className="space-y-6 text-left">
                {[
                  "Mensalidade",
                  "Limite de uso",
                  "Limite de tokens",
                  "Renovação constante",
                  "Custos altos",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <X
                      className="w-6 h-6 text-red-500 flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-xl font-medium text-zinc-600">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Nossa Solução */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 bg-zinc-900 rounded-3xl p-8 relative shadow-2xl overflow-hidden border-2 border-blue-500/30 transform md:-translate-y-4"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                NOSSA SOLUÇÃO
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </h3>
              <ul className="space-y-6 text-left">
                {[
                  "Pagamento único",
                  "Uso ilimitado",
                  "Sem limite de tokens",
                  "Acesso vitalício",
                  "Muito mais econômica",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      className="w-6 h-6 text-green-400 flex-shrink-0"
                      strokeWidth={3}
                    />
                    <span className="text-xl font-bold text-white">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ECONOMIA */}
      <section className="py-24 px-4 sm:px-6 bg-zinc-100 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-black text-zinc-900 mb-16 tracking-tight"
          >
            QUANTO VOCÊ ECONOMIZA?
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-2">
                IA tradicional:
              </div>
              <div className="text-3xl font-bold text-zinc-400 line-through">
                R$ 49/mês
              </div>
              <div className="text-xl font-medium text-zinc-500">=</div>
              <div className="text-4xl sm:text-5xl font-black text-zinc-600 bg-white px-6 py-4 rounded-2xl shadow-sm border border-zinc-200">
                R$ 588 / ano
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden md:flex rotate-90 md:rotate-0"
            >
              <Zap className="w-12 h-12 text-blue-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
                Nossa solução:
              </div>
              <div className="text-5xl sm:text-7xl font-black text-zinc-900 bg-white px-8 py-5 rounded-3xl shadow-xl border border-blue-100 flex flex-col items-center">
                R$ 12,90{" "}
                <span className="text-lg font-bold text-green-500 uppercase tracking-widest mt-2 border-t border-zinc-100 pt-2 w-full">
                  Uma única vez
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-2xl sm:text-3xl font-bold text-green-600 bg-green-50 inline-block px-8 py-4 rounded-full border border-green-200 shadow-sm"
          >
            Economia superior a 98%
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-black text-zinc-900 mb-16 tracking-tight hidden"
          >
            DEPOIMENTOS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Finalmente parei de pagar mensalidades.",
                author: "Carlos",
              },
              {
                text: "Uso todos os dias e valeu cada centavo.",
                author: "Mariana",
              },
              {
                text: "Melhor investimento que fiz para criar imagens.",
                author: "Roberto",
              },
            ].map((dep, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-zinc-50 border border-zinc-100 p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xl font-bold text-zinc-800 mb-6 italic">
                  "{dep.text}"
                </p>
                {/* <div className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">- {dep.author}</div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

        <div className="max-w-4xl mx-auto rounded-3xl border border-zinc-700 bg-zinc-800/50 p-8 sm:p-12 text-center relative z-10 shadow-2xl backdrop-blur-sm flex flex-col sm:flex-row items-center gap-8">
          <div className="bg-zinc-700/50 p-6 rounded-full flex-shrink-0 shadow-[0_0_50px_rgba(37,211,102,0.1)] border border-zinc-600">
            <Shield className="w-20 h-20 text-green-400" />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">
              COMPRA 100% SEGURA
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 font-semibold text-zinc-300">
                <Check className="w-5 h-5 text-green-400" /> Pagamento Seguro
              </div>
              <div className="flex items-center gap-2 font-semibold text-zinc-300">
                <Check className="w-5 h-5 text-green-400" /> Processado pela
                Mercado Pago
              </div>
              <div className="flex items-center gap-2 font-semibold text-zinc-300">
                <Check className="w-5 h-5 text-green-400" /> Ambiente protegido
              </div>
              <div className="flex items-center gap-2 font-semibold text-zinc-300">
                <Check className="w-5 h-5 text-green-400" /> Garantia de
                reembolso
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Se houver qualquer problema, você conta com a proteção e garantia
              oferecida pela plataforma de pagamento.
            </p>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 bg-zinc-50 relative">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-7xl font-black text-zinc-900 mb-6 tracking-tight"
          >
            APROVEITE AGORA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-3xl font-medium text-zinc-600 mb-12"
          >
            Comece hoje mesmo a criar imagens ilimitadas pagando apenas uma vez.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-12 drop-shadow-sm"
          >
            R$ 12,90
          </motion.div>

          <motion.a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="block w-full max-w-lg mx-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-black text-2xl sm:text-3xl py-6 px-12 rounded-3xl shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] transition-all duration-300 uppercase tracking-wide border-b-4 border-green-700"
          >
            QUERO ACESSO IMEDIATO
          </motion.a>

          {/* Secure lock icon */}
          <div className="flex items-center gap-2 mt-8 text-zinc-500 font-medium">
            <Shield className="w-5 h-5" />
            Pagamento 100% Seguro
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-zinc-950 py-12 px-4 sm:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-zinc-400" />
            Pagamento Seguro via Mercado Pago
          </div>
          <div className="flex items-center gap-2">
            <Infinity className="w-5 h-5 text-zinc-400" />
            Acesso Vitalício
          </div>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              Suporte ao Cliente
            </a>
          </div>
          <div className="text-zinc-600">
            &copy; {new Date().getFullYear()} Todos os Direitos Reservados
          </div>
        </div>
      </footer>

      <ChatWidget
        message="Tem alguma dúvida sobre nosso pacote de geração de imagens com IA?"
        whatsappUrl="https://wa.me/5511988677214?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20sobre%20o%20pacote%20da%20IA%20de%20Imagens!"
      />
    </div>
  );
}
