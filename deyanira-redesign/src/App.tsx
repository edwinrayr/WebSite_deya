import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/layout/Footer';
import './App.css';

function App() {
  return (
    // Cambiamos bg-gray-50 por bg-white para que todo el lienzo base sea limpio
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      {/* Le quitamos el pt-20 a esta etiqueta */}
      <main className="flex-grow">
        <Home />
        <Footer />
      </main>
    </div>
  );
}

export default App;