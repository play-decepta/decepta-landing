// hooks/useCountdown.ts
'use client'
import { useState, useEffect } from 'react'

type CountdownParts = { d: string; h: string; m: string; s: string }

export default function useCountdown(target: Date): CountdownParts {
  const [time, setTime] = useState<CountdownParts>({ d: '00', h: '00', m: '00', s: '00' })

  useEffect(() => {
    const fmt = (n: number) => String(Math.max(0, n)).padStart(2, '0')

    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now())
      setTime({
        d: fmt(Math.floor(diff / 86400000)),
        h: fmt(Math.floor((diff % 86400000) / 3600000)),
        m: fmt(Math.floor((diff % 3600000) / 60000)),
        s: fmt(Math.floor((diff % 60000) / 1000)),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  return time
}