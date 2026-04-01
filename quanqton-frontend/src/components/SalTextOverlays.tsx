'use client'

import React from 'react'
import { motion, MotionValue, useTransform } from 'framer-motion'
import Link from 'next/link'

interface Props {
    scrollYProgress: MotionValue<number>
}

export default function SalTextOverlays({ scrollYProgress }: Props) {
    // Hero Section Animation (O SAL PERFEITO)
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -600])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center overflow-hidden">
            
            {/* HERÓI (O SAL PERFEITO) */}
            <motion.div 
                style={{ y: heroY, opacity: heroOpacity }}
                className="flex flex-col items-center text-center px-4"
            >
                <h1 
                    className="text-6xl md:text-8xl tracking-wider mb-8 font-bold text-white uppercase"
                    style={{ 
                        fontFamily: 'var(--font-bebas-neue)',
                        textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                    }}
                >
                    O sal perfeito
                </h1>
                
                <Link
                    href="#produtos"
                    className="pointer-events-auto group relative px-12 py-6 rounded-full text-white font-bold tracking-[0.2em] uppercase transition-all duration-700 hover:scale-110 active:scale-95 overflow-hidden"
                    style={{ 
                        fontFamily: 'var(--font-outfit)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(24px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255,255,255,0.05)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-4 text-sm md:text-base">
                        Comprar agora
                        <span className="group-hover:translate-x-2 transition-transform duration-500 text-2xl leading-none">→</span>
                    </span>
                </Link>
            </motion.div>

            {/* SUBSEQUENT PHASES - Continuous upward motion */}
            <TextMoment 
                progress={scrollYProgress}
                start={0.30} 
                end={0.55}
                headline="SEM NADA QUE A INDÚSTRIA TIROU"
                sub="84+ minerais preservados e essenciais para a sua vida."
            />

            <TextMoment 
                progress={scrollYProgress}
                start={0.60} 
                end={0.85}
                headline="ZERO REFINO"
                sub="Exatamente como a natureza criou. Do mar para a sua mesa."
            />

            <TextMoment 
                progress={scrollYProgress}
                start={0.90} 
                end={1.0}
                headline="SINTA A DIFERENÇA"
                sub="Energia, hidratação e sabor em uma nova categoria de sal."
                isLast
            />
        </div>
    )
}

function TextMoment({
    progress,
    start,
    end,
    headline,
    sub,
    isLast = false
}: {
    progress: MotionValue<number>,
    start: number,
    end: number,
    headline: string,
    sub: string,
    isLast?: boolean
}) {
    const y = useTransform(
        progress, 
        [start - 0.15, start, end, end + 0.15], 
        [500, 0, -200, -600]
    )
    
    const opacity = useTransform(
        progress,
        [start - 0.1, start, end, end + 0.1],
        [0, 1, 1, 0]
    )

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute flex flex-col items-center justify-center text-white px-6 text-center max-w-4xl"
        >
            <h2
                className="text-6xl md:text-8xl tracking-wider mb-6 font-bold uppercase"
                style={{
                    fontFamily: 'var(--font-bebas-neue)',
                    textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                }}
            >
                {headline}
            </h2>
            <p
                className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl"
                style={{
                    fontFamily: 'var(--font-outfit)',
                    textShadow: '0 4px 15px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.5)'
                }}
            >
                {sub}
            </p>
        </motion.div>
    )
}
