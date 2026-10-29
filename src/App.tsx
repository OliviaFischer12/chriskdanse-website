import React, { useState, useRef, useEffect } from 'react';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  const toggleAudio = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;
      videoRef.current.muted = newMuted;
      if (!newMuted && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
      setIsMuted(newMuted);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen" style={{ '--tw-primary-container': '#C77D9B', '--tw-primary': '#C77D9B' } as React.CSSProperties}>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-2xl shadow-[0_1px_16px_rgba(194,24,91,0.08)]">
        <div className="min-h-[5.5rem] md:min-h-[6.5rem] py-space-xs max-w-7xl mx-auto px-margin-sm md:px-margin lg:px-margin-lg flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <a className="flex items-center group py-1" data-path="accueil" href="#">
              <img
                alt="CHRISKDANSE"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTl5BQjFbPm_aPmIgGIqLiwLS3hxcayBs5oBldPdat_4uyBpm-jnDBO5DOu2iAsgu5zKfnW25k6q-PkB35IhUnBRdhaif4NKWS78LlIi3fhn900GUptYVhgUuh4PgLtbY1HSL7oTWL8u67OjYLdi5TWoH4HzZnLOUVBofo23Xn4pe5ulxBZ03WGtpdcZHY3XyXwz_hiOYCAhKW2l8LD4aNFW45ruBvzZpLq4axov5DbJ6ekd4QX2XE"
                style={{ filter: 'drop-shadow(rgba(199, 125, 155, 0.35) 0px 0px 16px)', background: 'none' }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-space-xs p-space-xs rounded-full bg-surface-container-low/60 backdrop-blur-md">
            <a className="px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all rounded-full" data-path="accueil" href="#accueil">Accueil</a>
            <a className="px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all rounded-full" data-path="a-propos" href="#a-propos">À Propos</a>
            <a className="px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all rounded-full" data-path="communaute" href="#reseaux-sociaux">Réseaux Sociaux</a>
            <a className="px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all rounded-full" data-path="cours-de-danse" href="#cours-de-danse">Cours de Danse</a>
            <a className="px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all rounded-full" data-path="contact" href="#contact">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-space-md">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-surface-container-low/80 text-on-surface hover:text-primary transition-colors focus:outline-none"
              aria-label="Menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="lg:hidden px-margin-sm pb-space-md pt-space-xs bg-surface-container-lowest/95 border-b border-white/10 backdrop-blur-2xl flex flex-col gap-2">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:text-primary hover:bg-surface-container rounded-lg transition-all"
              href="#accueil"
            >
              Accueil
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:text-primary hover:bg-surface-container rounded-lg transition-all"
              href="#a-propos"
            >
              À Propos
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:text-primary hover:bg-surface-container rounded-lg transition-all"
              href="#reseaux-sociaux"
            >
              Réseaux Sociaux
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:text-primary hover:bg-surface-container rounded-lg transition-all"
              href="#cours-de-danse"
            >
              Cours de Danse
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-space-md py-space-sm font-label-md text-label-md text-on-surface hover:text-primary hover:bg-surface-container rounded-lg transition-all"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-28 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* HERO SECTION WITH CINEMATIC DANCE VIDEO BACKGROUND */}
          <section className="relative w-full min-h-[92vh] flex justify-center overflow-hidden bg-surface-container-lowest pb-space-2xl scroll-mt-28" id="accueil">
            {/* Video element */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
              <video
                ref={videoRef}
                autoPlay
                className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105 duration-1000 opacity-80"
                id="hero-video"
                loop
                muted
                playsInline
              >
                <source src="https://res.cloudinary.com/wrx2dmjb/video/upload/v1793215085/Aleph_202_0_20-_20Tanzvideo_Runway_30fps.aleph_202_0_20-_20tanzvideo_runway_30fps.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/65 to-surface/80 pointer-events-none"></div>
            </div>

            {/* Elegant Audio Toggle Button */}
            <div className="absolute bottom-8 right-6 md:right-10 z-20">
              <button
                aria-label={isMuted ? 'Activer le son de la vidéo' : 'Couper le son de la vidéo'}
                onClick={toggleAudio}
                className={`group flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-lowest/70 hover:bg-surface-container-high/80 text-on-surface backdrop-blur-md border hover:border-[#C77D9B]/60 transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C77D9B]/50 ${
                  isMuted
                    ? 'border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
                    : 'border-[#C77D9B] shadow-[0_0_20px_rgba(199,125,155,0.4)]'
                }`}
                id="audio-toggle-btn"
              >
                <span
                  className={`material-symbols-outlined text-[20px] group-hover:text-primary transition-colors ${
                    isMuted ? 'text-on-surface-variant' : 'text-[#ffb1c2]'
                  }`}
                  id="audio-icon"
                >
                  {isMuted ? 'volume_off' : 'volume_up'}
                </span>
                <span
                  className="font-label-sm text-[11px] tracking-wider uppercase text-on-surface-variant group-hover:text-on-surface transition-colors font-medium"
                  id="audio-status-label"
                >
                  {isMuted ? 'Son coupé' : 'Son activé'}
                </span>
              </button>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-margin-sm md:px-margin lg:px-margin-lg w-full flex flex-col items-center text-center pt-space-2xl pb-space-2xl mt-auto">
              {/* Main Playfair Headline / Logo */}
              <div className="w-full max-w-2xl mx-auto flex justify-center items-center mb-space-sm bg-transparent border-0">
                <img
                  alt="CHRISKDANSE"
                  className="h-28 sm:h-36 md:h-40 w-auto max-w-full object-contain pointer-events-none transition-transform duration-700 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGnqOyCwu0Dysy0jrAcAWthWHUfNLP76O2vOAG9aCvh6BEvxNEox7z6c1MHjQDT3wnC81d57gB-VrkoG2v94_OnalUBEjoKauNhKx-A_0TyrpqfS4SwPKrDCVIixqU4IbaxypjAqDFEpSGPZqcbq6jbS4GbttYONjpLmg2hTvAx_7tCSrtEyrQOeLeIbAJ4wt0PqcEeJY107qtlffjp0w6sgJCflYkmLs5QAqI2K8sW7hpmljHXVVt"
                  style={{ filter: 'drop-shadow(rgba(236, 178, 255, 0.6) 0px 0px 32px)', background: 'none' }}
                />
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-space-xs leading-relaxed">
                Danseuse pluridisciplinaire, Chorégraphe &amp; Professeure de Danse à Paris.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-xl">
                <a
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md uppercase tracking-wider font-semibold text-white shadow-lg transform hover:scale-105 transition-all"
                  href="#cours-de-danse"
                  style={{
                    background: 'linear-gradient(135deg, rgb(199, 125, 155) 0%, rgb(142, 68, 173) 100%)',
                    boxShadow: 'rgba(199, 125, 155, 0.45) 0px 0px 24px',
                  }}
                >
                  <span className="font-semibold">Découvrir les cours</span>
                  <span className="material-symbols-outlined text-label-md font-semibold">arrow_downward</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md uppercase tracking-wider font-semibold text-white transition-all transform hover:scale-105"
                  href="#a-propos"
                  style={{
                    backgroundColor: 'rgba(42, 42, 42, 0.75)',
                    border: '1px solid rgba(199, 125, 155, 0.5)',
                    boxShadow: 'rgba(142, 68, 173, 0.25) 0px 0px 16px',
                  }}
                >
                  <span className="font-semibold">Biographie</span>
                  <span className="material-symbols-outlined text-label-md" style={{ color: 'rgb(236, 178, 255)' }}>
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* SECTION À PROPOS DE CHRIS (PORTRAIT & BIO) */}
          <section className="w-full py-space-2xl relative bg-surface-container-lowest overflow-hidden scroll-mt-28" id="a-propos">
            {/* Atmospheric Ambient Glows */}
            <div className="absolute -top-40 right-10 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 -left-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
                {/* Visual Column with Arched Portrait */}
                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="relative w-full max-w-md group">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary-container via-secondary-container to-tertiary-container opacity-40 blur-xl group-hover:opacity-70 transition duration-700"></div>
                    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-surface-container-high shadow-2xl">
                      <img
                        alt="Chriskdanse en mouvement artistique"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH2560HvnovZ7YDuEMsWKi8Z7d3_XYCL9tSFyPfvZvih1Ub5OUZJg2Sm9U0Supx_U0dTJ43xD4CM6zrJzcyS0lvleH2Iiahf5gk8EUPNk_jW-Ws3ZQ0Y3h6J7HGtYveBSAMeCxx-dd6gsfE3SebNkxH11rXV5PylOfM2y05L8p8KPkV6Cjw2Rg-Cf1jvzugI8jZ88ShtvUq7hHEfkNFrQ3hMA9KnVxqTp1cW8ObpxGwNPm5sgluWPj"
                        style={{ objectPosition: 'center 30%', transform: 'scale(1.08)', transformOrigin: 'center center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>
                      <div className="absolute bottom-space-md left-space-md right-space-md p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-md">
                        <p className="font-headline-sm text-headline-sm text-on-surface">Chris</p>
                        <p className="font-label-sm text-label-sm text-primary tracking-widest uppercase">Danseuse • Chorégraphe • Paris</p>
                      </div>
                    </div>
                    {/* Secondary Overlapping Visual */}
                    <div className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-container/40">
                      <img
                        alt="Chriskdanse portrait détail"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAunEl3ItpkgLpjHS9lmZ0Z4slNaXA0nSe-vh2FecFHqNaDhiCDnQZG2O03XOV2yTJXJOGuILFWIzpmreLvfurmp1-01Nyuj1yvrfh_Cs8Vws7umJ_CvSbX3hSklv2OdP7hw28ItWB_7iIf101JmZ9Xes-4fd0zMCcwz_hpALzE_BolT58BI2K-qFDTsUMM3wbe6FQJOp0k6Tvd1gHWNTDEjgzx_G65SimDWBDMTHVdXjenob4U3htm"
                      />
                    </div>
                  </div>
                </div>

                {/* Typography & Bio Details Column */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-8 h-[2px] bg-primary" style={{ backgroundColor: 'rgb(199, 125, 155)' }}></span>
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Identité &amp; Univers artistique</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-primary tracking-tight" style={{ color: 'rgb(199, 125, 155)' }}>
                    CHRISKDANSE
                  </h2>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-wide">
                    Danseuse pluridisciplinaire, Chorégraphe, Professeure de danse et Créatrice de Contenu
                  </h3>
                  <div className="p-space-lg rounded-xl bg-surface-container-low/70 backdrop-blur-md shadow-lg space-y-space-md text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                    <p>
                      Issue de 15 ans de danse classique au Conservatoire à Paris, je pratique aujourd'hui différents styles : <span className="text-on-surface font-medium">hip-hop, afro, jazz, contemporain, dancehall, lyrical et heels</span>. Ma pluridisciplinarité est au cœur de mon identité artistique : j'aime croiser les influences de ces univers pour construire un langage chorégraphique singulier, qui me ressemble.
                    </p>
                    <p>
                      J'enseigne le street jazz et hip-hop commercial en y intégrant ces différentes inspirations, et je chorégraphie pour des scènes, des projets artistiques ou encore des clips. Présente également sur les réseaux sociaux, je partage mon travail créatif et scénique, ainsi que mes collaborations avec d'autres artistes et collectifs.
                    </p>
                    <p className="italic text-primary-fixed-dim bg-surface-container-high/60 p-space-md rounded-lg font-headline-md text-body-lg" style={{ color: 'rgb(199, 125, 155)' }}>
                      “Il me tient particulièrement à cœur de développer des projets forts, qui racontent des histoires, font ressentir des émotions et valorisent la richesse d'un parcours pluridisciplinaire.”
                    </p>
                  </div>
                  {/* Disciplines Badges / Tags */}
                  <div className="flex flex-wrap gap-space-xs pt-space-xs">
                    <span className="px-space-md py-space-xs rounded-full bg-primary-container/30 text-primary font-label-md text-label-md">Hip-Hop</span>
                    <span className="px-space-md py-space-xs rounded-full bg-secondary-container/40 text-secondary font-label-md text-label-md">Afro</span>
                    <span className="px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">Jazz</span>
                    <span className="px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">Contemporain</span>
                    <span className="px-space-md py-space-xs rounded-full bg-primary-container/30 text-primary font-label-md text-label-md">Dancehall</span>
                    <span className="px-space-md py-space-xs rounded-full bg-secondary-container/40 text-secondary font-label-md text-label-md">Lyrical</span>
                    <span className="px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">Heels</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION RESEAUX SOCIAUX */}
          <section className="w-full py-space-xl bg-surface-container-lowest relative overflow-hidden border-t border-white/5 scroll-mt-28" id="reseaux-sociaux">
            <div className="max-w-7xl mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
                <div>
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="w-6 h-[2px]" style={{ backgroundColor: 'rgb(199, 125, 155)' }}></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold" style={{ color: 'rgb(199, 125, 155)' }}>
                      Rayonnement Digital
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface tracking-tight mt-space-xs">
                    Communauté &amp; Réseaux
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Retrouvez tout l'univers chorégraphique et les actualités sur les réseaux.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
                {/* Instagram */}
                <a
                  className="p-space-xl rounded-2xl bg-surface-container-low shadow-xl group hover:shadow-[0_0_30px_rgba(236,178,255,0.25)] transition-all"
                  href="https://instagram.com/chriskdanse"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center justify-between mb-space-lg">
                    <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                      @chriskdanse
                    </span>
                    <span className="material-symbols-outlined text-headline-md text-secondary">photo_camera</span>
                  </div>
                  <div className="mb-space-md">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-bold">94 k</span>
                    <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">
                      Followers sur Instagram
                    </span>
                  </div>
                </a>

                {/* TikTok */}
                <a
                  className="p-space-xl rounded-2xl bg-surface-container-low shadow-xl group hover:shadow-[0_0_30px_rgba(236,178,255,0.25)] transition-all"
                  href="https://tiktok.com/@chriskdanse"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center justify-between mb-space-lg">
                    <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                      @chriskdanse
                    </span>
                    <span className="material-symbols-outlined text-headline-md text-secondary">music_note</span>
                  </div>
                  <div className="mb-space-md">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-bold">185.362</span>
                    <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">
                      Followers sur TikTok
                    </span>
                  </div>
                </a>

                {/* YouTube */}
                <a
                  className="p-space-xl rounded-2xl bg-surface-container-low shadow-xl group hover:shadow-[0_0_30px_rgba(194,24,91,0.25)] transition-all"
                  href="https://youtube.com/@chriskdanse"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center justify-between mb-space-lg">
                    <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      @Chriskdanse.
                    </span>
                    <span className="material-symbols-outlined text-headline-md text-primary">play_circle</span>
                  </div>
                  <div className="mb-space-md">
                    <span className="font-headline-lg text-headline-lg text-on-surface font-bold">87.600</span>
                    <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">
                      Abonnés YouTube
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* SECTION INFOS SUR LES COURS DE DANSE */}
          <section className="w-full py-space-2xl bg-surface relative scroll-mt-28" id="cours-de-danse">
            <div className="max-w-7xl mx-auto px-margin-sm md:px-margin lg:px-margin-lg">
              <div className="text-center max-w-3xl mx-auto mb-space-2xl">
                <div className="inline-flex items-center gap-space-xs mb-space-xs">
                  <span className="w-6 h-[2px]" style={{ backgroundColor: 'rgb(199, 125, 155)' }}></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold" style={{ color: 'rgb(199, 125, 155)' }}>
                    cours Hebdomadaires
                  </span>
                  <span className="w-6 h-[2px]" style={{ backgroundColor: 'rgb(199, 125, 155)' }}></span>
                </div>
                <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface tracking-tight mt-space-xs">
                  Infos sur les Cours de Danse
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm max-w-2xl mx-auto leading-relaxed">
                  Deux créneaux le soir à Paris, une progression pensée en 3 étapes clés, et une atmosphère bienveillante où chacun s'épanouit sans jugement.
                </p>
              </div>

              {/* Schedule & Style Highlight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg mb-space-2xl">
                {/* Card 1: Horaires & Styles */}
                <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-xl hover:shadow-[0_0_30px_rgba(194,24,91,0.25)] transition-all">
                  <div className="flex items-center justify-between mb-space-md flex-wrap gap-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-headline-lg text-primary">calendar_month</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest px-space-sm py-space-xs rounded-full bg-primary-container/20 text-primary font-semibold">
                        Tous les Dimanches
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest px-space-sm py-space-xs rounded-full bg-secondary-container/30 text-secondary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-body-sm">location_on</span> Studio Bleu • Paris 10e
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Horaires &amp; Lieu</h3>

                  {/* Studio & Address highlight badge */}
                  <div className="mb-space-md p-space-sm rounded-xl bg-surface-container-high/60 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs">
                    <div className="flex items-center gap-space-xs text-on-surface">
                      <span className="material-symbols-outlined text-primary text-headline-sm">pin_drop</span>
                      <div>
                        <p className="font-headline-sm text-body-lg text-on-surface font-semibold">Studio Bleu</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">7/9 rue des Petites Écuries, 75010 Paris</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs self-start sm:self-center">
                      <span className="font-label-sm text-label-sm px-space-sm py-space-xs rounded-full bg-primary-container/30 text-primary font-semibold">
                        Cours Adultes
                      </span>
                    </div>
                  </div>

                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-md">
                    Chaque dimanche soir, 2 créneaux dédiés aux <span className="text-on-surface font-semibold">Débutants &amp; Intermédiaires</span> : de <span className="text-on-surface font-semibold">18h à 19h30</span> et de <span className="text-on-surface font-semibold">19h30 à 21h</span>, articulés autour de 2 styles complémentaires :
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="p-space-md rounded-xl bg-surface-container-high/60 border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-md text-label-md text-secondary uppercase font-semibold">Créneau 1 • 18h-19h30</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Hip-hop commercial</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Énergie scénique, musicalité incisive, attitude et précision.</p>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-high/60 border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-label-md text-label-md text-tertiary uppercase font-semibold">Créneau 2 • 19h30-21h</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Street Jazz</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Lignes conservatoire, fluidité moderne, dynamisme et sensualité.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Niveau du cours */}
                <div className="p-space-xl rounded-2xl bg-surface-container-low shadow-xl hover:shadow-[0_0_30px_rgba(142,68,173,0.25)] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="material-symbols-outlined text-headline-lg text-secondary">groups</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest px-space-sm py-space-xs rounded-full bg-secondary-container/30 text-secondary">
                        Accessibilité
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">Quel est le niveau du cours ?</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      Cours exclusivement dédiés aux <span className="text-primary font-semibold">Adultes</span> (à partir de 18 ans), conçus spécialement pour les niveaux :
                    </p>
                    <ul className="space-y-space-xs my-space-md font-body-md text-body-md text-on-surface">
                      <li className="flex items-center gap-space-sm">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span><strong className="text-primary font-semibold">Débutants complets</strong> (même si tu n'as jamais dansé)</span>
                      </li>
                      <li className="flex items-center gap-space-sm">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span><strong className="text-secondary font-semibold">Niveau intermédiaire / avancé</strong></span>
                      </li>
                    </ul>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      La pédagogie s'adapte à chacun : les bases sont détaillées pour les débutants, tandis que les chorégraphies restent stimulantes pour les niveaux intermédiaires et avancés, avec des options pour permettre à chacun de progresser à son rythme.
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm rounded-lg bg-surface-container-high/40 p-space-sm flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary">volunteer_activism</span>
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Bienveillance absolue : zéro jugement, progression à son propre tempo.
                    </span>
                  </div>
                </div>
              </div>

              {/* METHODOLOGY: The 3 Rounds Process */}
              <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-2xl mb-space-2xl">
                <div className="max-w-2xl mb-space-xl">
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="w-6 h-[2px]" style={{ backgroundColor: 'rgb(199, 125, 155)' }}></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold" style={{ color: 'rgb(199, 125, 155)' }}>
                      Pédagogie Structurée
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">
                    Comment se déroule le cours ?
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Une chorégraphie s'étendra sur 3 cours/round (la plupart du temps) :
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                  {/* Round 1 */}
                  <div className="relative p-space-lg rounded-xl bg-surface-container-low group hover:bg-surface-container transition-all">
                    <span className="font-headline-lg text-display-lg italic text-primary/30 group-hover:text-primary transition-colors">01</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-semibold">1er round</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                      on apprend le début de la chorégraphie.
                    </p>
                  </div>

                  {/* Round 2 */}
                  <div className="relative p-space-lg rounded-xl bg-surface-container-low group hover:bg-surface-container transition-all">
                    <span className="font-headline-lg text-display-lg italic text-secondary/30 group-hover:text-secondary transition-colors">02</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-semibold">2e round</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                      on révise le début et on apprend la fin.
                    </p>
                  </div>

                  {/* Round 3 */}
                  <div className="relative p-space-lg rounded-xl bg-surface-container-low group hover:bg-surface-container transition-all">
                    <span className="font-headline-lg text-display-lg italic text-tertiary/30 group-hover:text-tertiary transition-colors">03</span>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs font-semibold">3e round</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                      on travaille la qualité du mouvement, on profite et on filme pour ceux qui le souhaitent.
                    </p>
                  </div>
                </div>

                <div className="mt-space-lg pt-space-sm border-t border-white/5">
                  <p className="font-body-md text-body-md text-primary font-medium">
                    Chacun adapte sa quantité de round selon son niveau.
                  </p>
                </div>
              </div>

              {/* FAQ & ADMISSION FLOW */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div>
                    <div className="flex items-center gap-space-xs mb-1">
                      <span className="w-6 h-[2px]" style={{ backgroundColor: 'rgb(199, 125, 155)' }}></span>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold" style={{ color: 'rgb(199, 125, 155)' }}>
                        Modalités d'intégration
                      </span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">
                      Comment intégrer les cours &amp; le groupe ?
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-space-xs">
                      Pour assurer une atmosphère intime et stimulante, les inscriptions se font via une communauté privée avec des places ouvertes régulièrement.
                    </p>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-semibold">Quel est l'état d'esprit attendu ?</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Il est important pour moi que chacun se sente à l'aise dans ce cours, sans jugement. L'objectif est d'instaurer une bonne ambiance où tout le monde peut progresser à son rythme.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-space-md">
                  {/* Accordion 1 */}
                  <div className="p-space-lg rounded-xl bg-surface-container-low shadow-md">
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <span className="material-symbols-outlined text-primary">diversity_3</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Comment ça fonctionne ?</h4>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-space-lg">
                      J'ai un groupe regroupant l'ensemble de mes élèves. Dans ce groupe, je dépose les liens d'inscription pour chaque cours, et chacun s'inscrit selon ses disponibilités et son envie. Ce fonctionnement permet de garder une flexibilité pour les élèves, tout en conservant un noyau régulier qui favorise la progression et la cohésion du groupe. Les places sont donc limitées mais de nombreux élèves sont intégrés progressivement tout au long de l'année.
                    </p>
                  </div>

                  {/* Accordion 2 */}
                  <div className="p-space-lg rounded-xl bg-surface-container-low shadow-md">
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <span className="material-symbols-outlined text-secondary">verified</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">Comment rejoindre le groupe ?</h4>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pl-space-lg">
                      J'ouvre régulièrement des places, annoncées en story Instagram et en story à la une. Tu peux alors réserver une séance pour découvrir le cours. A la suite de ton 1er cours (hors workshops), si celui-ci t'as plu et que tu souhaites revenir, je t'ajouterai au groupe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SOCIAL PROOF & COMMUNITY / CONTACT SECTION */}
          <section className="w-full py-space-2xl bg-surface-container-lowest relative overflow-hidden scroll-mt-28" id="contact">
            <div
              className="absolute -top-32 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(142, 68, 173, 0.25) 0%, rgba(199, 125, 155, 0.15) 50%, transparent 70%)' }}
            ></div>
            <div className="max-w-7xl mx-auto px-margin-sm md:px-margin lg:px-margin-lg relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-space-xs mb-space-xs">
                  <span className="w-6 h-[2px]" style={{ backgroundColor: 'rgb(199, 125, 155)' }}></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold" style={{ color: 'rgb(199, 125, 155)' }}>
                    Collaboration &amp; Booking
                  </span>
                  <span className="w-6 h-[2px]" style={{ backgroundColor: 'rgb(199, 125, 155)' }}></span>
                </div>
                <h2 className="font-headline-lg text-headline-lg md:text-display-lg text-on-surface tracking-tight mt-space-xs">
                  Contact
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm max-w-2xl mx-auto leading-relaxed">
                  Pour toute demande de workshops, projets chorégraphiques, scènes ou collaborations artistiques.
                </p>
              </div>

              <div className="max-w-3xl mx-auto mb-space-2xl">
                <div
                  className="relative rounded-2xl overflow-hidden p-space-xl md:p-space-2xl bg-surface-container-low shadow-2xl"
                  style={{
                    border: '1px solid rgba(199, 125, 155, 0.35)',
                    boxShadow: 'rgba(142, 68, 173, 0.25) 0px 0px 40px, rgba(199, 125, 155, 0.15) 0px 0px 20px',
                  }}
                >
                  <div className="flex flex-col gap-space-lg">
                    {/* Email item */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left p-space-md rounded-xl bg-surface-container-high/40">
                      <div className="flex items-center gap-space-md flex-col md:flex-row">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, rgba(199, 125, 155, 0.25) 0%, rgba(142, 68, 173, 0.35) 100%)',
                            border: '1px solid rgba(199, 125, 155, 0.5)',
                          }}
                        >
                          <span className="material-symbols-outlined text-headline-md" style={{ color: 'rgb(236, 178, 255)' }}>
                            mail
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">
                            Écrivez-moi par e-mail
                          </span>
                          <a className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors tracking-wide font-semibold block" href="mailto:chriskdanse1@gmail.com">
                            chriskdanse1@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-sm shrink-0">
                        <a
                          className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md uppercase tracking-wider font-semibold text-white transition-all transform hover:scale-105 shadow-lg"
                          href="mailto:chriskdanse1@gmail.com"
                          style={{
                            background: 'linear-gradient(135deg, rgb(199, 125, 155) 0%, rgb(142, 68, 173) 100%)',
                            boxShadow: 'rgba(199, 125, 155, 0.4) 0px 0px 20px',
                          }}
                        >
                          <span>Envoyer un e-mail</span>
                          <span className="material-symbols-outlined text-label-md font-semibold">send</span>
                        </a>
                      </div>
                    </div>

                    {/* Instagram direct contact */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left p-space-md rounded-xl bg-surface-container-high/40">
                      <div className="flex items-center gap-space-md flex-col md:flex-row">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, rgba(236, 178, 255, 0.25) 0%, rgba(142, 68, 173, 0.35) 100%)',
                            border: '1px solid rgba(236, 178, 255, 0.5)',
                          }}
                        >
                          <span className="material-symbols-outlined text-headline-md" style={{ color: 'rgb(236, 178, 255)' }}>
                            photo_camera
                          </span>
                        </div>
                        <div>
                          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-1">
                            Contact direct Instagram
                          </span>
                          <a
                            className="font-headline-md text-headline-md text-on-surface hover:text-secondary transition-colors tracking-wide font-semibold block"
                            href="https://www.instagram.com/chriskdanse/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            @chriskdanse
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-sm shrink-0">
                        <a
                          className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md uppercase tracking-wider font-semibold text-white transition-all transform hover:scale-105 shadow-lg"
                          href="https://www.instagram.com/chriskdanse/"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: 'rgba(42, 42, 42, 0.75)',
                            border: '1px solid rgba(199, 125, 155, 0.5)',
                            boxShadow: 'rgba(142, 68, 173, 0.25) 0px 0px 16px',
                          }}
                          target="_blank"
                        >
                          <span>Ouvrir Instagram</span>
                          <span className="material-symbols-outlined text-label-md font-semibold" style={{ color: 'rgb(236, 178, 255)' }}>
                            north_east
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 gap-space-md mt-space-xl pt-space-lg border-t border-white/5 text-center md:grid-cols-3 max-w-2xl mx-auto">
                    <div className="p-space-sm rounded-xl bg-surface-container-high/40">
                      <span className="material-symbols-outlined text-secondary mb-1 block">theater_comedy</span>
                      <h4 className="font-label-md text-label-md text-on-surface font-semibold uppercase">Chorégraphie</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Clips, spectacles &amp; créations sur-mesure</p>
                    </div>
                    <div className="p-space-sm rounded-xl bg-surface-container-high/40">
                      <span className="material-symbols-outlined text-tertiary mb-1 block">handshake</span>
                      <h4 className="font-label-md text-label-md text-on-surface font-semibold uppercase">Workshops</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Stages intensifs</p>
                    </div>
                    <div className="p-space-sm rounded-xl bg-surface-container-high/40">
                      <span className="material-symbols-outlined text-primary mb-1 block">auto_awesome</span>
                      <h4 className="font-label-md text-label-md text-on-surface font-semibold uppercase">Collaborations</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Marques, clips &amp; projets artistiques</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery 3-photos grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-surface-container group relative">
                  <img
                    alt="Chriskdanse performance et création visuelle"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALU6GbHb3FbYefJbraAFL4PgHc5gdUdAVCnBBCNyxlzaYi8Rg1cG6rOnGAezuqkhPbc0Q81PKQDK-_uQrsV_SdAOVjz0iqc1kZryJAch4T5oEuz_MowkD27snKRKD301wr0LVoc4wscQPDeLXy_EmrPZk6yL7QNRl-aRHK_UkqpGmuuezC4jZavuUkHV47-A-MAy-ti4HwYRBUIgEIa3Tfd5PYkU2Rs4VbyrtMumLG1KeDVW4nFJ0W"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-space-md left-space-md"></div>
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-surface-container group relative">
                  <img
                    alt="Chriskdanse sur scène en mouvement fluide"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnQl3hMDyNJmHqaNuduxIp6de7AqJgq5yU9yi7_VkmAC4S7ebdLSZCuKerTMjvBlcpFmYhwrkD93pj7tReQVPIYeqvBo5cVABzc16vh1IRtV7mq-gGmJ5LWrw_w8A5xxHEM8OWLPGeZYNsI5nJyIwCXimvUo8gVbNiie23BvbsP6AYdfD5mp0dqP1X2zMmdKs9eKDUyyHliuJQJpfLqjSgIFMJZnG1_gHQuWKZJBo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-space-md left-space-md"></div>
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-surface-container group relative">
                  <img
                    alt="Chriskdanse portrait artistique studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAunEl3ItpkgLpjHS9lmZ0Z4slNaXA0nSe-vh2FecFHqNaDhiCDnQZG2O03XOV2yTJXJOGuILFWIzpmreLvfurmp1-01Nyuj1yvrfh_Cs8Vws7umJ_CvSbX3hSklv2OdP7hw28ItWB_7iIf101JmZ9Xes-4fd0zMCcwz_hpALzE_BolT58BI2K-qFDTsUMM3wbe6FQJOp0k6Tvd1gHWNTDEjgzx_G65SimDWBDMTHVdXjenob4U3htm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-space-md left-space-md"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer
        className="w-full py-space-2xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(rgb(14, 14, 14) 0%, rgb(20, 13, 26) 100%)',
          borderTop: '1px solid rgba(142, 68, 173, 0.25)',
        }}
      >
        <div className="absolute top-0 right-1/4 w-80 h-40 rounded-full blur-[90px] pointer-events-none" style={{ backgroundColor: 'rgba(142, 68, 173, 0.15)' }}></div>
        <div className="max-w-7xl mx-auto px-margin-sm md:px-margin lg:px-margin-lg relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-lg pb-space-2xl">
            {/* Col 1 */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <img
                  alt="CHRISKDANSE"
                  className="h-24 sm:h-28 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTl5BQjFbPm_aPmIgGIqLiwLS3hxcayBs5oBldPdat_4uyBpm-jnDBO5DOu2iAsgu5zKfnW25k6q-PkB35IhUnBRdhaif4NKWS78LlIi3fhn900GUptYVhgUuh4PgLtbY1HSL7oTWL8u67OjYLdi5TWoH4HzZnLOUVBofo23Xn4pe5ulxBZ03WGtpdcZHY3XyXwz_hiOYCAhKW2l8LD4aNFW45ruBvzZpLq4axov5DbJ6ekd4QX2XE"
                  style={{ filter: 'drop-shadow(rgba(199, 125, 155, 0.25) 0px 0px 16px)' }}
                />
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                Danseuse pluridisciplinaire, Chorégraphe &amp; Professeure de Danse à Paris.
              </p>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide">Disciplines</h4>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
                <li className="hover:text-secondary transition-colors">Hip-Hop Commercial</li>
                <li className="hover:text-secondary transition-colors">Street Jazz</li>
                <li className="hover:text-secondary transition-colors">Danse Classique</li>
                <li className="hover:text-secondary transition-colors">Afro &amp; Jazz</li>
                <li className="hover:text-secondary transition-colors">Contemporain</li>
                <li className="hover:text-secondary transition-colors">Dancehall, Lyrical &amp; Heels</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide">Socials &amp; Media</h4>
              <div className="flex flex-col gap-space-xs font-body-md text-body-md">
                <a className="text-on-surface-variant hover:text-secondary transition-colors" href="https://instagram.com/chriskdanse" rel="noopener noreferrer" target="_blank">
                  Instagram @chriskdanse
                </a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors" href="https://tiktok.com/@chriskdanse" rel="noopener noreferrer" target="_blank">
                  TikTok @chriskdanse
                </a>
                <a className="text-on-surface-variant hover:text-secondary transition-colors" href="https://youtube.com/@chriskdanse" rel="noopener noreferrer" target="_blank">
                  YouTube @Chriskdanse
                </a>
              </div>
            </div>

            {/* Col 4 */}
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide">Contact &amp; Booking</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Pour toute demande de workshops, projets chorégraphiques, scènes ou collaborations artistiques.
              </p>
              <div className="flex flex-col gap-space-xs mt-space-xs">
                <a
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md uppercase tracking-wider font-semibold text-white transition-all transform hover:scale-105"
                  href="mailto:chriskdanse1@gmail.com"
                  style={{
                    backgroundColor: 'rgba(42, 42, 42, 0.75)',
                    border: '1px solid rgba(199, 125, 155, 0.5)',
                    boxShadow: 'rgba(142, 68, 173, 0.25) 0px 0px 16px',
                  }}
                >
                  <span className="material-symbols-outlined text-label-md" style={{ color: 'rgb(236, 178, 255)' }}>
                    mail
                  </span>
                  <span>chriskdanse1@gmail.com</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md uppercase tracking-wider font-semibold text-white transition-all transform hover:scale-105"
                  href="https://instagram.com/chriskdanse"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(42, 42, 42, 0.75)',
                    border: '1px solid rgba(199, 125, 155, 0.5)',
                    boxShadow: 'rgba(142, 68, 173, 0.25) 0px 0px 16px',
                  }}
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-label-md" style={{ color: 'rgb(236, 178, 255)' }}>
                    photo_camera
                  </span>
                  <span>Instagram @chriskdanse</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <p className="font-body-sm text-body-sm text-on-surface-variant">© 2026 Chriskdanse. Tous droits réservés.</p>
            <p className="font-body-sm text-body-sm text-secondary font-medium">Danseuse • Chorégraphe • Paris</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
