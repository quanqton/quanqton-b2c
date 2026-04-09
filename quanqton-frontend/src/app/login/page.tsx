"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors: Record<string, string> = {}
        if (!email) newErrors.email = "Preencha este campo"
        if (!password) newErrors.password = "Preencha este campo"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        setIsLoading(true)

        // Mock success
        setTimeout(() => {
            router.push('/minha-conta')
        }, 1500)
    }

    return (
        <main className="min-h-screen bg-[#07131f] flex flex-col items-center justify-center p-6 font-sans">
            
            <div className="w-full max-w-[440px] bg-white/[0.04] border border-white/[0.08] rounded-lg p-12 shadow-2xl relative z-10 flex flex-col">
                
                <div className="flex justify-center mb-8">
                    <Link href="/" className="hover:scale-105 transition-transform">
                        <img src="/LOGO.png" alt="QuanQton" className="w-[82px] h-[82px] object-contain" />
                    </Link>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-[22px] font-semibold text-white italic mb-1">Acesso Exclusivo</h1>
                    <p className="text-[14px] text-white/50">Bem-vindo(a) ao seu portal de saúde</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wide text-white">E-MAIL</label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full bg-white/[0.06] border rounded px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors placeholder:text-white/30 text-[14px] ${
                                errors.email ? 'border-[rgba(255,80,80,0.6)]' : 'border-white/[0.12]'
                            }`}
                        />
                        {errors.email && <span className="text-[12px] text-[#ff5050] mt-1">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <label className="text-[11px] font-bold uppercase tracking-wide text-white">SENHA</label>
                            <a href="#" className="text-[#00D4FF] text-[11px] uppercase hover:underline">ESQUECEU?</a>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full bg-white/[0.06] border rounded px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors placeholder:text-white/30 text-[14px] ${
                                    errors.password ? 'border-[rgba(255,80,80,0.6)]' : 'border-white/[0.12]'
                                }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white cursor-pointer"
                            >
                                {showPassword ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/></svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                )}
                            </button>
                        </div>
                        {errors.password && <span className="text-[12px] text-[#ff5050] mt-1">{errors.password}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#07131f] font-bold text-[13px] uppercase tracking-wide py-[14px] rounded mt-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-4 w-4 text-[#07131f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                ENTRANDO...
                            </>
                        ) : (
                            "ENTRAR NA MINHA CONTA"
                        )}
                    </button>
                </form>

                <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-white/10"></div>
                    <span className="text-[12px] text-white/50 lowercase">ou</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* Botão Google (opcional) */}
                {/* 
                <button
                    type="button"
                    className="w-full bg-white/[0.06] border border-white/[0.12] hover:bg-white/10 text-white font-medium text-[14px] py-[14px] rounded transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Entrar com Google
                </button> 
                */}

                <div className="mt-8 text-center text-[13px] text-white/50">
                    Ainda não tem conta?{' '}
                    <Link href="/cadastro" className="text-[#00D4FF] hover:underline ml-1">Criar agora</Link>
                </div>
            </div>

            <div className="mt-8">
                <Link href="/" className="text-white/50 hover:text-white text-[13px] transition-colors flex items-center gap-2">
                    <span>&larr;</span> Voltar ao início
                </Link>
            </div>
        </main>
    )
}
