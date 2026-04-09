"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function RastreamentoPage() {
    const [codigo, setCodigo] = useState('')
    const [loading, setLoading] = useState(false)
    const [rastreioEncontrado, setRastreioEncontrado] = useState(false)

    const handleBuscar = (e: React.FormEvent) => {
        e.preventDefault()
        if (!codigo) return
        
        setLoading(true)
        setRastreioEncontrado(false)
        
        // Simulação de busca
        setTimeout(() => {
            setLoading(false)
            setRastreioEncontrado(true)
        }, 1500)
    }

    return (
        <div className="bg-[#07131f] min-h-screen text-white font-sans flex flex-col">
            <Header />
            
            <main className="flex-1 container-custom pt-32 pb-24 md:pt-40 flex flex-col items-center">
                <div className="w-full max-w-2xl">
                    
                    <div className="text-center mb-10">
                        <span className="text-[#00D4FF] font-bold text-[12px] uppercase tracking-widest mb-2 block">Acompanhe sua entrega</span>
                        <h1 className="text-3xl md:text-5xl font-display font-bold">Rastrear Pedido</h1>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-10 mb-8 shadow-2xl">
                        <form onSubmit={handleBuscar} className="flex flex-col sm:flex-row gap-3">
                            <input 
                                type="text"
                                placeholder="Digite o código de rastreio ou pedido (ex: QT-10928)"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                className="flex-1 bg-white/[0.06] border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-[#00D4FF] font-medium text-[14px] placeholder:text-white/30 placeholder:font-normal uppercase transition-colors"
                            />
                            <button 
                                type="submit"
                                disabled={loading || !codigo}
                                className="bg-[#00D4FF] text-[#07131f] font-bold uppercase text-[13px] tracking-widest px-8 py-4 rounded-lg hover:bg-[#00D4FF]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 text-[#07131f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : "BUSCAR"}
                            </button>
                        </form>
                        <p className="text-white/40 text-[12px] mt-4 text-center sm:text-left">
                            O código de rastreamento é enviado para o seu e-mail e WhatsApp assim que o pedido é despachado.
                        </p>
                    </div>

                    {rastreioEncontrado && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden animate-[fadeIn_0.5s_ease-out]">
                            <div className="bg-white/5 border-b border-white/10 p-6 flex justify-between items-center">
                                <div>
                                    <p className="text-white/50 text-[12px] uppercase tracking-wider mb-1">Rastreio</p>
                                    <p className="font-bold text-[16px] uppercase">{codigo}</p>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-[11px] font-bold uppercase tracking-widest">
                                        Em Trânsito
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6 md:p-10">
                                <div className="relative border-l-2 border-white/10 ml-3 md:ml-4 space-y-8">
                                    
                                    {/* Entregue (Futuro) */}
                                    <div className="relative pl-8">
                                        <div className="absolute w-6 h-6 rounded-full bg-[#07131f] border-2 border-white/20 -left-[13px] top-0 flex items-center justify-center"></div>
                                        <h3 className="font-bold text-white/50">Objeto Entregue</h3>
                                    </div>
                                    
                                    {/* Em rota */}
                                    <div className="relative pl-8">
                                        <div className="absolute w-8 h-8 rounded-full bg-[#00D4FF]/20 border-2 border-[#00D4FF] -left-[17px] -top-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                                            <div className="w-2.5 h-2.5 bg-[#00D4FF] rounded-full animate-pulse"></div>
                                        </div>
                                        <h3 className="font-bold text-[#00D4FF] text-[16px]">Objeto em rota de entrega</h3>
                                        <p className="text-white/60 text-[13px] mt-1">A caminho do seu endereço</p>
                                        <span className="inline-block text-white/40 text-[11px] mt-2 bg-white/5 px-2 py-0.5 rounded">Hoje às 08:42</span>
                                    </div>

                                    {/* Transporte */}
                                    <div className="relative pl-8">
                                        <div className="absolute w-6 h-6 rounded-full bg-[#07131f] border-2 border-[#00D4FF] -left-[13px] top-0 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full"></div>
                                        </div>
                                        <h3 className="font-bold text-white">Objeto em transferência</h3>
                                        <p className="text-white/60 text-[13px] mt-1">De Unidade de Tratamento em São Paulo / SP para Unidade de Distribuição local</p>
                                        <span className="inline-block text-white/40 text-[11px] mt-2 bg-white/5 px-2 py-0.5 rounded">Ontem às 15:30</span>
                                    </div>

                                    {/* Postado */}
                                    <div className="relative pl-8">
                                        <div className="absolute w-6 h-6 rounded-full bg-[#07131f] border-2 border-[#00D4FF] -left-[13px] top-0 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full"></div>
                                        </div>
                                        <h3 className="font-bold text-white">Objeto postado</h3>
                                        <p className="text-white/60 text-[13px] mt-1">Objeto recebido pelos Correios / Transportadora</p>
                                        <span className="inline-block text-white/40 text-[11px] mt-2 bg-white/5 px-2 py-0.5 rounded">Há 2 dias às 11:25</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </main>

            <Footer />
        </div>
    )
}
