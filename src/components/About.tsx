function About() {
  return (
    <section className="box-border pl-8 flex flex-col gap-8 justify-center">
      <h2> über mich</h2>
      <div className="w-full max-w-6xl mx-auto bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm sm:text-base">
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800 select-none">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
            <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
            <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
          </div>
        </div>

        <div className="p-6 space-y-4 text-gray-300 min-h-[180px]">
          <div className="flex items-center space-x-2">
            <span className="text-cyan-400 select-none">$</span>
            <span className="text-gray-400">cat about.md</span>
          </div>

          <div className="leading-relaxed text-gray-100 pl-2">
            Hey, ich bin Mahir! Als erfahrener IT-Administrator mit einer Leidenschaft für die Digitalisierung habe ich
            mich entschieden, meine Fähigkeiten in die Webentwicklung zu vertiefen. Mich begeistert am Programmieren die
            Möglichkeit, komplexe logische Probleme durch Code zu lösen und sichtbare, nutzerorientierte Lösungen zu
            schaffen. Meine Erfahrung in der Telematikinfrastruktur motiviert mich dabei täglich, Systeme nicht nur zu
            verwalten, sondern aktiv mit modernsten Technologien wie JavaScript und Angular mitzugestalten.
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <span className="text-cyan-400 select-none">$</span>
            <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block align-middle"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
