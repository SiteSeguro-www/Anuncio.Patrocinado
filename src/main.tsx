import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import ImagemIlimitada from "./pages/ImagemIlimitada";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import FaqPage from "./pages/FaqPage";
import ExitIntentPopup from "./components/ExitIntentPopup";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ExitIntentPopup />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/imagem-ilimitada" element={<ImagemIlimitada />} />
        <Route path="/termos-de-uso" element={<Termos />} />
        <Route path="/politica-de-privacidade" element={<Privacidade />} />
        <Route path="/sobre-nos" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
