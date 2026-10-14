const menuBars = [
  { position: 'top', transitionClass: 'transition-transform', openClass: 'translate-y-2 rotate-45' },
  { position: 'middle', transitionClass: 'transition-opacity', openClass: 'opacity-0' },
  { position: 'bottom', transitionClass: 'transition-transform', openClass: '-translate-y-2 -rotate-45' },
];

function MenuIcon({ menuOpen }: { menuOpen: boolean }) {
  return menuBars.map((bar) => (
    <span
      key={bar.position}
      className={`h-0.5 w-6 bg-accent ${bar.transitionClass} ${menuOpen ? bar.openClass : ''}`}
    />
  ));
}

export default MenuIcon;
