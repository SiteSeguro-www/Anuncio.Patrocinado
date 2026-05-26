import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatWidgetProps {
  message?: string;
  whatsappUrl?: string;
}

export default function ChatWidget({
  message = "Tem alguma dúvida sobre a IA Offline ou sobre nossa oferta atual?",
  whatsappUrl = "https://wa.me/5511988677214?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20sobre%20a%20Central%20de%20IA%20Offline!"
}: ChatWidgetProps = {}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[99999] flex flex-col items-end justify-end">
      {/* Chat Panel */}
      <div 
        className={`bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-[calc(100vw-2rem)] sm:w-96 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right mb-4 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 hidden'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative overflow-hidden rounded-full cursor-default">
              <img src="/logo%20whatsapp.png" alt="WhatsApp" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190%] h-[190%] max-w-none object-contain" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">Atendimento</h3>
              <p className="text-green-100 text-xs">Online agora</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 bg-zinc-950/90 min-h-[250px] flex flex-col gap-4">
          <div className="bg-zinc-800 text-zinc-100 p-3 rounded-2xl rounded-tl-sm max-w-[90%] self-start shadow-sm border border-zinc-700/50">
            <p className="text-sm border-b border-zinc-700/50 pb-2 mb-2">
              Olá! 👋 Percebi que você está navegando no nosso site. 
            </p>
            <p className="text-sm">
              {message}
            </p>
          </div>
          <div className="bg-zinc-800 text-zinc-100 p-3 rounded-2xl rounded-tl-sm max-w-[90%] self-start shadow-sm border border-zinc-700/50">
            <p className="text-sm text-zinc-300 mb-3">
              Nossa equipe está pronta para te atender no WhatsApp:
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm shadow-md"
            >
              Falar no WhatsApp
              <Send className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
        
        {/* Footer (Fake input) */}
        <div className="p-3 bg-zinc-900 border-t border-zinc-800 flex items-center gap-2 relative">
          <a
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute inset-0 z-10"
            aria-label="Abrir WhatsApp"
          >
            <span className="sr-only">Ir para o WhatsApp</span>
          </a>
          <input 
            type="text" 
            placeholder="Digite sua mensagem..." 
            className="flex-1 bg-zinc-950 border border-zinc-800 text-zinc-400 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-[#25D366] cursor-pointer"
            readOnly
          />
          <button 
            className="bg-[#25D366] text-white p-2.5 rounded-full"
            aria-hidden="true"
          >
            <Send className="w-5 h-5 -ml-1 mt-1" />
          </button>
        </div>
      </div>

      {/* Chat Button (Always visible unless completely occluded by panel, but lets make it hidden when open to match previous behavior, or show it differently) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-800 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce origin-center relative overflow-hidden"
          aria-label="Atendimento via WhatsApp"
        >
          <img src="/logo%20whatsapp.png" alt="WhatsApp" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190%] h-[190%] max-w-none object-contain" />
        </button>
      )}
    </div>
  );
}
