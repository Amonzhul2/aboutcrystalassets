"use client";
import { useState } from "react";

export default function Home() {
  const t = {
    EN: {
      promoTitle: "Crystal assets for your next project",
      promoDesc: "High quality assets and prism‑inspired branding for modern games and apps.",
      joinDiscord: "Join Discord",
      viewPortfolio: "View Portfolio",
      profileRole: "Developer • Designer • Crystal Assets",
      description:
        "Hello, I'm Amo.os, a new developer and designer! I specialize in making pictures, and I don't have much experience in coding or asset creation yet — but I'm learning. C ya!",
      overview: "Overview",
      yearsCoding: "Years Coding",
      yearsOld: "Years Old",
      grade: "Grade",
      languages: "Languages",
      focusTitle: "Focus",
      focusDesc: "Making art, learning coding, and most importantly: school.",
      prismTitle: "Prism Assets",
      prismDesc: "Premium crystal‑inspired UI elements and assets.",
      prismButton: "Visit Prism",
    },

    DE: {
      promoTitle: "Kristall‑Qualitäts‑Assets für dein nächstes Projekt",
      promoDesc:
        "Hochwertige Assets und prism‑inspiriertes Branding für moderne Spiele und Apps.",
      joinDiscord: "Discord beitreten",
      viewPortfolio: "Portfolio ansehen",
      profileRole: "Entwickler • Designer • Crystal Assets",
      description:
        "Hallo, ich bin Amo.os, ein neuer Entwickler und Designer! Ich mache hauptsächlich Bilder und habe noch wenig Erfahrung im Programmieren oder Asset‑Design — aber ich lerne. C ya!",
      overview: "Übersicht",
      yearsCoding: "Jahre Programmieren",
      yearsOld: "Jahre Alt",
      grade: "Klasse",
      languages: "Sprachen",
      focusTitle: "Fokus",
      focusDesc: "Kunst machen, Programmieren lernen und am wichtigsten: Schule.",
      prismTitle: "Prism Assets",
      prismDesc: "Premium UI‑Elemente und Assets im Kristallstil.",
      prismButton: "Prism besuchen",
    },

    FR: {
      promoTitle: "Des assets de qualité cristal pour ton prochain projet",
      promoDesc:
        "Assets haut de gamme et branding inspiré du prisme pour jeux et applications modernes.",
      joinDiscord: "Rejoindre Discord",
      viewPortfolio: "Voir le portfolio",
      profileRole: "Développeur • Designer • Crystal Assets",
      description:
        "Salut, je suis Amo.os, un nouveau développeur et designer ! Je crée surtout des images et j'apprends encore le code et la création d'assets. À plus !",
      overview: "Aperçu",
      yearsCoding: "Années de code",
      yearsOld: "Âge",
      grade: "Classe",
      languages: "Langues",
      focusTitle: "Focus",
      focusDesc: "Créer de l'art, apprendre le code, et surtout : l'école.",
      prismTitle: "Prism Assets",
      prismDesc: "Éléments UI premium inspirés du cristal.",
      prismButton: "Visiter Prism",
    },
  };

  const [lang, setLang] = useState<keyof typeof t>("EN");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10 gap-8">

      {/* Top bar with language selector */}
      <header className="w-full max-w-4xl flex items-center justify-between text-sm text-zinc-400">
        <span className="font-medium tracking-tight">about-crystalassets</span>
        <div className="flex gap-3">
          <button onClick={() => setLang("EN")} className="hover:text-white transition">EN</button>
          <button onClick={() => setLang("DE")} className="hover:text-white transition">DE</button>
          <button onClick={() => setLang("FR")} className="hover:text-white transition">FR</button>
        </div>
      </header>

      {/* Promo / Banner */}
      <section className="w-full max-w-4xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <h1 className="text-lg md:text-xl font-semibold tracking-tight">
            {t[lang].promoTitle}
          </h1>
          <p className="text-zinc-400 text-sm mt-1 max-w-md">
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
          <button className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl hover:bg-zinc-700 transition text-sm">
            {t[lang].viewPortfolio}
          </button>
        </div>
      </section>

      {/* Profile + main card */}
      <section className="w-full max-w-4xl grid md:grid-cols-[1.2fr,1fr] gap-6 items-start">

        {/* Left: Profile card */}
        <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-xl">

          {/* Glow behind icon */}
          <div className="absolute -top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 blur-3xl opacity-40 rounded-full" />

          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
            {/* Icon */}
            <img
              src="/profile.png"
              alt="Profile Icon"
              className="w-24 h-24 rounded-full border border-zinc-700 shadow-lg object-cover"
            />

            {/* Text */}
            <div className="text-center sm:text-left">
              <h2
                className="text-3xl leading-tight"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Amo.<b>os</b>
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                {t[lang].profileRole}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-xs text-zinc-400 mt-3">
                <span className="px-2 py-1 rounded-full bg-zinc-800/80 border border-zinc-700">
                  🇩🇪 Germany
                </span>
                <span className="px-2 py-1 rounded-full bg-zinc-800/80 border border-zinc-700">
                  13/14 y/o
                </span>
                <span className="px-2 py-1 rounded-full bg-zinc-800/80 border border-zinc-700">
                  Active since 2026
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm mt-5">
            {t[lang].description}
          </p>
        </div>

        {/* Right: Overview / quick info */}
        <div className="space-y-4">
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm font-semibold tracking-tight mb-3">
              {t[lang].overview}
            </h3>
            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3">
                <p className="text-lg font-semibold">~1</p>
                <p className="text-zinc-400 text-xs mt-1">{t[lang].yearsCoding}</p>
              </div>
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3">
                <p className="text-lg font-semibold">13/14</p>
                <p className="text-zinc-400 text-xs mt-1">{t[lang].yearsOld}</p>
              </div>
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3">
                <p className="text-lg font-semibold">7th</p>
                <p className="text-zinc-400 text-xs mt-1">{t[lang].grade}</p>
              </div>
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-3">
                <p className="text-lg font-semibold">3</p>
                <p className="text-zinc-400 text-xs mt-1">{t[lang].languages}</p>
              </div>
            </div>
          </div>

          {/* Prism Promo */}
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-5 shadow-xl text-sm text-zinc-400">
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
    </main>
  );
}