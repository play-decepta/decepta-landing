export default function LiveBanner() {
  return (
    <div className="w-full bg-[#EAB308] flex items-center justify-center gap-2 py-[9px] px-4 flex-wrap" role="banner" aria-label="Live event notification">
      <span className="w-[7px] h-[7px] rounded-full bg-black flex-shrink-0 animate-pulse" />
      <p className="text-[11px] font-bold tracking-[0.18em] text-black uppercase">
        <span className="mr-4">Live</span>
        <span>Friday Event Open</span>
      </p>
      <a href="#friday" className="text-[11px] font-bold tracking-[0.1em] text-black uppercase underline underline-offset-2 opacity-75 hover:opacity-100 transition-opacity">
        Predict now →
      </a>
      <span className="opacity-50 mx-1 text-[11px] font-bold text-black">·</span>
      <p className="text-[10px] font-semibold tracking-[0.08em] text-black uppercase opacity-70">
        Preview, full launch June 28
      </p>
    </div>
  )
}
