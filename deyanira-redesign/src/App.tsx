// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/layout/PageTransition'; // <-- 1. AGREGAMOS ESTA IMPORTACIÓN
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { RecognitionPage } from './pages/RecognitionPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white flex flex-col font-sans overflow-x-hidden">
        <Navbar />

        <main className="flex-grow w-full">
          <PageTransition>
            <Routes>
              {/* Ruta principal (Landing) */}
              <Route path="/" element={<Home />} />

              {/* Rutas multipágina */}
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/reconocimientos" element={<RecognitionPage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Routes>
          </PageTransition>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;