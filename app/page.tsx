"use client";
import { useState } from "react";


// ======================================================
// 🟦 LANGUAGE DATA
// ======================================================
const t = {
  EN: {
    promoTitle: "Crystal assets for your next project",
    promoDesc: "High quality assets and prism‑inspired branding for modern games and apps.",
    joinDiscord: "Join Discord",
    viewSocials: "View Socials",
    profileRole: "Developer • Designer • Crystal Assets",
    description:
      "Hello, I'm Amo.os, a new developer and designer! I specialize in making pictures, and I don't have much experience in coding or asset creation yet — but I'm learning. C ya!",
    overview: "Overview",
    yearsCoding: "Years Coding",
    yearsOld: "Years Old",
    grade: "Grade",
    languages: "Languages",
    moreInfo: "More Information",
    favColor: "Favourite Color",
    prismTitle: "Prism Assets",
    prismDesc: "Premium UI elements and assets.",
    prismButton: "Visit Prism",
    footer: "This website contains AI generated content!",
  },

  DE: {
    promoTitle: "Crystal‑Assets für dein nächstes Projekt",
    promoDesc:
      "Hochwertige Assets und prism‑inspiriertes Branding für moderne Spiele und Apps.",
    joinDiscord: "Discord beitreten",
    viewSocials: "Socials ansehen",
    profileRole: "Entwickler • Designer • Crystal Assets",
    description:
      "Hallo, ich bin Amo.os, ein neuer Entwickler und Designer! Ich mache hauptsächlich Bilder und habe noch wenig Erfahrung im Programmieren oder Asset‑Design — aber ich lerne. C ya!",
    overview: "Übersicht",
    yearsCoding: "Jahre Programmieren",
    yearsOld: "Jahre Alt",
    grade: "Klasse",
    languages: "Sprachen",
    moreInfo: "Weitere Informationen",
    favColor: "Lieblingsfarbe",
    prismTitle: "Prism Assets",
    prismDesc: "Premium UI‑Elemente und Assets.",
    prismButton: "Prism besuchen",
    footer: "Diese Website enthält KI‑generierte Inhalte!",
  },

  FR: {
    promoTitle: "Des assets de qualité cristal pour ton prochain projet",
    promoDesc:
      "Assets haut de gamme et branding inspiré du prisme pour jeux et applications modernes.",
    joinDiscord: "Rejoindre Discord",
    viewSocials: "Voir les réseaux sociaux",
    profileRole: "Développeur • Designer • Crystal Assets",
    description:
      "Salut, je suis Amo.os, un nouveau développeur et designer ! Je crée surtout des images et j'apprends encore le code et la création d'assets. À plus !",
    overview: "Aperçu",
    yearsCoding: "Années de code",
    yearsOld: "Âge",
    grade: "Classe",
    languages: "Langues",
    moreInfo: "Plus d'informations",
    favColor: "Couleur préférée",
    prismTitle: "Prism Assets",
    prismDesc: "Éléments UI premium inspirés du cristal.",
    prismButton: "Visiter Prism",
    footer: "Ce site contient du contenu généré par IA !",
  },
};


// ======================================================
// 🟩 STATE + THEME
// ======================================================
const originalTheme = "#000000";
const stormyBlue = "#495987";

export default function Home() {
  const [lang, setLang] = useState<keyof typeof t>("EN");
  const [themeColor, setThemeColor] = useState(originalTheme);

  function toggleTheme() {
    setThemeColor((prev) => (prev === originalTheme ? stormyBlue : originalTheme));
  }

  return (
    <main
      className="min-h-screen text-white flex flex-col items-center px-4 py-10 gap-8 transition-colors duration-300"
      style={{ backgroundColor: themeColor }}
    >


      {/* ======================================================
          🟧 TOP BAR
      ====================================================== */}
      <header className="w-full max-w-4xl flex items-center justify-between text-sm text-zinc-300">
        <span className="font-medium tracking-tight">about-amo.os</span>

        <div className="flex gap-3">
          <button onClick={() => setLang("EN")} className="hover:text-white transition">EN</button>
          <button onClick={() => setLang("DE")} className="hover:text-white transition">DE</button>
          <button onClick={() => setLang("FR")} className="hover:text-white transition">FR</button>
        </div>
      </header>



      {/* ======================================================
          🟪 PROMO / BANNER
      ====================================================== */}
      <section className="w-full max-w-4xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <h1 className="text-lg md:text-xl font-semibold tracking-tight">
            {t[lang].promoTitle}
          </h1>
          <p className="text-zinc-300 text-sm mt-1 max-w-md">
            {t[lang].promoDesc}
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://discord.gg/M97BaD5vup"
            target="_blank"
            className="px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition text-sm"
          >
            {t[lang].joinDiscord}
          </a>

          <a
            href="https://linktr.ee/amo.os"
            target="_blank"
            className="px-4 py-2 bg-black/40 border border-white/10 rounded-xl hover:bg-black/60 transition text-sm"
          >
            {t[lang].viewSocials}
          </a>
        </div>
      </section>



      {/* ======================================================
          🟦 MAIN CONTENT GRID
      ====================================================== */}
      <section className="w-full max-w-4xl grid md:grid-cols-[1.2fr,1fr] gap-6 items-start">



        {/* ======================================================
            🟩 PROFILE CARD
        ====================================================== */}
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start relative z-10">

            {/* PROFILE IMAGE + AURA */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute w-40 h-40 rounded-full blur-3xl opacity-80"
                style={{
                  background: "radial-gradient(circle, rgb(0, 162, 255), rgba(0,0,0,0))"
                }}
              />
              <img
                src="/profile.png"
                alt="Profile Icon"
                width={96}
                height={96}
                className="relative z-10 w-24 h-24 rounded-full border border-white/10 shadow-lg object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="text-center sm:text-left">
              <h2
                className="text-3xl leading-tight"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Amo.<b>os</b>
              </h2>

              <p className="text-zinc-300 text-sm mt-1">
                {t[lang].profileRole}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-xs text-zinc-300 mt-3">
                <span className="px-2 py-1 rounded-full bg-black/40 border border-white/10">🇩🇪 Germany</span>
                <span className="px-2 py-1 rounded-full bg-black/40 border border-white/10">13/14 y/o</span>
                <span className="px-2 py-1 rounded-full bg-black/40 border border-white/10">Active since 2026</span>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-zinc-300 text-sm mt-5">
            {t[lang].description}
          </p>
        </div>



        {/* ======================================================
            🟨 RIGHT SIDE
        ====================================================== */}
        <div className="space-y-4">

          {/* OVERVIEW */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm font-semibold tracking-tight mb-3">
              {t[lang].overview}
            </h3>

            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              <div className="bg-black/40 border border-white/10 rounded-xl p-3">
                <p className="text-lg font-semibold">~1</p>
                <p className="text-zinc-300 text-xs mt-1">{t[lang].yearsCoding}</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-3">
                <p className="text-lg font-semibold">13/14</p>
                <p className="text-zinc-300 text-xs mt-1">{t[lang].yearsOld}</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-3">
                <p className="text-lg font-semibold">7th</p>
                <p className="text-zinc-300 text-xs mt-1">{t[lang].grade}</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-3">
                <p className="text-lg font-semibold">3</p>
                <p className="text-zinc-300 text-xs mt-1">{t[lang].languages}</p>
              </div>
            </div>
          </div>



          {/* MORE INFORMATION */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl text-sm text-zinc-300">
            <h3 className="text-sm font-semibold tracking-tight mb-2 text-white">
              {t[lang].moreInfo}
            </h3>

            <div className="grid grid-cols-2 gap-3 text-center text-sm mt-3">

              {/* HEX Display Box */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center">
                <p className="text-lg font-semibold">#495987</p>
                <p className="text-zinc-300 text-xs mt-1">{t[lang].favColor}</p>
              </div>

              {/* Clickable Color Box */}
              <button
                onClick={toggleTheme}
                className="bg-black/40 border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center hover:bg-black/60 transition"
              >
                <div
                  className="w-6 h-6 rounded-md border border-white/20 shadow mb-2"
                  style={{ background: "#495987" }}
                />
                <p className="text-xs">Stormy Blue</p>
              </button>

            </div>
          </div>



          {/* PRISM PROMO */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl text-sm text-zinc-300">
            <h3 className="text-sm font-semibold tracking-tight mb-2 text-white">
              {t[lang].prismTitle}
            </h3>

            <p>{t[lang].prismDesc}</p>

            <a
              href="https://discord.gg/JH9S8F9Y"
              target="_blank"
              className="inline-block mt-3 px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition text-xs"
            >
              {t[lang].prismButton}
            </a>
          </div>

        </div>
      </section>



      {/* ======================================================
          🟫 FOOTER (AI CONTENT NOTICE)
      ====================================================== */}
      <footer className="text-xs text-zinc-400 mt-10 opacity-70">
        {t[lang].footer}
      </footer>

    </main>
  );
}
