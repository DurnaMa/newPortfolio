import { useState } from 'react';
import HomeLink from '../shared/HomeLink.tsx';
import DesktopNavigation from './DesktopNavigation.tsx';
import MobileControls from './MobileControls.tsx';
import MobileMenu from './MobileMenu.tsx';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-canvas/80 backdrop-blur border-b border-dress-blues/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <HomeLink className="font-mono text-lg text-text hover:text-accent transition-colors" />
        <DesktopNavigation />
        <MobileControls menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} />
      </nav>
      {menuOpen && <MobileMenu onNavigate={() => setMenuOpen(false)} />}
    </header>
  );
}

export default Navbar;
