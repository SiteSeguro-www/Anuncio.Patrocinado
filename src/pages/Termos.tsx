import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Termos() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-12 md:py-20">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block font-medium">&larr; Voltar para a página inicial</Link>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Termos de Uso</h1>
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-zinc-400 leading-relaxed text-lg">
          <p>
            Bem-vindo ao Pacote Inteligência Artificial Local. Ao acessar ou usar nosso site e nossos produtos, você concorda em cumprir e estar vinculado a estes Termos de Uso.
          </p>
          <h2 className="text-2xl text-white font-bold mt-8">1. Aceitação dos Termos</h2>
          <p>
            Ao utilizar nossos serviços, você confirma que leu, entendeu e concorda com todos os termos descritos neste documento. Se você não concordar, por favor, não utilize nossos produtos.
          </p>
          <h2 className="text-2xl text-white font-bold mt-8">2. Uso do Produto</h2>
          <p>
            Nossos pacotes de inteligência artificial são fornecidos para uso pessoal e profissional. Você não tem permissão para revender, redistribuir ou compartilhar acesso aos nossos treinamentos de forma não autorizada.
          </p>
          <h2 className="text-2xl text-white font-bold mt-8">3. Isenção de Garantias</h2>
          <p>
            A inteligência artificial é uma tecnologia em constante evolução. Fornecemos os tutoriais e arquivos como estão, sem quaisquer garantias implícitas ou explícitas de adequação a um fim específico, embora o conteúdo seja devidamente testado para proporcionar a melhor experiência offline.
          </p>
          <h2 className="text-2xl text-white font-bold mt-8">4. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de atualizar ou alterar nossos Termos de Uso a qualquer momento, sem aviso prévio. Recomendamos que você revise esta página periodicamente.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
