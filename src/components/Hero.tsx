function Hero() {
  return (
    <section className="box-border flex flex-col gap-8 items-center justify-center min-h-screen w-full">
      <p className="text-3xl mb-3 text-accent">Frontend-Entwickler</p>
      <h1 className="font-mono text-8xl">Mahir Durna</h1>
      <div className="flex gap-4 items-center justify-center">
        <button className="h-12 w-37 bg-accent text-base rounded-sm">Projekte ansehen</button>
        <button className="h-12 w-40 border-2 border-s-accent text-accent rounded-sm">Kontakt aufnehmen</button>
      </div>
    </section>
  );
}

export default Hero;
