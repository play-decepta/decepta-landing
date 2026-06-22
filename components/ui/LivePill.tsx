// components/ui/LivePill.tsx
export default function LivePill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[rgba(249,115,22,0.12)] border border-[rgba(249,115,22,0.3)] rounded-full px-4 py-1.5">
      <span className="w-[6px] h-[6px] rounded-full bg-[#F97316] animate-pulse flex-shrink-0" />
      <span className="text-[11px] font-bold text-[#F97316] tracking-[0.14em] uppercase">
        {label}
      </span>
    </div>
  )
}