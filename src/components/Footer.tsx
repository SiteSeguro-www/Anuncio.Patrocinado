import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#030303] py-12 border-t border-zinc-900 border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Pacote Inteligência Artificial
          Local. Todos os direitos reservados.
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-zinc-500">
          <Link
            to="/termos-de-uso"
            className="hover:text-zinc-300 transition-colors"
          >
            Termos de Uso
          </Link>
          <Link
            to="/politica-de-privacidade"
            className="hover:text-zinc-300 transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            to="/sobre-nos"
            className="hover:text-zinc-300 transition-colors"
          >
            Sobre Nós
          </Link>
          <Link to="/contato" className="hover:text-zinc-300 transition-colors">
            Contato
          </Link>
          <Link to="/faq" className="hover:text-zinc-300 transition-colors">
            Dúvidas Frequentes (FAQ)
          </Link>
        </div>
      </div>
    </footer>
  );
}
