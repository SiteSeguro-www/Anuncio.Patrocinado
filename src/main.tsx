import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ImagemIlimitada from './pages/ImagemIlimitada';
import ExitIntentPopup from './components/ExitIntentPopup';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ExitIntentPopup />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/imagem-ilimitada" element={<ImagemIlimitada />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
