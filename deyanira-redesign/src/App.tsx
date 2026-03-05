import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white flex flex-col font-sans overflow-x-hidden">
        <Navbar />

        <main className="flex-grow w-full">
          <Routes>
            {/* Ruta principal (Landing) */}
            <Route path="/" element={<Home />} />

            {/* Rutas multipágina que iremos activando */}
            <Route path="/nosotros" element={<AboutPage />} />
            {/* <Route path="/nosotros" element={<AboutPage />} /> */}
            <Route path="/servicios" element={<ServicesPage />} />
            {/* <Route path="/contacto" element={<ContactPage />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;