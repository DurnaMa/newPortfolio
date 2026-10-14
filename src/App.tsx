import Navbar from './components/navbar/Navbar.tsx';
import Hero from './components/hero/Hero.tsx';
import About from './components/about/About.tsx';
import Skills from './components/skills/Skills.tsx';
import Projects from './components/projects/Projects.tsx';
import References from './components/references/References.tsx';
import Contact from './components/contact/Contact.tsx';
import Footer from './components/footer/Footer.tsx';
import Impressum from './pages/Impressum.tsx';
import Datenschutz from './pages/Datenschutz.tsx';
import LanguageProvider from './i18n/LanguageProvider.tsx';

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
