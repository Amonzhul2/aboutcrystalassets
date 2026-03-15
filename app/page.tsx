{/* Left: Profile card */}
<div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-xl">

  {/* Aura hinter dem Profilbild */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div
      className="w-40 h-40 rounded-full blur-3xl opacity-60"
      style={{
        background: "radial-gradient(circle, rgba(0,150,255,0.8), rgba(0,0,0,0))"
      }}
    />
  </div>

  <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start relative z-10">
    {/* Icon */}
    <img
      src="/profile.png"
      alt="Profile Icon"
      width={96}
      height={96}
      className="relative z-10 w-24 h-24 rounded-full border border-zinc-700 shadow-lg object-cover"
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
