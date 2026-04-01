"use client"

import { useState, useRef, useEffect } from 'react'
import FadeIn from '../ui/FadeIn'
import { clsx } from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/lib/store/useCartStore'
import { useUIStore } from '@/lib/store/useUIStore'

const mockProducts = [
    // --- Culinário (Integral) ---
    { id: '101', name: 'Sal Perfeito Integral 250g', price: 26.00, weight: 'Rende até 60 dias para uma pessoa.', subtitle: 'O primeiro passo.', cpd: 'Menos de R$0,45 por dia.', group: 'Culinário', badge: null, highlight: null, image: '/images/products/culinario-premium.png' },
    { id: '102', name: 'Sal Perfeito Integral 500g', price: 39.50, weight: 'Rende 3 a 4 meses para duas pessoas.', subtitle: 'O favorito de quem já conhece.', cpd: 'Menos de R$0,45 por dia.', group: 'Culinário', badge: null, highlight: null, image: '/images/products/culinario-premium.png' },
    { id: '103', name: 'Sal Perfeito Integral 1kg', price: 62.00, weight: 'Rende 5 a 6 meses para uma família de 4.', subtitle: 'Para a casa inteira.', cpd: 'Menos de R$0,40 por dia.', group: 'Culinário', badge: null, highlight: null, image: '/images/products/culinario-premium.png' },
    { id: '104', name: 'Sal Perfeito Integral 2kg', price: 89.00, weight: 'Rende até 12 meses para uma família de 4.', subtitle: 'A escolha de quem já não abre mão.', cpd: 'Menos de R$0,25 por dia. O melhor custo por grama da linha.', group: 'Culinário', badge: 'Mais Vendido / Melhor Custo-Benefício', highlight: null, image: '/images/products/culinario-premium.png' },

    // --- Churrasco ---
    { id: '201', name: 'Sal de Churrasco 250g', price: 26.00, weight: 'Cristais maiores que distribuem o sabor sem dissolver antes do tempo.', subtitle: 'Para conhecer. O sal que respeita a carne.', cpd: '', group: 'Churrasco', badge: null, highlight: null, image: '/images/products/churrasco-premium.png' },
    { id: '202', name: 'Sal de Churrasco 500g', price: 39.50, weight: 'O meio termo ideal para churrasco.', subtitle: '', cpd: '', group: 'Churrasco', badge: 'Recomendado', highlight: 'Granulação Fina', image: '/images/products/churrasco-premium.png' },
    { id: '203', name: 'Sal de Churrasco 1kg', price: 62.00, weight: 'Sabor constante para toda a família.', subtitle: '', cpd: '', group: 'Churrasco', badge: null, highlight: null, image: '/images/products/churrasco-premium.png' },
    { id: '204', name: 'Sal de Churrasco 2kg', price: 89.00, weight: 'Economia de até 35% por grama em relação ao 250g.', subtitle: 'Para quem não quer ficar sem. O companheiro de toda grelha.', cpd: '', group: 'Churrasco', badge: 'Popular', highlight: null, image: '/images/products/churrasco-premium.png' },

    // --- Endurance ---
    { id: '301', name: 'Endurance - Eletrólitos do Atlântico', price: 32.00, weight: 'Sem corante. Sem açúcar. Sem sabor artificial. Apenas o oceano trabalhando por você.', subtitle: 'Reposição mineral natural para treino e competição.', cpd: 'Novo 250g', group: 'Endurance', badge: 'Novo', highlight: null, image: '/images/products/endurance.png' },
]

const TABS = ['Culinário', 'Churrasco', 'Endurance']

export default function Products() {
    const { addItem } = useCartStore()
    const { toggleCart } = useUIStore()
    const [activeTab, setActiveTab] = useState(TABS[0])
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Drag-to-scroll states
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [hasMoved, setHasMoved] = useState(false)

    const handleAddToCart = (product: any) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        })
        toggleCart()
    }

    const formatPrice = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value).replace('R$', '').trim()
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current
            const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth * 0.85
            scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
        }
    }

    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return
        setIsDragging(true)
        setHasMoved(false)
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
        setScrollLeft(scrollContainerRef.current.scrollLeft)
    }

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return
        e.preventDefault()
        const x = e.pageX - scrollContainerRef.current.offsetLeft
        const walk = (x - startX) * 2

        if (Math.abs(walk) > 5) setHasMoved(true)

        scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }

    const onMouseUp = () => setIsDragging(false)
    const onMouseLeave = () => setIsDragging(false)

    const scrollToTab = (tab: string) => {
        setActiveTab(tab)
        const first = mockProducts.find(p => p.group === tab)
        if (first && scrollContainerRef.current) {
            const el = document.getElementById(`product-${first.id}`)
            const container = scrollContainerRef.current
            if (el) {
                const scrollTarget = el.offsetLeft - container.offsetLeft - 16
                container.scrollTo({ left: scrollTarget, behavior: 'smooth' })
            }
        }
    }

    const handleScrollEvent = () => {
        if (!scrollContainerRef.current) return
        const container = scrollContainerRef.current

        let currentTab = activeTab
        let minDistance = Infinity

        TABS.forEach(tab => {
            const first = mockProducts.find(p => p.group === tab)
            if (first) {
                const el = document.getElementById(`product-${first.id}`)
                if (el) {
                    const offset = el.offsetLeft - container.offsetLeft
                    const distance = Math.abs(offset - container.scrollLeft)
                    if (distance < minDistance) {
                        minDistance = distance
                        currentTab = tab
                    }
                }
            }
        })

        if (currentTab !== activeTab) {
            setActiveTab(currentTab)
        }
    }

    const activeProducts = mockProducts

    return (
        <section id="produtos" className="bg-[radial-gradient(ellipse_at_top_center,#0a1e3d_0%,var(--color-brand-bg)_60%)] py-20 overflow-hidden">
            <div className="container-custom">
                <FadeIn>
                    <span className="section-label !text-center">NOSSA LINHA COMPLETA</span>
                    <h2 className="mb-12 text-center text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">
                        A linha completa do Sal Perfeito<br />
                        <span className="block text-[1.2rem] md:text-[1.5rem] font-body text-brand-silver font-normal mt-2 lowercase">Para cada momento, cada mesa, cada objetivo.</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
                        {TABS.map((tab) => {
                            const isActive = activeTab === tab
                            return (
                                <button
                                    key={tab}
                                    onClick={() => scrollToTab(tab)}
                                    className={clsx(
                                        "relative px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md",
                                        isActive
                                            ? "text-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/20 scale-105"
                                            : "text-white/50 bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-product-tab"
                                            className="absolute inset-0 rounded-full border border-brand-sky/30 shadow-[inset_0_0_15px_rgba(56,189,248,0.2)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab}</span>
                                </button>
                            )
                        })}
                    </div>
                </FadeIn>

            </div>

            <div className="w-full mt-12 overflow-hidden px-0">
                <div className="relative group">
                    {/* Desktop Arrows */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute -left-4 xl:-left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 hover:border-white/30 transition-all z-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                        aria-label="Scroll Left"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute -right-4 xl:-right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:scale-110 hover:border-white/30 transition-all z-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                        aria-label="Scroll Right"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>

                    <div
                        ref={scrollContainerRef}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseLeave}
                        onScroll={handleScrollEvent}
                        className={clsx(
                            "flex overflow-x-auto gap-5 pb-12 pt-4 px-6 md:px-[max(40px,calc((100vw-1200px)/2))] snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative",
                            isDragging ? "cursor-grabbing snap-none scroll-auto" : "cursor-grab snap-proximity scroll-smooth"
                        )}
                    >
                        <AnimatePresence mode="wait">
                            {activeProducts.map((product, index) => (
                                <motion.div
                                    id={`product-${product.id}`}
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                                    className="shrink-0 snap-center w-[280px] sm:w-[300px] md:w-[400px]"
                                >
                                    <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden backdrop-blur-md transition-all duration-500 relative flex flex-col h-full hover:bg-white/[0.08] hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:border-white/10 group">

                                        {product.badge && (
                                            <span className="absolute top-4 right-4 bg-gradient-to-br from-brand-blue to-brand-sky text-white text-[0.65rem] font-bold tracking-[0.05em] px-3 py-1 rounded-full z-30 shadow-lg">
                                                {product.badge}
                                            </span>
                                        )}

                                        <div className="w-full aspect-[4/3] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                                            {/* Studio Glow Background */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(42,127,255,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            {product.image ? (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    draggable={false}
                                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 select-none relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                                                />
                                            ) : (
                                                <div className="font-display text-[1.4rem] text-brand-sky relative z-10 my-auto drop-shadow-lg">QUANQTON</div>
                                            )}
                                        </div>

                                        {product.highlight && (
                                            <div className="bg-gradient-to-r from-brand-blue/80 to-brand-sky/80 text-white text-[0.65rem] font-bold px-3 py-1.5 text-center relative z-20">
                                                {product.highlight}
                                            </div>
                                        )}

                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="font-body font-extrabold text-white mb-2 leading-tight text-lg md:text-xl group-hover:text-brand-sky transition-colors duration-300">{product.name}</div>
                                            {product.subtitle && <div className="text-[0.75rem] md:text-[0.9rem] text-brand-sky font-semibold mb-3 leading-snug tracking-wide">{product.subtitle}</div>}
                                            <div className="text-[0.75rem] text-brand-silver/50 mb-3 leading-snug">{product.weight}</div>
                                            {product.cpd && <div className="text-[0.75rem] text-brand-gold mt-auto font-bold mb-6 italic tracking-tight">{product.cpd}</div>}
                                            <div className="font-display text-[1.8rem] md:text-[2.2rem] text-white mb-8 mt-1 flex items-baseline gap-1">
                                                <span className="text-[0.9rem] text-brand-silver/40 font-body font-normal">R$</span>
                                                {formatPrice(product.price)}
                                            </div>

                                            <button
                                                onClick={(e) => {
                                                    if (hasMoved) {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        return;
                                                    }
                                                    handleAddToCart(product);
                                                }}
                                                className="w-full p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-[0.7rem] uppercase font-bold tracking-[0.08em] transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] mt-auto"
                                            >
                                                Comprar Agora
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
