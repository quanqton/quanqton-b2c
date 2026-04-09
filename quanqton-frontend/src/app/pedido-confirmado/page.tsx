"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PedidoConfirmado() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="bg-[#07131f] min-h-screen text-white font-sans flex flex-col">
            <Header />
            <main className="flex-1 container-custom pt-32 pb-20 flex flex-col items-center justify-center text-center">
                
                <div className={`transition-all duration-1000 transform ${mounted ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10'}`}>
                    <div className="w-24 h-24 rounded-full bg-[#00D4FF]/20 border-2 border-[#00D4FF] mx-auto mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(0,212,255,0.3)] relative">
                        {/* Confetti marks mock */}
                        <div className="absolute -top-4 -left-4 w-2 h-2 bg-[#00D4FF] rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                        <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                        <svg className="w-12 h-12 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-4">Pedido Confirmado!</h1>
                <p className="text-lg text-white/60 mb-8 max-w-lg">
                    Sua compra foi aprovada e seu pacote de saúde já começou a ser preparado.
                </p>

                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-10 max-w-xl w-full mb-10 text-left relative overflow-hidden">
                    <div className="flex justify-between border-b border-white/10 pb-4 mb-6">
                        <span className="text-white/50 text-[13px] uppercase tracking-wide">Número do pedido:</span>
                        <span className="font-bold text-[#00D4FF]">#QT-29402</span>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#00D4FF]"></div>
                        <h3 className="text-[#00D4FF] font-bold text-[12px] mb-2 uppercase tracking-widest flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                            Frete Bonificado Garantido
                        </h3>
                        <p className="text-[13px] text-white/80 leading-relaxed font-medium">
                            O valor pago pelo seu frete foi revertido em produto e será enviado junto na sua caixa. Sem desperdícios, apenas saúde extra.
                        </p>
                    </div>

                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-[12px]">Próximos passos</h4>
                    <ul className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-white/10">
                        <li className="flex items-start gap-4 relative z-10">
                            <div className="w-6 h-6 rounded-full bg-[#00D4FF] flex items-center justify-center flex-shrink-0 text-[#07131f]">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div>
                                <p className="text-[14px] font-bold leading-none mb-1">Pagamento Aprovado</p>
                                <p className="text-[12px] text-white/50">E-mail de confirmação enviado</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 relative z-10">
                            <div className="w-6 h-6 rounded-full bg-[#07131f] border-2 border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[10px] text-white/50">2</span>
                            </div>
                            <div>
                                <p className="text-[14px] font-bold leading-none mb-1 text-white/70">Preparação e Envio</p>
                                <p className="text-[12px] text-white/40">Sua caixa será despachada em até 2 dias úteis</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 relative z-10">
                            <div className="w-6 h-6 rounded-full bg-[#07131f] border-2 border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-[10px] text-white/50">3</span>
                            </div>
                            <div>
                                <p className="text-[14px] font-bold leading-none mb-1 text-white/70">Rastreamento</p>
                                <p className="text-[12px] text-white/40">Código enviado automaticamente via WhatsApp</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
                    <Link href="/minha-conta" className="flex-1 bg-white/5 hover:bg-white/10 py-4 rounded-lg text-center font-bold text-[12px] tracking-widest transition-colors border border-white/10 uppercase">
                        Ver meu pedido
                    </Link>
                    <Link href="/" className="flex-1 bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#07131f] py-4 rounded-lg text-center font-bold text-[12px] tracking-widest transition-colors uppercase">
                        Voltar ao início
                    </Link>
                </div>
                
                <div className="mt-8 text-center text-white/50 text-[12px]">
                    <p className="flex items-center justify-center gap-2">
                        Dúvidas? <a href="#" className="text-[#00D4FF] hover:underline flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>Fale pelo WhatsApp</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
