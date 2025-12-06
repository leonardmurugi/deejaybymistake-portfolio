import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-light dark:bg-brand-dark min-h-screen transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default App
