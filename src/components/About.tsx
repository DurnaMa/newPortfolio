function About() {
  return (
    <section className="box-border pl-4 py-8">
      <h2 className="w-full max-w-6xl mx-auto text-3xl mb-6 text-accent">Über mich</h2>

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-auto flex justify-center lg:block lg:sticky lg:top-8">
          <img
            src="/profilbild/mahirDurna.jpg"
            alt="Mahir Durna"
            className="w-48 h-48 rounded-lg border-2 border-dress-blues grayscale hover:grayscale-0 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,204,0.3)]"
          />
        </div>

        <div className="flex-1 w-full bg-[#0d1117] rounded-xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm sm:text-base">
          <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800 select-none">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
              <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
              <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
            </div>
          </div>

          <div className="p-6 space-y-4 text-gray-300 min-h-45">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 select-none">$</span>
              <span className="text-gray-400">cat about.md</span>
            </div>
            <div className="leading-relaxed text-gray-100 pl-2">
              Hey, ich bin Mahir! Wer aus der IT-Administration kommt, weiß, wie wichtig funktionierende Systeme sind.
              Nach Jahren in der Telematikinfrastruktur wollte ich aber die Seiten wechseln: Weg vom reinen Verwalten,
              hin zum eigentlichen Bauen. Genau deshalb entwickle ich heute moderne Webanwendungen mit Angular. Mich
              begeistert es einfach, wenn aus komplexer Logik am Ende eine App wird, die echten Nutzen bringt.
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 select-none">$</span>
              <span className="text-gray-400">cat location.md</span>
            </div>
            <div className="leading-relaxed text-gray-100 pl-2">
              Location: Molbergen <br /> Work Mode: Remote / Flexible Collaboration
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 select-none">$</span>
              <span className="text-gray-400">cat approach.md</span>
            </div>
            <div className="leading-relaxed text-gray-100 pl-2">
              Mit über 12 Projekten in Angular, TypeScript und Supabase im Gepäck bringe ich mein Admin-Mindset in den
              Code: Fehler schnell isolieren, komplexe Logik ausdauernd lösen und effiziente Ergebnisse liefern. Ich
              schätze den kreativen Austausch via Scrum und sehe lebenslanges Lernen als Lebenseinstellung.
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <span className="text-cyan-400 select-none">$</span>
              <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block align-middle"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
