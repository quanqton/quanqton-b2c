'use client'

import React, { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'
import SalTextOverlays from './SalTextOverlays'

const TOTAL_FRAMES = 240

export default function SalScrollAnimation() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const imagesRef = useRef<(HTMLImageElement | null)[]>(Array(TOTAL_FRAMES).fill(null))
    const readyRef = useRef(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Draw frame 1 immediately, load rest in background
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return

        // Load and draw frame 1 RIGHT NOW
        const firstImg = new Image()
        firstImg.onload = () => {
            canvas.width = firstImg.naturalWidth
            canvas.height = firstImg.naturalHeight
            ctx.drawImage(firstImg, 0, 0)
            imagesRef.current[0] = firstImg
            readyRef.current = true
        }
        firstImg.src = '/frames/ezgif-frame-001.jpg'

        // Load remaining frames silently in background
        for (let i = 2; i <= TOTAL_FRAMES; i++) {
            const img = new Image()
            const paddedIndex = i.toString().padStart(3, '0')
            img.onload = () => { imagesRef.current[i - 1] = img }
            img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`
        }
    }, [])

    // Render loop — updates canvas based on scroll
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!canvas || !ctx) return

        let frameId: number

        const render = () => {
            if (readyRef.current) {
                const progress = scrollYProgress.get()
                const frameIndex = Math.round(progress * (TOTAL_FRAMES - 1))
                const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex))
                const img = imagesRef.current[clamped]

                if (img && img.complete && img.naturalWidth > 0) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    ctx.drawImage(img, 0, 0)
                }
            }
            frameId = requestAnimationFrame(render)
        }

        frameId = requestAnimationFrame(render)
        return () => cancelAnimationFrame(frameId)
    }, [scrollYProgress])

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative bg-[var(--deep)] outline-none border-none py-0 my-0"
            style={{
                height: '500vh',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)'
            }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--deep)]">

                {/* Canvas Engine — visible immediately */}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />

                {/* Text Overlays — always visible */}
                <SalTextOverlays scrollYProgress={scrollYProgress} />

            </div>
        </section>
    )
}
