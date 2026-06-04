import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Privacidade() {
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
          Política de Privacidade
        </h1>
        <div className="prose prose-invert prose-blue max-w-none space-y-6 text-zinc-400 leading-relaxed text-lg">
          <p>
            A sua privacidade é importante para nós. Esta Política de
            Privacidade explica como coletamos, usamos e protegemos as suas
            informações pessoais.
          </p>
          <h2 className="text-2xl text-white font-bold mt-8">
            1. Informações Coletadas
          </h2>
          <p>
            Coletamos apenas as informações necessárias para procerssar seu
            pedido, como nome e dados de contato. Como as IAs rodam offline na
            sua máquina, nós <strong>não</strong> temos acesso às suas
            conversas, aos seus arquivos ou aos seus prompts após a instalação.
          </p>
          <h2 className="text-2xl text-white font-bold mt-8">
            2. Como Usamos as Informações
          </h2>
          <p>
            Seus dados são usados exclusivamente para garantir a entrega do
            produto, para fornecer suporte técnico e para comunicações
            relacionadas às atualizações do pacote.
          </p>
          <h2 className="text-2xl text-white font-bold mt-8">
            3. Proteção de Dados
          </h2>
          <p>
            Implementamos medidas de segurança para proteger seus dados contra
            acesso não autorizado. As transações de pagamento são processadas de
            forma segura por meio de plataformas confiáveis e não armazenamos as
            informações do seu cartão de crédito.
          </p>
          <h2 className="text-2xl text-white font-bold mt-8">4. Cookies</h2>
          <p>
            Usamos cookies e tecnologias semelhantes para melhorar a sua
            experiência em nosso site, entender como você o usa e para fins de
            marketing.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
