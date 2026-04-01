'use client'

import { useRef } from 'react'
import FadeIn from '../ui/FadeIn'

const testimonials = [
    { id: 1, name: "Priscilla C.", location: "Cliente QuanQton", time: "Usa todos os dias", text: "Uso o sal Quanqton todos os dias e minha pressão arterial está absolutamente controlada sem o remédio. Sem contar com o sabor extraordinário que traz aos alimentos - sabor de verdade.", initial: "P" },
    { id: 2, name: "Cliente", location: "QuanQton", time: "Uso Diário", text: "O sal simplesmente curou algum problema no meu sistema digestivo. Eu tinha azia toda noite. Comecei a usar uma pitada toda manhã antes do desjejum e o alívio foi imediato. Esse sal mudou minha vida.", initial: "C" },
    { id: 3, name: "Cliente", location: "QuanQton", time: "Melhora no sono", text: "Minhas dores de endometriose sumiram. Não sinto mais cólicas, meu fluxo de 9 dias está em 5 dias. Minha mente está mais calma, sou outra pessoa. O sono está muito bom - durmo a noite toda.", initial: "C" },
    { id: 4, name: "Mônica P., 55 anos", location: "Cliente há 5 anos", time: "Uso prolongado", text: "Sempre tive muita retenção de água - meus tornozelos eram gigantes. Após a utilização do sal meus tornozelos apareceram. Minha pressão se regularizou. Este produto é uma bênção na minha vida.", initial: "M" },
    { id: 5, name: "Crhistiano A.", location: "Cliente há 4 anos", time: "Uso Familiar", text: "Minha família toda usa este sal há 4 anos - na alimentação e dissolvido na água com limão. Até nossos pets usam na água que tomam e notamos que o consumo de ração diminuiu bastante.", initial: "C" },
    { id: 6, name: "Cliente", location: "QuanQton", time: "Uso Diário", text: "Controle de pressão arterial, eliminei a retenção de líquidos, sensação de inchaço, energia nas situações de ficar muito tempo sem poder me alimentar, redução nas dores das articulações - e com o passar do tempo fui descobrindo outros benefícios. Só tenho a agradecer.", initial: "C" },
];

export default function Testimonials() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current
            const scrollAmount = clientWidth > 768 ? clientWidth / 3 : 300
            scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <section id="depoimentos" className="relative bg-brand-bg overflow-hidden py-20 md:py-32 border-t border-white/5">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-brand-sky/20 to-transparent"></div>
            
            <div className="container-custom relative z-10 mb-12">
                <FadeIn>
                    <h2 className="mb-0 text-center">O que acontece quando você experimenta sal de verdade</h2>
                </FadeIn>
            </div>

            <div className="relative z-10 w-full overflow-hidden">
                <div className="relative group">
                    {/* Desktop Arrows */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:scale-110 hover:border-white/40 transition-all z-20"
                        aria-label="Scroll Left"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 items-center justify-center text-white hover:bg-white/20 hover:scale-110 hover:border-white/40 transition-all z-20"
                        aria-label="Scroll Right"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>

                    <div 
                        ref={scrollContainerRef} 
                        className="flex overflow-x-auto gap-4 px-6 md:px-[max(40px,calc((100vw-1200px)/2))] pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {testimonials.map((t, index) => (
                            <FadeIn key={t.id} delay={Math.min(index * 0.05, 0.5)} className="shrink-0 snap-center w-[280px] md:w-[400px]">
                                <div className="relative h-full">
                                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 flex flex-col gap-5 h-full relative overflow-hidden shadow-2xl">
                                        
                                        <div className="absolute -top-2 -right-2 opacity-[0.05] text-white">
                                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M14.017 21L14.017 18C14.017 15.2386 16.2556 13 19.017 13V11C15.151 11 12.017 14.134 12.017 18V21H14.017ZM6.017 21L6.017 18C6.017 15.2386 8.25558 13 11.017 13V11C7.151 11 4.017 14.134 4.017 18V21H6.017Z" />
                                            </svg>
                                        </div>

                                        <div className="text-brand-gold text-[0.8rem] md:text-[1rem] tracking-[2px]">★★★★★</div>
                                        
                                        <p className="font-accent text-[1rem] md:text-[1.15rem] italic text-white/90 flex-1 leading-relaxed relative z-10">
                                            "{t.text}"
                                        </p>

                                        <div className="flex items-center gap-4 mt-2 relative z-10 border-t border-white/5 pt-4">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-brand-navy flex items-center justify-center font-bold text-[0.9rem] md:text-[1.2rem] text-brand-sky border border-white/10">
                                                {t.initial}
                                            </div>
                                            <div>
                                                <div className="font-bold text-[0.85rem] md:text-[1rem] text-white">{t.name}</div>
                                                <div className="text-[0.65rem] md:text-[0.75rem] text-brand-silver/60 uppercase tracking-widest">{t.location}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <FadeIn delay={0.3} className="text-center text-brand-silver/40 text-[0.75rem] flex md:hidden items-center justify-center gap-2">
                    <span>←</span> deslize para ler <span>→</span>
                </FadeIn>

                <div className="container-custom mt-8">
                    <p className="text-[0.6rem] md:text-[0.7rem] text-brand-silver/30 text-center uppercase tracking-widest leading-relaxed">
                        * Resultados podem variar. Este produto é um alimento e não substitui acompanhamento médico.
                    </p>
                </div>
            </div>
        </section>
    )
}
