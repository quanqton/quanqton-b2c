'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import FadeIn from '../ui/FadeIn'
import { clsx } from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const minerals = [
    {
        id: 'sodio',
        name: 'Sódio',
        formula: 'Na',
        color: 'from-[#a8c4e0] to-[#5b8fb9]',
        glowColor: 'rgba(91,143,185,0.35)',
        borderColor: 'border-[#5b8fb9]/40',
        activeBg: 'bg-[#5b8fb9]/10',
        tagColor: 'text-[#a8c4e0]',
        image: '/mineral-sodio.png',
        amount: '38% por amostra (LAUDO nº 2084/25)',
        headline: 'Sódio - o eletrólito que regula tudo',
        description: 'O sódio é essencial para o equilíbrio hídrico, a transmissão nervosa e a contração muscular. No sal marinho integral, o sódio vem acompanhado dos minerais que o corpo precisa para metabolizá-lo adequadamente - diferente do sal refinado, onde chega isolado e sobrecarrega os rins.',
    },
    {
        id: 'magnesio',
        name: 'Magnésio',
        formula: 'Mg',
        color: 'from-[#c8e6c9] to-[#4caf50]',
        glowColor: 'rgba(76,175,80,0.3)',
        borderColor: 'border-[#4caf50]/40',
        activeBg: 'bg-[#4caf50]/10',
        tagColor: 'text-[#a5d6a7]',
        image: '/mineral-magnesio.png',
        amount: '0,020% por amostra (LAUDO nº 2084/25)',
        headline: 'Magnésio - o mineral que 7 em cada 10 brasileiros não recebem o suficiente',
        description: 'Cofator em mais de 300 reações que o seu corpo realiza a cada segundo. Da contração muscular ao sono profundo, da regulação do açúcar no sangue ao equilíbrio do sistema nervoso. O magnésio marinho do QuanQton é biodisponível - o corpo o reconhece porque vem na mesma forma que existe no plasma sanguíneo.',
    },
    {
        id: 'potassio',
        name: 'Potássio',
        formula: 'K',
        color: 'from-[#f8bbd0] to-[#e91e8c]',
        glowColor: 'rgba(233,30,140,0.25)',
        borderColor: 'border-[#e91e8c]/40',
        activeBg: 'bg-[#e91e8c]/10',
        tagColor: 'text-[#f48fb1]',
        image: '/mineral-potassio.png',
        amount: '0,046% por amostra (LAUDO nº 2084/25)',
        headline: 'Potássio - o contrapeso natural do sódio',
        description: 'Essencial para a pressão arterial, a função cardíaca e o equilíbrio hídrico. O potássio e o sódio trabalham em par - quando um está em excesso e o outro falta, o corpo descompensa. No QuanQton, chegam juntos, na proporção que o oceano estabeleceu.',
    },
    {
        id: 'calcio',
        name: 'Cálcio',
        formula: 'Ca',
        color: 'from-[#fff9c4] to-[#f9a825]',
        glowColor: 'rgba(249,168,37,0.3)',
        borderColor: 'border-[#f9a825]/40',
        activeBg: 'bg-[#f9a825]/10',
        tagColor: 'text-[#ffe082]',
        image: '/mineral-calcio.png',
        amount: '0,080% por amostra (LAUDO nº 2084/25)',
        headline: 'Cálcio - além dos ossos',
        description: 'Fundamental para a coagulação sanguínea, a transmissão nervosa e o ritmo cardíaco. Mais de 99% do cálcio do corpo está nos ossos - mas o 1% restante é o que mantém o coração batendo no ritmo certo. No sal marinho integral, o cálcio vem na forma de cloreto e sulfato de cálcio, absorvidos naturalmente pelo organismo.',
    },
    {
        id: 'cloreto',
        name: 'Cloreto',
        formula: 'Cl',
        color: 'from-[#e0f7fa] to-[#00bcd4]',
        glowColor: 'rgba(0,188,212,0.3)',
        borderColor: 'border-[#00bcd4]/40',
        activeBg: 'bg-[#00bcd4]/10',
        tagColor: 'text-[#80deea]',
        image: '/mineral-cloreto.png',
        amount: '98,5g/100g por amostra (LAUDO nº 2084/25)',
        headline: 'Cloretos - o eletrólito esquecido',
        description: 'Trabalha com o sódio e o potássio para manter o equilíbrio ácido-base do sangue e auxiliar na produção do ácido clorídrico - essencial para a digestão. No sal marinho integral, os cloretos chegam na forma de cloreto de sódio e cloreto de magnésio, em equilíbrio natural com os demais minerais.',
    },
]

const traceElements = [
    'Ferro (Fe)', 'Manganês (Mn)', 'Cobre (Cu)', 'Iodo (I)', 'Selênio (Se)',
    'Boro (B)', 'Cromo (Cr)', 'Molibdênio (Mo)', 'Silício (Si)', 'Cobalto (Co)',
    'Flúor (F)', 'Rubídio (Rb)', 'Estrôncio (Sr)', 'Lítio (Li)', '+ 68 outros',
]

export default function Minerals() {
    const [activeId, setActiveId] = useState('magnesio')
    const active = minerals.find(m => m.id === activeId)!
    const currentIndex = minerals.findIndex(m => m.id === activeId)
    const wheelAccumulator = React.useRef(0)
    const lastWheelTime = React.useRef(0)

    const handleWheel = (e: React.WheelEvent) => {
        // Support only horizontal scrolling for tab switching
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return

        const now = Date.now()
        // Reset accumulation if it's been a while since last scroll
        if (now - lastWheelTime.current > 300) {
            wheelAccumulator.current = 0
        }
        lastWheelTime.current = now

        wheelAccumulator.current += e.deltaX

        const threshold = 150 // sensitivity
        if (wheelAccumulator.current > threshold) {
            if (currentIndex < minerals.length - 1) setActiveId(minerals[currentIndex + 1].id)
            wheelAccumulator.current = 0
        } else if (wheelAccumulator.current < -threshold) {
            if (currentIndex > 0) setActiveId(minerals[currentIndex - 1].id)
            wheelAccumulator.current = 0
        }
    }

    const [dragStart, setDragStart] = useState<number | null>(null)
    const [dragEnd, setDragEnd] = useState<number | null>(null)
    
    const handleDragStart = (clientX: number) => {
        setDragEnd(null)
        setDragStart(clientX)
    }

    const handleDragMove = (clientX: number) => {
        if (dragStart !== null) {
            setDragEnd(clientX)
        }
    }

    const handleDragEnd = () => {
        if (!dragStart || !dragEnd) return
        const distance = dragStart - dragEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe && currentIndex < minerals.length - 1) setActiveId(minerals[currentIndex + 1].id)
        if (isRightSwipe && currentIndex > 0) setActiveId(minerals[currentIndex - 1].id)
        
        setDragStart(null)
        setDragEnd(null)
    }

    const goPrev = () => { if (currentIndex > 0) setActiveId(minerals[currentIndex - 1].id) }
    const goNext = () => { if (currentIndex < minerals.length - 1) setActiveId(minerals[currentIndex + 1].id) }

    return (
        <section id="minerais" className="bg-brand-navy py-[100px] border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-brand-sky/10 to-transparent"></div>
            <div className="container-custom relative z-10">

                {/* Header */}
                <FadeIn>
                    <span className="section-label !text-center">CIÊNCIA DO OCEANO</span>
                        <h2 className="mb-4 text-[clamp(1.5rem,3vw,2.5rem)] text-white text-center leading-tight">O que o Oceano Atlântico colocou em cada grama</h2>
                        <p className="text-center text-brand-silver text-[1rem] max-w-[600px] mx-auto mb-16">
                            Cada grama de Sal QuanQton carrega a riqueza completa do oceano.
                        </p>
                </FadeIn>

                {/* Mineral Tabs */}
                <FadeIn delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {minerals.map((m) => (
                            <button
                                key={m.id}
                                onClick={() => setActiveId(m.id)}
                                className={clsx(
                                    'flex items-center gap-2.5 px-5 py-3 rounded-full border font-body text-[0.85rem] font-semibold tracking-wide transition-all duration-300',
                                    activeId === m.id
                                        ? `${m.activeBg} ${m.borderColor} text-white scale-105 shadow-[0_0_20px_var(--glow)]`
                                        : 'bg-white/[0.03] border-white/10 text-brand-silver hover:border-white/20 hover:text-white hover:scale-105'
                                )}
                                style={activeId === m.id ? { '--glow': m.glowColor } as React.CSSProperties : {}}
                            >
                                <span className={clsx('font-display text-[1rem] font-bold', activeId === m.id ? m.tagColor : 'text-brand-silver/60')}>
                                    {m.formula}
                                </span>
                                {m.name}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Active Mineral Card */}
                <div className="relative group/slider">
                <div
                    key={active.id}
                    className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-stretch select-none cursor-grab active:cursor-grabbing pb-8"
                    style={{ animation: 'mineralFadeIn 0.4s ease' }}
                    onTouchStart={e => handleDragStart(e.targetTouches[0].clientX)}
                    onTouchMove={e => handleDragMove(e.targetTouches[0].clientX)}
                    onTouchEnd={handleDragEnd}
                    onMouseDown={e => handleDragStart(e.clientX)}
                    onMouseMove={e => handleDragMove(e.clientX)}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onWheel={handleWheel}
                >
                    {/* Image Panel */}
                    <div
                        className={clsx(
                            'relative rounded-3xl overflow-hidden border aspect-[4/5] lg:aspect-auto',
                            active.borderColor,
                        )}
                        style={{ boxShadow: `0 0 60px ${active.glowColor}` }}
                    >
                        <Image
                            src={active.image}
                            alt={`Mineral ${active.name}`}
                            fill
                            className="object-cover transition-all duration-700 scale-105 hover:scale-110"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040B16] via-transparent to-transparent" />

                        {/* Badge */}
                        <div className="absolute top-5 left-5">
                            <div className={clsx(
                                'inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-black/40 border',
                                active.borderColor
                            )}>
                                <span className={clsx('font-display text-[1.4rem] font-bold leading-none', active.tagColor)}>
                                    {active.formula}
                                </span>
                                <span className="font-body text-[0.8rem] text-white/70 uppercase tracking-wider">
                                    {active.name}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div
                        className={clsx(
                            'relative rounded-3xl border p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm',
                            active.borderColor,
                            active.activeBg
                        )}
                        style={{ boxShadow: `inset 0 0 80px ${active.glowColor}20` }}
                    >
                        {/* Subtle glow blob */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                            style={{ background: `radial-gradient(circle, ${active.glowColor}, transparent 70%)` }}
                        />

                        <div className="relative z-10">
                            {/* Title */}
                            <div className="mb-6">
                                <div className={clsx('font-display text-[3rem] font-bold leading-none mb-1', active.tagColor)}>
                                    {active.name}
                                </div>
                                <div className="font-body text-[0.8rem] tracking-[0.2em] uppercase text-brand-silver/50">
                                    Elemento {active.formula} · Mineral marinho natural
                                </div>
                            </div>

                            {/* Headline */}
                            <h3 className="font-accent text-[1.3rem] italic text-white mb-4 leading-snug">
                                "{active.headline}"
                            </h3>

                            {/* Description */}
                            <p className="text-brand-silver text-[0.95rem] leading-relaxed mb-8">
                                {active.description}
                            </p>


                        </div>

                        {/* Nav dots */}
                        <div className="relative z-10 flex items-center gap-2 mt-8">
                            {minerals.map((m) => (
                                <button
                                    key={m.id}
                                    onClick={(e) => { e.stopPropagation(); setActiveId(m.id); }}
                                    className={clsx(
                                        'h-1.5 rounded-full transition-all duration-300',
                                        m.id === activeId ? `w-8 bg-gradient-to-r ${m.color}` : 'w-4 bg-white/20 hover:bg-white/40'
                                    )}
                                    aria-label={m.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none -mx-4 md:-mx-8 z-20">
                    <button 
                        onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        disabled={currentIndex === 0}
                        className={clsx(
                            "pointer-events-auto md:w-12 md:h-12 w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all",
                            currentIndex === 0 ? "opacity-0" : "hover:bg-white/10 hover:text-white hover:scale-110 hover:border-white/20"
                        )}
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); goNext(); }}
                        disabled={currentIndex === minerals.length - 1}
                        className={clsx(
                            "pointer-events-auto md:w-12 md:h-12 w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all",
                            currentIndex === minerals.length - 1 ? "opacity-0" : "hover:bg-white/10 hover:text-white hover:scale-110 hover:border-white/20"
                        )}
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
                
                {/* Swipe affordance Mobile */}
                <div className="text-center mt-[-20px] pb-4 flex md:hidden items-center justify-center gap-3 text-brand-silver/40 font-body text-[0.8rem] w-full">
                    <ChevronLeft className="w-4 h-4 opacity-70" />
                    Arraste para navegar
                    <ChevronRight className="w-4 h-4 opacity-70" />
                </div>
                </div>

                {/* Trace Elements */}
                <FadeIn delay={0.2}>
                    <div className="mt-16 text-center">
                        <div className="inline-flex flex-col items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-sky/40" />
                                <span className="font-body text-[0.75rem] uppercase tracking-[0.3em] text-brand-silver/50">
                                    E outros minerais traço
                                </span>
                                <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-sky/40" />
                            </div>

                            <div className="flex flex-wrap justify-center gap-2 max-w-[720px]">
                                {traceElements.map((el, i) => (
                                    <span
                                        key={i}
                                        className={clsx(
                                            'px-3.5 py-1.5 rounded-full text-[0.75rem] font-body border transition-all duration-300 hover:bg-white/5 hover:border-white/20',
                                            i === traceElements.length - 1
                                                ? 'border-brand-gold/40 text-brand-gold bg-brand-gold/5 font-semibold'
                                                : 'border-white/10 text-brand-silver/60'
                                        )}
                                    >
                                        {el}
                                    </span>
                                ))}
                            </div>

                            <p className="text-[0.85rem] text-brand-silver/60 max-w-[600px] mt-6">
                                Os resultados acima representam análises de laboratório especializado e oficial, creditado pelo INMETRO. LAUDO nº 2084/25.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            <style>{`
                @keyframes mineralFadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    )
}
