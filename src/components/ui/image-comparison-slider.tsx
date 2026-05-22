'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface ImageComparisonProps {
  beforeSrc: string
  afterSrc: string
  altBefore?: string
  altAfter?: string
  label?: string
}

export function ImageComparison({
  beforeSrc,
  afterSrc,
  altBefore = 'Before',
  altAfter = 'After',
  label,
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const newPosition = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      setSliderPosition(newPosition)
    },
    [isDragging]
  )

  const handleMouseUp = useCallback(() => setIsDragging(false), [])

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)
    return () => window.removeEventListener('mouseup', handleMouseUp)
  }, [handleMouseUp])

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg">
      <div
        ref={containerRef}
        className="relative w-full aspect-square select-none cursor-ew-resize overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseLeave={handleMouseUp}
        onTouchStart={() => setIsDragging(true)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleMouseUp}
      >
        {/* Before image — base layer */}
        <Image
          src={beforeSrc}
          alt={altBefore}
          fill
          className="object-cover"
          draggable={false}
        />

        {/* After image — clipped layer */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <Image
            src={afterSrc}
            alt={altAfter}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Before / After labels */}
        <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-heading font-semibold uppercase tracking-wide px-2 py-1 rounded">
          Before
        </span>
        <span className="absolute top-3 right-3 bg-[var(--orange)] text-white text-xs font-heading font-semibold uppercase tracking-wide px-2 py-1 rounded">
          After
        </span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
            <polyline points="9 18 3 12 9 6" />
            <polyline points="15 6 21 12 15 18" />
          </svg>
        </div>
      </div>

      {label && (
        <div className="bg-white px-4 py-3 border-t border-gray-100">
          <p className="font-heading font-semibold text-sm text-navy uppercase tracking-wide">{label}</p>
        </div>
      )}
    </div>
  )
}
