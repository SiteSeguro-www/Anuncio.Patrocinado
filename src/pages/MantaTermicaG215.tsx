import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, ShoppingCart, Star, Heart, Check, ShieldCheck, Truck, ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

export default function MantaTermicaG215() {
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    document.title = "Cama Térmica Ajustável Para Cães G215 Com Controle De Temper";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Cama Térmica Ajustável Para Cães G215. Múltipla camada estrutura de proteção com aquecimento seguro, fornece calor ao recém-nascido e alivia dores.");
    }
  }, []);

  const media = [
    { type: "image", src: "/manta-1.webp" },
    { type: "image", src: "/manta-2.webp" },
    { type: "image", src: "/manta-3.webp" },
    { type: "image", src: "/manta-4.webp" },
  ];

  return (
    <div className="min-h-screen bg-[#ebebeb] font-sans flex flex-col">
      {/* Header Mobile / Desktop */}
      <header className="bg-[#ffe600] w-full p-3 sm:px-6 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <Link to="/" className="text-zinc-800 p-1 md:hidden">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <a href="https://meli.la/1FaArfg" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white rounded-full flex items-center px-4 py-2 shadow-sm cursor-pointer">
            <Search className="w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Buscar produtos, marcas e muito mais..." 
              className="w-full bg-transparent outline-none ml-2 text-zinc-700 text-sm cursor-pointer pointer-events-none"
              readOnly
            />
          </a>
          <Menu className="w-6 h-6 text-zinc-800 md:hidden" />
          <ShoppingCart className="w-6 h-6 text-zinc-800 hidden md:block" />
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full md:py-8 md:px-4 flex flex-col gap-6">
        
        {/* Container Principal do Produto */}
        <div className="bg-white md:rounded-lg shadow-sm w-full flex flex-col md:flex-row p-0 md:p-6 gap-6">
          
          {/* Galeria de Imagens (Mobile e Desktop) */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="w-full aspect-square bg-white flex items-center justify-center relative md:rounded-lg overflow-hidden">
              <img 
                src={media[currentMedia].src} 
                alt="Cama Térmica Ajustável Para Cães G215" 
                className="w-auto h-auto max-w-full max-h-full object-contain mix-blend-multiply p-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/600x600/e2e8f0/64748b?text=Imagem+da+Manta";
                }}
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm text-zinc-400 hover:text-red-500 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            
            {/* Miniaturas */}
            <div className="flex gap-2 p-4 md:px-0 md:py-4 overflow-x-auto hide-scrollbar">
              {media.map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentMedia(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-md border-2 overflow-hidden flex items-center justify-center bg-white relative ${currentMedia === idx ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <img 
                    src={item.src} 
                    alt={`Miniatura ${idx + 1}`} 
                    className="w-full h-full object-contain mix-blend-multiply p-1"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/100x100/e2e8f0/64748b?text=Img";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="w-full md:w-1/2 p-4 md:p-0 flex flex-col">
            <div className="text-xs text-zinc-500 mb-2">Novo | +100 vendidos</div>
            <h1 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2 leading-tight">
              Cama Térmica Ajustável Para Cães G215 Com Controle De Temper
            </h1>
            
            <div className="flex items-center gap-1 mb-4">
              <div className="flex text-[#3483fa]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-zinc-500 ml-1">(42)</span>
            </div>

            {/* Preço */}
            <div className="mb-6 flex flex-col">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-normal text-zinc-900 tracking-tight">R$ 67<span className="text-2xl align-top">,63</span></span>
              </div>
              <div className="text-lg text-zinc-900 mt-1">
                em <span className="font-medium text-[#00a650]">12x R$ 6,66</span>
              </div>
              <a href="https://meli.la/1FaArfg" target="_blank" rel="noopener noreferrer" className="text-sm text-[#3483fa] hover:underline mt-1">Ver os meios de pagamento</a>
            </div>

            {/* Frete e Garantia */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex gap-3 items-start">
                <Truck className="w-6 h-6 text-[#00a650] shrink-0" />
                <div>
                  <p className="text-[#00a650] text-sm md:text-base font-medium">Chegará grátis amanhã</p>
                  <a href="https://meli.la/1FaArfg" target="_blank" rel="noopener noreferrer" className="text-sm text-[#3483fa] hover:underline">Ver mais formas de entrega</a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-6 h-6 text-zinc-400 shrink-0" />
                <p className="text-sm text-zinc-600">
                  <span className="text-[#3483fa] hover:underline cursor-pointer">Compra Garantida</span>, receba o produto que está esperando ou devolvemos o dinheiro.
                </p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col gap-3 mt-auto">
              <a 
                href="https://meli.la/1FaArfg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#3483fa] hover:bg-[#2968c8] text-white font-semibold py-4 rounded-md text-center text-lg transition-colors shadow-sm"
              >
                Comprar agora
              </a>
              <a 
                href="https://meli.la/1FaArfg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#e3edfb] hover:bg-[#c9ddf8] text-[#3483fa] font-semibold py-4 rounded-md text-center text-lg transition-colors"
              >
                Adicionar ao carrinho
              </a>
            </div>
          </div>
        </div>

        {/* Descrição - Mobile view moves this below, desktop could be sidebar or just below */}
        <div className="bg-white md:rounded-lg shadow-sm p-6 mb-8 w-full">
          <h2 className="text-2xl font-normal text-zinc-900 mb-6">Descrição</h2>
          <div className="text-zinc-600 text-lg leading-relaxed space-y-4 whitespace-pre-line">
            Almofada de aquecimento para animais de estimação Ajustáveis G215 Temperatura Cão E Aquecedor

            Cão de temperatura ajustável e almofada de aquecimento, pad interior de Aquecemento de animais de estimação com fio Característica: es:Dog 45x45x2cm/17,7x17, 7x0,79in Descrição:Segura e estruturaMúltipla camada estrutura de proteção com aquecimento seguro fio para Pet de queimaduras. PVC macio com e função retardante de inflamação. Sensor de temperatura inteligente integrado no bloco de aquecimento para sobreaquecer e seu animal de estimação. Unico projeto de almofada de aquecimento o seu animal da mastigação do fio, proteção de fios duplos para garantir. Cobertura exterior super suave, confortável e conveniente. Se a almofada interna ficar suja, você precisa para limpar o interior pad com um pano úmido em vez de molhar em água. Usado para a saúde dos animais de estimaçãoA almofada de aquecimento pode fornecer calor ao recém-nascido , grávida e aliviar a articulação e a dor em animais mais velhos artríticos. Sua aplicação estende o inverno. NotaFale a almofada de aquecimento para animais de estimação e mantenha é plana para usar. Por favor, não o dobre durante o uso. Também precisa de atenção para saber se a almofada de aquecimento do animal de estimação está dentro o canto pequeno do corpo do animal de estimação, se assim for, você precisa desenrolar a almofada de aquecimento em. Conteúdo do pacote:
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
