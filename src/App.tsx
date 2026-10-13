import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import References from './components/References.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Impressum from './pages/Impressum.tsx';
import Datenschutz from './pages/Datenschutz.tsx';
import { LanguageProvider } from './i18n/LanguageContext.tsx';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <References />
      <Contact />
    </main>
  );
}

function currentPage() {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/impressum') return <Impressum />;
  if (path === '/datenschutz') return <Datenschutz />;
  return <Home />;
}

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      {currentPage()}
      <Footer />
    </LanguageProvider>
  );
}

export default App;
