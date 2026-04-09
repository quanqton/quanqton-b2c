"use client"

import { useUIStore } from '@/lib/store/useUIStore'
import { useCartStore } from '@/lib/store/useCartStore'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { clsx } from 'clsx'

export default function CartDrawer() {
    const { isCartOpen, closeCart } = useUIStore()
    const router = useRouter()
    const { items, removeItem, updateQuantity, getCartTotal } = useCartStore()

    const [isCheckingOut, setIsCheckingOut] = useState(false)

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

    const handleCheckout = () => {
        if (items.length === 0) return
        setIsCheckingOut(true)

        // Mock checkout redirection
        router.push('/checkout')
        closeCart()
    }

    return (
        <>
            <div
                className={clsx(
                    "fixed inset-0 bg-black/60 z-[2000] transition-opacity duration-300",
                    isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={closeCart}
            />
            <aside
                className={clsx(
                    "fixed top-0 right-0 w-[min(400px,100vw)] h-[100dvh] bg-brand-bg border-l border-white/10 z-[2001] flex flex-col shadow-[-12px_0_48px_rgba(0,0,0,0.5)] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-brand-navy/50 backdrop-blur-sm">
                    <h3 className="font-display text-xl tracking-wider text-white">🛒 Seu Carrinho</h3>
                    <button onClick={closeCart} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-brand-silver hover:bg-white/10 hover:text-white transition-colors">✕</button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center opacity-70">
                            <div className="text-4xl mb-4">🧂</div>
                            <p className="text-brand-silver">Seu carrinho está vazio.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10 relative group">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h4 className="font-body font-bold text-white leading-tight">{item.name}</h4>
                                        <span className="font-display font-medium text-brand-sky text-lg">{formatCurrency(item.price)}</span>
                                        <div className="flex items-center gap-2 mt-2 bg-brand-navy/50 w-fit rounded border border-white/10">
                                            <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">-</button>
                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">+</button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeItem(item.id)} className="absolute top-2 right-2 text-brand-danger/70 p-2 hover:text-brand-danger hover:bg-brand-danger/10 rounded-full transition-colors opacity-0 group-hover:opacity-100" aria-label="Remover item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" /></svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-6 bg-[#020609] border-t border-white/5 pb-8 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-brand-silver">Subtotal</span>
                        <strong className="font-display text-2xl text-white tracking-wider">{formatCurrency(getCartTotal())}</strong>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="p-3 mb-1 mt-1 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#00D4FF]"></div>
                            <p className="text-[#00D4FF] text-[10px] font-bold mb-0.5 uppercase tracking-wide">📦 Frete Bonificado</p>
                            <p className="text-white/70 text-[11px] leading-tight flex items-start gap-1">
                                O valor do seu frete volta na caixa em produto!
                            </p>
                        </div>
                        <button
                            onClick={handleCheckout}
                            disabled={items.length === 0 || isCheckingOut}
                            className="btn-primary w-full py-4 text-[1.05rem] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isCheckingOut ? 'Redirecionando...' : 'Finalizar Compra →'}
                        </button>
                        <button onClick={closeCart} className="btn-outline w-full py-3 text-sm text-brand-silver border-transparent hover:border-white/20 hover:text-white hover:bg-white/5">← Continuar Comprando</button>
                    </div>
                </div>
            </aside>
        </>
    )
}
