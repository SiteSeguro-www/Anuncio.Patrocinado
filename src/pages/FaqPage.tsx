import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans flex flex-col">
      <div className="flex-1 w-full pt-12 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-400 inline-block font-medium"
          >
            &larr; Voltar para a página inicial
          </Link>
        </div>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
