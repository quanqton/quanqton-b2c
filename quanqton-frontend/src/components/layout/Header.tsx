"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useUIStore } from '@/lib/store/useUIStore'

const leftLinks = [
    { name: 'Nossa Origem', id: 'historia' },
    { name: 'O Problema', id: 'problema' },
    { name: 'Por que QuanQton', id: 'beneficios' },
]

const rightLinks = [
    { name: 'Produtos', id: 'produtos' },
    { name: 'Para Empresas', id: 'quero-vender' },
    { name: 'Dúvidas Frequentes', id: 'faq' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const { toggleCart, isMobileMenuOpen, toggleMobileMenu } = useUIStore()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const sections = ['hero', 'historia', 'problema', 'beneficios', 'quero-vender', 'produtos', 'depoimentos', 'faq']
            let current = ''

            if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection('faq')
                return
            }

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= window.innerHeight / 2.5 && rect.bottom >= window.innerHeight / 2.5) {
                        current = section
                    }
                }
            }
            if (current) {
                setActiveSection(current)
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 px-4',
                scrolled ? 'pt-0' : 'pt-10'  // Fica mais colado (zero padding) ao rolar
            )}
        >
            <div className="relative w-full max-w-[1000px] flex items-end h-[90px] mb-2 px-2 xl:px-0">

                {/* --- 1. SEAMLESS GLASS SHAPE --- */}

                {/* 3D Parent Container - Traces everything below to cast a beautiful outer glass shadow */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-10">

                    {/* Custom Shadow Layer - Replaces CSS drop-shadow to prevent breaking the backdrop-blur filter */}
                    <div className="absolute inset-0 w-full h-full translate-y-[12px] blur-[12px] z-[-1]">
                        <div className="w-full h-full bg-black/15" style={{ WebkitMaskImage: 'url(#glass-mask)', maskImage: 'url(#glass-mask)' }} />
                    </div>

                    {/* A. The Single Unified Glass Layer (Eliminates all overlapping seams) */}
                    <div
                        className={clsx(
                            "absolute inset-0 w-full h-full backdrop-blur-[24px] transition-colors duration-500",
                            scrolled ? "bg-[#07131f]/95" : "bg-[#07131f]"
                        )}
                        style={{ WebkitMaskImage: 'url(#glass-mask)', maskImage: 'url(#glass-mask)' }}
                    />

                    {/* B. The SVG Mask Definition */}
                    <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <mask id="glass-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
                                {/* Left Wing */}
                                <rect x="0" y="38" width="55%" height="52" rx="26" fill="white" />
                                {/* Right Wing */}
                                <rect x="45%" y="38" width="55%" height="52" rx="26" fill="white" />
                                {/* Center Notch */}
                                <svg x="50%" y="0" overflow="visible">
                                    <path d="M -75 90 L -75 38 C -50 38, -30 2, 0 2 C 30 2, 50 38, 75 38 L 75 90 Z" fill="white" />
                                </svg>
                            </mask>
                        </defs>
                    </svg>

                    {/* C. The 3D Top Border Highlight Strokes */}
                    <div className="absolute inset-0 w-full h-full">
                        {/* Left Wing Border */}
                        <div className="absolute left-0 bottom-0 h-[52px] rounded-l-full overflow-hidden" style={{ width: "calc(50% - 74px)" }}>
                            {/* Inner volumetric light curve */}
                            <div className="absolute inset-0 rounded-l-full border-t-[3px] border-l-[3px] border-white/40 blur-[1px]" />
                            {/* Sharp crisp edge highlight */}
                            <div className="absolute inset-0 rounded-l-full border-t border-l border-white/60" />
                            {/* Bottom physical depth shadow */}
                            <div className="absolute inset-0 rounded-l-full border-b-[2px] border-black/10 blur-[1px]" />
                        </div>

                        {/* Center Notch Border */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[150px] h-[90px] overflow-visible">
                            <svg width="150" height="90" viewBox="0 0 150 90" className="absolute top-0 left-0 overflow-visible">
                                {/* Inner volumetric light curve */}
                                <path d="M 0 38 C 25 38, 45 2, 75 2 C 105 2, 125 38, 150 38" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="3" filter="blur(1px)" />
                                {/* Sharp crisp edge highlight */}
                                <path d="M 0 38 C 25 38, 45 2, 75 2 C 105 2, 125 38, 150 38" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                            </svg>
                        </div>

                        {/* Right Border */}
                        <div className="absolute right-0 bottom-0 h-[52px] rounded-r-full overflow-hidden" style={{ width: "calc(50% - 74px)" }}>
                            {/* Inner volumetric light curve */}
                            <div className="absolute inset-0 rounded-r-full border-t-[3px] border-r-[3px] border-white/40 blur-[1px]" />
                            {/* Sharp crisp edge highlight */}
                            <div className="absolute inset-0 rounded-r-full border-t border-r border-white/60" />
                            {/* Bottom physical depth shadow */}
                            <div className="absolute inset-0 rounded-r-full border-b-[2px] border-black/10 blur-[1px]" />
                        </div>
                    </div>
                </div>

                {/* --- 2. FOREGROUND CONTENT & LINKS --- */}
                <div className="absolute inset-0 w-full h-full flex flex-row items-end pointer-events-none z-20">

                    {/* Left Nav */}
                    <div className="flex-1 h-[52px] flex items-center pl-6 lg:pl-10 pointer-events-auto">
                        <nav className="hidden lg:flex items-center gap-2 lg:gap-3">
                            {leftLinks.map(link => {
                                const isActive = activeSection === link.id
                                return (
                                    <Link key={link.id} href={`#${link.id}`} className="relative px-5 py-2.5 flex items-center justify-center group">
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-nav-pill"
                                                className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                            />
                                        )}
                                        <span className={clsx(
                                            "relative z-10 text-[0.65rem] font-body font-bold uppercase tracking-[0.2em] transition-colors",
                                            isActive ? "text-white" : "text-[#E0E0E0] group-hover:text-white"
                                        )}>
                                            {link.name}
                                        </span>
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    {/* Center Spacer to keep flex items separated */}
                    <div className="w-[180px] flex-shrink-0 h-[90px] pointer-events-none"></div>

                    {/* Center Logo Area - EXACT absolute positioning to perfectly match the SVG mask */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[180px] h-[90px] pointer-events-auto">
                        <Link href="#hero" className="absolute left-1/2 -translate-x-1/2 top-[4px] w-[82px] h-[82px] flex items-center justify-center group">
                            <img src="/LOGO.png" alt="QuanQton" className="w-full h-full object-contain drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-all duration-300" />
                        </Link>
                    </div>

                    {/* Right Nav */}
                    <div className="flex-1 h-[52px] flex items-center justify-end pr-4 lg:pr-6 pointer-events-auto">
                        <div className="hidden lg:flex items-center gap-2 lg:gap-3 pr-4">
                            {rightLinks.map(link => {
                                const isActive = activeSection === link.id
                                return (
                                    <Link key={link.id} href={`#${link.id}`} className="relative px-5 py-2.5 flex items-center justify-center group">
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-nav-pill"
                                                className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                            />
                                        )}
                                        <span className={clsx(
                                            "relative z-10 text-[0.65rem] font-body font-bold uppercase tracking-[0.2em] transition-colors",
                                            isActive ? "text-white" : "text-[#E0E0E0] group-hover:text-white"
                                        )}>
                                            {link.name}
                                        </span>
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Floating Action Buttons (Auth & Cart) */}
                        <div className="hidden lg:flex absolute -right-[60px] xl:-right-[80px] top-[64px] -translate-y-1/2 flex-col items-center group pointer-events-auto">
                            {/* User Icon (Link to Login) */}
                            <Link
                                href="/login"
                                className="w-[42px] h-[42px] rounded-full backdrop-blur-[24px] bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.2)] relative z-20"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </Link>

                            {/* Cart Icon (Reveals below User on hover) */}
                            <div className="absolute top-[38px] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-[-15px] group-hover:translate-y-0 z-10 w-full flex justify-center">
                                <button
                                    onClick={toggleCart}
                                    className="w-[38px] h-[38px] rounded-full backdrop-blur-[24px] bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="8" cy="21" r="1" />
                                        <circle cx="19" cy="21" r="1" />
                                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Icon */}
                        <button
                            className="lg:hidden flex flex-col gap-[4px] w-7 p-1 justify-center relative pointer-events-auto ml-2"
                            onClick={toggleMobileMenu}
                            aria-label="Menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className={clsx("block h-[2px] w-full bg-white rounded-full transition-transform", isMobileMenuOpen && "translate-y-[6px] rotate-45")} />
                            <span className={clsx("block h-[2px] w-full bg-white rounded-full transition-opacity", isMobileMenuOpen && "opacity-0")} />
                            <span className={clsx("block h-[2px] w-full bg-white rounded-full transition-transform", isMobileMenuOpen && "-translate-y-[6px] -rotate-45")} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
