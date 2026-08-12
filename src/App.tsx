import React, { useEffect } from 'react';
import ScrollRibbon from './components/ScrollRibbon';
import ProjectCard from './components/ProjectCard';
import type { ProjectData } from './components/ProjectCard';
import Marginalia from './components/Marginalia';
import WaxSeal from './components/WaxSeal';
import projectsData from './data/projects.json';
import './App.css';

export const App: React.FC = () => {
  const projects = projectsData as ProjectData[];

  // Scroll Fade-in Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ink-black text-aged-vellum relative selection:bg-scribe-teal selection:text-aged-vellum pb-24">
      {/* Scroll bookmark ribbon progress tracker */}
      <ScrollRibbon />

      {/* STICKY NAVIGATION */}
      <header className="sticky top-0 z-40 w-full bg-ink-black/85 backdrop-blur-md border-b border-faded-ash/20 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm tracking-[0.2em] text-manuscript-gold font-bold">DEEPAK</span>
          <span className="text-[10px] font-mono text-faded-ash uppercase tracking-widest hidden sm:inline">· Scriptorium</span>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <button
            onClick={() => scrollToSection('folio-i')}
            className="font-mono text-xs text-faded-ash hover:text-manuscript-gold transition-colors focus:outline-none focus:text-manuscript-gold"
            id="nav-link-i"
          >
            Folio I
          </button>
          <button
            onClick={() => scrollToSection('folio-ii')}
            className="font-mono text-xs text-faded-ash hover:text-manuscript-gold transition-colors focus:outline-none focus:text-manuscript-gold"
            id="nav-link-ii"
          >
            II
          </button>
          <button
            onClick={() => scrollToSection('folio-iii')}
            className="font-mono text-xs text-faded-ash hover:text-manuscript-gold transition-colors focus:outline-none focus:text-manuscript-gold"
            id="nav-link-iii"
          >
            III
          </button>
          <button
            onClick={() => scrollToSection('folio-iv')}
            className="font-mono text-xs text-faded-ash hover:text-manuscript-gold transition-colors focus:outline-none focus:text-manuscript-gold"
            id="nav-link-iv"
          >
            IV
          </button>
          <button
            onClick={() => scrollToSection('folio-v')}
            className="font-mono text-xs text-faded-ash hover:text-manuscript-gold transition-colors focus:outline-none focus:text-manuscript-gold"
            id="nav-link-v"
          >
            V
          </button>
          <button
            onClick={() => scrollToSection('folio-vi')}
            className="font-mono text-xs text-faded-ash hover:text-manuscript-gold transition-colors focus:outline-none focus:text-manuscript-gold"
            id="nav-link-vi"
          >
            VI
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-manuscript-gold hover:text-yellow-500 border border-manuscript-gold/30 hover:border-yellow-500/60 px-2.5 py-0.5 rounded transition-all focus:outline-none focus:ring-1 focus:ring-manuscript-gold ml-2"
            id="nav-resume-link"
          >
            [CV]
          </a>
        </nav>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 mt-12 md:mt-20 flex flex-col gap-24 md:gap-36">

        {/* FOLIO I — HERO SECTION */}
        <section id="folio-i" className="relative min-h-[70vh] flex flex-col justify-center text-left py-8">
          <div className="font-mono text-xs text-scribe-teal uppercase tracking-widest mb-4 animate-ink-in">
            [ Folio I — Initial Imprint ]
          </div>

          <div className="relative">
            {/* Illuminated drop-cap "D" */}
            <div
              className="float-left mr-4 md:mr-6 mt-1 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-700 via-manuscript-gold to-yellow-500 text-ink-black font-fraunces font-extrabold text-5xl md:text-6xl flex items-center justify-center border-2 border-amber-900/60 shadow-[3px_3px_15px_rgba(201,162,39,0.3)] select-none rounded-[4px]"
              style={{
                clipPath: 'polygon(2% 0%, 98% 1%, 100% 98%, 1% 100%)',
              }}
            >
              D
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-aged-vellum tracking-wide leading-tight animate-ink-in">
              eepak — I build the systems between raw and readable.
            </h1>
          </div>

          <p className="mt-6 text-base md:text-lg lg:text-xl text-aged-vellum/80 font-inter max-w-2xl leading-relaxed animate-ink-in-delayed">
            Backend &amp; data engineer at Straive, Chennai. I turn messy documents, unstructured data, and manual workflows into clean, structured, automated systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-ink-in-delayed">
            <button
              onClick={() => scrollToSection('folio-iv')}
              className="px-5 py-2.5 bg-manuscript-gold hover:bg-yellow-600 text-ink-black font-mono text-xs font-bold uppercase tracking-widest rounded transition-all shadow-[0_4px_10px_rgba(201,162,39,0.2)] hover:shadow-[0_6px_15px_rgba(201,162,39,0.4)] focus:outline-none focus:ring-2 focus:ring-manuscript-gold"
              id="cta-view-work"
            >
              View the work
            </button>
            <button
              onClick={() => scrollToSection('folio-ii')}
              className="px-5 py-2.5 border border-scribe-teal hover:bg-scribe-teal/10 text-scribe-teal hover:text-aged-vellum font-mono text-xs font-bold uppercase tracking-widest rounded transition-all focus:outline-none focus:ring-2 focus:ring-scribe-teal"
              id="cta-read-colophon"
            >
              Read the colophon
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-manuscript-gold hover:bg-manuscript-gold/10 text-manuscript-gold hover:text-aged-vellum font-mono text-xs font-bold uppercase tracking-widest rounded transition-all focus:outline-none focus:ring-2 focus:ring-manuscript-gold"
              id="cta-download-resume"
            >
              Download Résumé
            </a>
          </div>
        </section>


        {/* FOLIO II — COLOPHON (ABOUT) SECTION */}
        <section id="folio-ii" className="scroll-fade-in relative text-left py-4 border-t border-faded-ash/20 pt-16">
          {/* Marginalia Note */}
          <Marginalia position="right">
            Self-taught. Visual thinker. Still <span className="text-rubric-red font-bold">debugging</span> that last part.
          </Marginalia>

          <div className="font-mono text-xs text-scribe-teal uppercase tracking-widest mb-4">
            [ Folio II — The Colophon ]
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-manuscript-gold tracking-wide mb-6">
            Colophon — About the Scribe
          </h2>

          <div className="space-y-6 text-sm md:text-base text-aged-vellum/90 font-inter max-w-2xl leading-relaxed">
            <p>
              I'm a backend and data engineer working across document processing, AI-assisted editorial tooling, and research-integrity analytics. Most of what I build sits at the seam between unstructured input — a scanned PDF, a messy DOCX, a pile of academic papers — and something structured and trustworthy on the other side.
            </p>
            <p>
              I'm largely self-taught and learn best visually — I'd rather sketch a system out than read about it. That same instinct shows up outside of work too: I draw, write, and I'm drawn to history and mythology, partly because they're humanity's oldest attempts at turning fragmentary, unstructured accounts into something coherent. Not a bad hobby for someone who does that for a living.
            </p>

          </div>
        </section>


        {/* FOLIO III — THE WORK (EXPERIENCE) SECTION */}
        <section id="folio-iii" className="scroll-fade-in relative text-left py-4 border-t border-faded-ash/20 pt-16">
          <div className="font-mono text-xs text-scribe-teal uppercase tracking-widest mb-4">
            [ Folio III — Chronology &amp; Deeds ]
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-manuscript-gold tracking-wide mb-8">
            The Work
          </h2>

          <div className="max-w-2xl">
            {/* Straive Role header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-faded-ash/20 pb-2 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-aged-vellum">Straive</h3>
                <p className="text-xs font-mono text-scribe-teal tracking-wider mt-0.5">Backend &amp; Data Engineer</p>
              </div>
              <span className="font-mono text-xs text-faded-ash mt-1 md:mt-0">Chennai, Tamil Nadu</span>
            </div>

            {/* Timelines of Built things */}
            <div className="space-y-6 relative border-l border-faded-ash/20 pl-6 ml-1">

              {/* Bullet 1 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-manuscript-gold" />
                <h4 className="font-mono text-xs text-faded-ash mb-1">ENGINE PIPELINE</h4>
                <p className="text-sm md:text-base text-aged-vellum/90 font-inter leading-relaxed">
                  Built a document conversion engine handling DOC, DOCX, and PDF to HTML at scale, processing 10,000+ files daily with a 99.8% structural layout retention rate — the core pipeline behind several downstream tools
                </p>
              </div>

              {/* Bullet 2 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-scribe-teal" />
                <h4 className="font-mono text-xs text-faded-ash mb-1">EDITORIAL TOOLING</h4>
                <p className="text-sm md:text-base text-aged-vellum/90 font-inter leading-relaxed">
                  Built Aikira Lite, an AI-assisted editorial workflow tool, reducing manuscript preprocessing time by 40% for academic editorial teams
                </p>
              </div>

              {/* Bullet 3 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-scribe-teal" />
                <h4 className="font-mono text-xs text-faded-ash mb-1">INTEGRITY &amp; ANALYTICS</h4>
                <p className="text-sm md:text-base text-aged-vellum/90 font-inter leading-relaxed">
                  Built analytics for paper-mill detection — identifying patterns of fraudulent or mass-produced academic papers, scanning 50,000+ yearly submissions
                </p>
              </div>

              {/* Bullet 4 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-scribe-teal" />
                <h4 className="font-mono text-xs text-faded-ash mb-1">AUTOMATION</h4>
                <p className="text-sm md:text-base text-aged-vellum/90 font-inter leading-relaxed">
                  Built automation for supplementary file handling in editorial pipelines, saving editors 15+ manual working hours per week
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* FOLIO IV — PROJECTS SECTION */}
        <section id="folio-iv" className="scroll-fade-in relative text-left py-4 border-t border-faded-ash/20 pt-16">
          <div className="font-mono text-xs text-scribe-teal uppercase tracking-widest mb-4">
            [ Folio IV — Illuminations &amp; Artifacts ]
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-manuscript-gold tracking-wide mb-4">
            The Projects
          </h2>

          {/* Status Seal Legend */}
          <div className="flex flex-wrap gap-6 items-center border border-faded-ash/20 rounded p-4 bg-ink-black/40 mb-8 max-w-2xl">
            <span className="font-mono text-xs text-scribe-teal uppercase tracking-widest">[ Status Legend ]</span>
            <div className="flex items-center gap-2">
              <WaxSeal status="LIVE" size="sm" />
              <span className="font-mono text-xs text-faded-ash">Live Project</span>
            </div>
            <div className="flex items-center gap-2">
              <WaxSeal status="IN PROGRESS" size="sm" />
              <span className="font-mono text-xs text-faded-ash">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <WaxSeal status="ARCHIVED" size="sm" />
              <span className="font-mono text-xs text-faded-ash">Archived</span>
            </div>
          </div>

          <p className="text-xs font-mono text-faded-ash mb-8 max-w-xl">
            * Note: These project cards represent curated professional deliverables and experimental works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>


        {/* FOLIO V — TOOLS OF THE CRAFT (SKILLS) */}
        <section id="folio-v" className="scroll-fade-in relative text-left py-4 border-t border-faded-ash/20 pt-16">
          <div className="font-mono text-xs text-scribe-teal uppercase tracking-widest mb-4">
            [ Folio V — Tools of the Craft ]
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-manuscript-gold tracking-wide mb-8">
            Skills &amp; Instruments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl">
            {/* Cluster 1: Backend */}
            <div className="border border-faded-ash/20 rounded p-5 bg-ink-black/40">
              <h3 className="font-fraunces text-lg text-manuscript-gold border-b border-faded-ash/20 pb-1.5 mb-3 font-semibold uppercase tracking-wider">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Python</span>
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Node.js</span>
              </div>
            </div>

            {/* Cluster 2: Data */}
            <div className="border border-faded-ash/20 rounded p-5 bg-ink-black/40">
              <h3 className="font-fraunces text-lg text-manuscript-gold border-b border-faded-ash/20 pb-1.5 mb-3 font-semibold uppercase tracking-wider">
                Data
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">SQL</span>
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Document Parsing</span>
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">ETL Pipelines</span>
              </div>
            </div>

            {/* Cluster 3: Frontend */}
            <div className="border border-faded-ash/20 rounded p-5 bg-ink-black/40">
              <h3 className="font-fraunces text-lg text-manuscript-gold border-b border-faded-ash/20 pb-1.5 mb-3 font-semibold uppercase tracking-wider">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">React</span>
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Tailwind CSS</span>
              </div>
            </div>

            {/* Cluster 4: Infra/Tools */}
            <div className="border border-faded-ash/20 rounded p-5 bg-ink-black/40">
              <h3 className="font-fraunces text-lg text-manuscript-gold border-b border-faded-ash/20 pb-1.5 mb-3 font-semibold uppercase tracking-wider">
                Infra &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Docker</span>
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Git</span>
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Linux (Pop!_OS)</span>
              </div>
            </div>

            {/* Cluster 5: Exploring */}
            <div className="border border-faded-ash/20 rounded p-5 bg-ink-black/40 sm:col-span-2">
              <h3 className="font-fraunces text-lg text-manuscript-gold border-b border-faded-ash/20 pb-1.5 mb-3 font-semibold uppercase tracking-wider">
                Exploring
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Local LLM Inference (Ollama, LM Studio)</span>
                <span className="font-mono text-xs text-aged-vellum bg-faded-ash/10 px-2.5 py-1 border border-faded-ash/20 rounded-sm">Embedded Systems (ESP32)</span>
              </div>
            </div>
          </div>
        </section>


        {/* FOLIO VI — COLOPHON CLOSE (CONTACT) */}
        <section id="folio-vi" className="scroll-fade-in relative text-left py-4 border-t border-faded-ash/20 pt-16">
          <div className="font-mono text-xs text-scribe-teal uppercase tracking-widest mb-4">
            [ Folio VI — Colophon Close ]
          </div>

          <div className="max-w-xl space-y-6">
            <p className="font-fraunces italic text-xl md:text-2xl text-aged-vellum/90 leading-relaxed">
              This page, like the ones before it, is a work in progress — restored and re-annotated over time.
            </p>

            <div className="flex flex-wrap gap-6 pt-4 font-mono text-sm">
              <a
                href="mailto:deepak@example.com"
                className="text-manuscript-gold hover:text-yellow-500 border-b border-manuscript-gold/20 hover:border-yellow-500 pb-0.5 transition-all focus:outline-none focus:ring-1 focus:ring-manuscript-gold"
                id="contact-email"
              >
                [email]
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-manuscript-gold hover:text-yellow-500 border-b border-manuscript-gold/20 hover:border-yellow-500 pb-0.5 transition-all focus:outline-none focus:ring-1 focus:ring-manuscript-gold"
                id="contact-linkedin"
              >
                [linkedin]
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-manuscript-gold hover:text-yellow-500 border-b border-manuscript-gold/20 hover:border-yellow-500 pb-0.5 transition-all focus:outline-none focus:ring-1 focus:ring-manuscript-gold"
                id="contact-github"
              >
                [github]
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default App;
