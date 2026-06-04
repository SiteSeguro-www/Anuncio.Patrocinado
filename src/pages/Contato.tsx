import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Mail, MessageCircle } from "lucide-react";

export default function Contato() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 md:py-20">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block font-medium">&larr; Voltar para a página inicial</Link>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Contato</h1>
        <p className="text-xl text-zinc-400 mb-12">
          Tem alguma dúvida, precisa de suporte ou quer apenas conversar com a gente? Escolha o melhor canal de atendimento:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://wa.me/5511988677214?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20a%20IA%20Offline!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-10 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all group"
          >
            <div className="w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center mb-6 text-[#25D366] group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">WhatsApp</h2>
            <p className="text-zinc-500 text-center">Atendimento rápido por mensagem, para tirar dúvidas ou ajudar na instalação.</p>
            <span className="mt-6 text-[#25D366] font-medium group-hover:underline">Chamar no chat &rarr;</span>
          </a>

          <a
            href="mailto:suporte@iailimitada.com"
            className="flex flex-col items-center p-10 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/5 transition-all group"
          >
            <div className="w-16 h-16 bg-[#00f0ff]/20 rounded-2xl flex items-center justify-center mb-6 text-[#00f0ff] group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">E-mail</h2>
            <p className="text-zinc-500 text-center">Se prefere enviar detalhes ou se deparou com alguma situação técnica específica.</p>
            <span className="mt-6 text-[#00f0ff] font-medium group-hover:underline">Enviar E-mail &rarr;</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
