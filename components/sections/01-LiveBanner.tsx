export default function LiveBanner() {
  return (
    <div className="w-full bg-[#EAB308] flex items-center justify-center gap-2 py-[9px] px-4" role="banner" aria-label="Live event notification">
      <span className="w-[7px] h-[7px] rounded-full bg-black flex-shrink-0 animate-pulse" />
      <p className="text-[11px] font-bold tracking-[0.18em] text-black uppercase">
        Live <span className="opacity-60 mx-1.5">—</span> Friday Event Open
      </p>
      <a href="#friday" className="text-[11px] font-bold tracking-[0.1em] text-black uppercase underline underline-offset-2 opacity-75 hover:opacity-100 transition-opacity">
        Predict now →
      </a>
    </div>
  )
}
