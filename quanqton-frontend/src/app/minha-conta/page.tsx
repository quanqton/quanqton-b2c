"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function MinhaConta() {
    const [activeTab, setActiveTab] = useState('pedidos')
    const user = { name: "Cliente QuanQton", email: "cliente@quanqton.com.br", initial: "C", phone: "(11) 99999-9999" }

    const tabs = [
        { id: 'pedidos', label: 'Meus Pedidos' },
        { id: 'dados', label: 'Meus Dados' },
        { id: 'enderecos', label: 'Endereços' },
        { id: 'senha', label: 'Senha' },
    ]

    return (
        <div className="bg-[#07131f] min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container-custom pt-32 pb-20 flex flex-col lg:flex-row gap-8 text-white font-sans">
                {/* Sidebar */}
                <aside className="w-full lg:w-[240px] flex-shrink-0">
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 flex items-center justify-center border border-[#00D4FF]/40 mb-4">
                            <span className="text-[#00D4FF] text-xl font-bold">{user.initial}</span>
                        </div>
                        <h2 className="text-white font-bold text-[15px]">{user.name}</h2>
                        <p className="text-white/50 text-[12px] mb-6">{user.email}</p>
                        
                        <div className="w-full h-px bg-white/5 mb-6"></div>
                        
                        <nav className="flex flex-col w-full gap-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-left px-4 py-2.5 rounded-lg text-[14px] transition-colors ${
                                        activeTab === tab.id 
                                        ? 'bg-[#00D4FF]/10 text-[#00D4FF] font-medium' 
                                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                            <Link href="/login" className="text-left px-4 py-2.5 rounded-lg text-[14px] text-[#ff5050]/80 hover:bg-[#ff5050]/10 hover:text-[#ff5050] transition-colors mt-4 block">
                                Sair
                            </Link>
                        </nav>
                    </div>
                </aside>
                
                {/* Content */}
                <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 lg:p-10">
                    {activeTab === 'pedidos' && (
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-6">Meus Pedidos</h2>
                            <div className="text-center py-16 bg-white/[0.01] rounded-xl border border-white/5 hidden">
                                <p className="text-white/50 mb-4">Você ainda não fez nenhum pedido.</p>
                                <Link href="/#produtos" className="inline-block bg-[#00D4FF] text-[#07131f] px-6 py-2 rounded font-bold uppercase text-[12px] tracking-wide hover:bg-[#00D4FF]/80 transition-colors">
                                    Ver Produtos
                                </Link>
                            </div>
                            
                            {/* Mock Pedido */}
                            <div className="border border-white/10 rounded-xl overflow-hidden">
                                <div className="bg-white/5 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Pedido</p>
                                        <p className="text-white font-medium">#QT-10928</p>
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Data</p>
                                        <p className="text-white">12 Abr 2026</p>
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Total</p>
                                        <p className="text-white font-medium">R$ 149,90</p>
                                    </div>
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
                                            Enviado
                                        </span>
                                    </div>
                                </div>
                                <div className="px-6 py-6 border-t border-white/5 text-sm text-white/70">
                                    <div className="flex justify-between items-center">
                                        <p>1x Sal Marinho Integral QuanQton 250g</p>
                                        <button className="text-[#00D4FF] hover:underline cursor-pointer">Rastrear Entrega</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'dados' && (
                        <div className="max-w-md">
                            <h2 className="text-2xl font-semibold text-white mb-6">Meus Dados</h2>
                            <form className="flex flex-col gap-5">
                                <div>
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-wide block mb-2">Nome Completo</label>
                                    <input type="text" defaultValue={user.name} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF]" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-wide block mb-2">E-mail (Não editável)</label>
                                    <input type="email" defaultValue={user.email} disabled className="w-full bg-black/20 border border-white/5 rounded-lg px-4 py-3 text-white/50 cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-wide block mb-2">Telefone</label>
                                    <input type="tel" defaultValue={user.phone} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF]" />
                                </div>
                                <button type="button" className="bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-[12px] tracking-wide py-3 rounded-lg transition-colors mt-2 cursor-pointer">
                                    Salvar Alterações
                                </button>
                            </form>
                        </div>
                    )}

                    {activeTab === 'enderecos' && (
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-6">Endereços</h2>
                            <div className="border border-white/10 rounded-xl p-6 mb-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-white font-medium">Casa</h3>
                                    <span className="text-[10px] uppercase font-bold bg-white/10 px-2 py-1 rounded text-white/70">Padrão</span>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Rua Exemplo, 123, Apto 45<br/>
                                    Jardins, São Paulo - SP<br/>
                                    01400-000
                                </p>
                                <div className="mt-4 flex gap-4">
                                    <button className="text-[13px] text-[#00D4FF] hover:underline cursor-pointer">Editar</button>
                                    <button className="text-[13px] text-[#ff5050] hover:underline cursor-pointer">Remover</button>
                                </div>
                            </div>
                            <button className="w-full border border-dashed border-white/20 rounded-xl py-6 text-white/50 hover:text-white hover:border-white/50 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                <span>+</span> Adicionar novo endereço
                            </button>
                        </div>
                    )}

                    {activeTab === 'senha' && (
                        <div className="max-w-md">
                            <h2 className="text-2xl font-semibold text-white mb-6">Alterar Senha</h2>
                            <form className="flex flex-col gap-5">
                                <div>
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-wide block mb-2">Senha Atual</label>
                                    <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF]" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-wide block mb-2">Nova Senha</label>
                                    <input type="password" placeholder="Mínimo 8 caracteres" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF]" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-wide block mb-2">Confirmar Nova Senha</label>
                                    <input type="password" placeholder="Repita a nova senha" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF]" />
                                </div>
                                <button type="button" className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#07131f] font-bold uppercase text-[12px] tracking-wide py-3 rounded-lg transition-colors mt-2 cursor-pointer">
                                    Atualizar Senha
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}
