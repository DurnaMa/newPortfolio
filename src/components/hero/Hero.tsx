import HeroContent from './HeroContent.tsx';
import ScrollHint from './ScrollHint.tsx';

function Hero() {
  return (
    <section
      id="top"
      className="relative box-border flex flex-col gap-8 items-center justify-center min-h-screen w-full px-4 text-center bg-grid"
    >
      <div className="absolute inset-0 bg-radial from-transparent to-canvas pointer-events-none" />
      <HeroContent />
      <ScrollHint />
    </section>
  );
}

export default Hero;
