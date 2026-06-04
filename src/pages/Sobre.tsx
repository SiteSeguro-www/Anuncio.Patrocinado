import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 md:py-20">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-400 mb-8 inline-block font-medium"
        >
          &larr; Voltar para a página inicial
        </Link>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
          Sobre Nós
        </h1>
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-zinc-400 leading-relaxed text-lg">
          <p>
            Somos apaixonados por tecnologia, privacidade e inteligência
            artificial. Nossa missão é democratizar o acesso à IA de ponta e
            eliminar a dependência de assinaturas mensais ou ferramentas que
            limitam a criatividade e invadem a privacidade.
          </p>
          <p>
            Desenvolvemos o "Pacote Inteligência Artificial Local" para
            criadores, desenvolvedores e profissionais que querem segurança
            absoluta. Rodar IA offline significa que você é o dono dos seus
            dados. Nenhum servidor externo analisa o que você cria, e nenhum
            serviço pode censurar as suas ideias.
          </p>
          <p>
            O acesso local abre portas incríveis – desde a privacidade completa,
            até as respostas super-rápidas, e claro, o uso vitalício sem
            mensalidades.
          </p>
          <p>
            Este projeto nasceu com base no princípio de que a tecnologia
            avançada deveria estar à disposição das pessoas na sua própria
            máquina e nos seus próprios termos.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
