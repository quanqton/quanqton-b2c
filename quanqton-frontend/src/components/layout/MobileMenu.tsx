"use client"

import Link from 'next/link'
import { clsx } from 'clsx'
import { useUIStore } from '@/lib/store/useUIStore'

export default function MobileMenu() {
    const { isMobileMenuOpen, closeMobileMenu } = useUIStore()

    return (
        <>
            <div
                className={clsx(
                    "fixed inset-0 bg-black/60 z-[998] transition-opacity duration-300 lg:hidden",
                    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />
            <nav
                className={clsx(
                    "fixed top-0 right-0 w-[min(320px,80vw)] h-[100dvh] bg-brand-navy pt-20 px-8 pb-8 flex flex-col gap-2 z-[999] shadow-[-4px_0_32px_rgba(0,0,0,0.5)] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <Link href="#historia" onClick={closeMobileMenu} className="py-3.5 text-lg border-b border-white/10 text-brand-silver transition-colors hover:text-brand-sky">Nossa Origem</Link>
                <Link href="#problema" onClick={closeMobileMenu} className="py-3.5 text-lg border-b border-white/10 text-brand-silver transition-colors hover:text-brand-sky">O Problema</Link>
                <Link href="#beneficios" onClick={closeMobileMenu} className="py-3.5 text-lg border-b border-white/10 text-brand-silver transition-colors hover:text-brand-sky">Por que QuanQton</Link>
                <Link href="#produtos" onClick={closeMobileMenu} className="py-3.5 text-lg border-b border-white/10 text-brand-silver transition-colors hover:text-brand-sky">Produtos</Link>
                <Link href="#quero-vender" onClick={closeMobileMenu} className="py-3.5 text-lg border-b border-white/10 text-brand-silver transition-colors hover:text-brand-sky">Para Empresas</Link>
                <Link href="#faq" onClick={closeMobileMenu} className="py-3.5 text-lg border-b border-white/10 text-brand-silver transition-colors hover:text-brand-sky">Dúvidas Frequentes</Link>
                <Link href="#produtos" onClick={closeMobileMenu} className="btn-primary mt-4 py-3 text-center">Comprar Agora</Link>
            </nav>
        </>
    )
}
