// components/ui/SectionLabel.tsx
export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="relative z-10 text-[11px] font-bold tracking-[0.18em] uppercase text-[#F97316] mb-4">
      {children}
    </p>
  )
}