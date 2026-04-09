"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CadastroPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        confirmaSenha: '',
        termos: false
    })
    
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [showPassword, setShowPassword] = useState(false)
    const [showConfPassword, setShowConfPassword] = useState(false)
    const [isSenhaFocused, setIsSenhaFocused] = useState(false)

    // Máscara de telefone
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/\D/g, '')
        if (val.length > 11) val = val.substring(0, 11)
        
        let masked = val
        if (val.length > 2) {
            masked = `(${val.substring(0,2)}) ` + val.substring(2)
        }
        if (val.length > 7) {
            masked = `(${val.substring(0,2)}) ${val.substring(2,7)}-${val.substring(7)}`
        }
        setFormData({ ...formData, telefone: masked })
    }

    const validatePass = (pass: string) => {
        const hasMinLen = pass.length >= 8
        const hasNum = /\d/.test(pass)
        return hasMinLen && hasNum
    }

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors: Record<string, string> = {}
        
        if (!formData.nome) newErrors.nome = "Preencha este campo"
        if (!formData.email) {
            newErrors.email = "Preencha este campo"
        } else if (!validateEmail(formData.email)) {
             newErrors.email = "E-mail inválido"
        }
        
        if (!formData.senha) {
            newErrors.senha = "Preencha este campo"
        } else if (!validatePass(formData.senha)) {
            newErrors.senha = "Senha não atende aos requisitos"
        }
        
        if (!formData.confirmaSenha) {
            newErrors.confirmaSenha = "Preencha este campo"
        } else if (formData.senha !== formData.confirmaSenha) {
            newErrors.confirmaSenha = "As senhas não coincidem"
        }
        
        if (!formData.termos) {
            newErrors.termos = "Você deve aceitar os termos"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        setIsLoading(true)

        // Mock success
        setTimeout(() => {
            setIsLoading(false)
            setSuccessMsg("Conta criada com sucesso! Bem-vindo(a) à família QuanQton.")
            setTimeout(() => {
                router.push('/minha-conta')
            }, 2000)
        }, 1500)
    }

    const checkPassMatch = () => {
        if (formData.confirmaSenha && formData.senha !== formData.confirmaSenha) {
            setErrors(prev => ({ ...prev, confirmaSenha: "As senhas não coincidem" }))
        } else {
            setErrors(prev => { 
                const newE = { ...prev }
                delete newE.confirmaSenha
                return newE
            })
        }
    }

    return (
        <main className="min-h-screen bg-[#07131f] flex flex-col items-center justify-center p-6 font-sans">
            
            <div className="w-full max-w-[440px] bg-white/[0.04] border border-white/[0.08] rounded-lg p-12 shadow-2xl relative z-10 flex flex-col my-10">
                
                <div className="flex justify-center mb-8">
                    <Link href="/" className="hover:scale-105 transition-transform">
                        <img src="/LOGO.png" alt="QuanQton" className="w-[82px] h-[82px] object-contain" />
                    </Link>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-[22px] font-semibold text-white italic mb-1">Criar Conta</h1>
                    <p className="text-[14px] text-white/50">Junte-se a mais de 25.000 famílias</p>
                </div>

                {successMsg ? (
                    <div className="bg-[#00D4FF]/10 border border-[#00D4FF] rounded-lg p-6 text-center animate-pulse">
                        <p className="text-white text-[15px] leading-relaxed">{successMsg}</p>
                    </div>
                ) : (

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wide text-white">NOME COMPLETO</label>
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            value={formData.nome}
                            onChange={(e) => {
                                setFormData({...formData, nome: e.target.value})
                                if (errors.nome) setErrors(prev => ({...prev, nome: ''}))
                            }}
                            className={`w-full bg-white/[0.06] border rounded px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors placeholder:text-white/30 text-[14px] ${
                                errors.nome ? 'border-[rgba(255,80,80,0.6)]' : 'border-white/[0.12]'
                            }`}
                        />
                        {errors.nome && <span className="text-[12px] text-[#ff5050] mt-1">{errors.nome}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wide text-white">E-MAIL</label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({...formData, email: e.target.value})
                                if (errors.email) setErrors(prev => ({...prev, email: ''}))
                            }}
                            className={`w-full bg-white/[0.06] border rounded px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors placeholder:text-white/30 text-[14px] ${
                                errors.email ? 'border-[rgba(255,80,80,0.6)]' : 'border-white/[0.12]'
                            }`}
                        />
                        {errors.email && <span className="text-[12px] text-[#ff5050] mt-1">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wide text-white">TELEFONE (opcional)</label>
                        <input
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={formData.telefone}
                            onChange={handlePhoneChange}
                            className="w-full bg-white/[0.06] border border-white/[0.12] rounded px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors placeholder:text-white/30 text-[14px]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wide text-white">SENHA</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mínimo 8 caracteres"
                                value={formData.senha}
                                onChange={(e) => {
                                    setFormData({...formData, senha: e.target.value})
                                    if (errors.senha) setErrors(prev => ({...prev, senha: ''}))
                                }}
                                onFocus={() => setIsSenhaFocused(true)}
                                onBlur={() => {
                                    setIsSenhaFocused(false)
                                    checkPassMatch()
                                }}
                                className={`w-full bg-white/[0.06] border rounded px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors placeholder:text-white/30 text-[14px] ${
                                    errors.senha ? 'border-[rgba(255,80,80,0.6)]' : 'border-white/[0.12]'
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
                        {isSenhaFocused && (
                            <div className="text-white/40 text-[11px] mt-1 space-y-1">
                                <p className={formData.senha.length >= 8 ? "text-[#00D4FF]" : ""}>• Mínimo 8 caracteres</p>
                                <p className={/\d/.test(formData.senha) ? "text-[#00D4FF]" : ""}>• Pelo menos 1 número</p>
                            </div>
                        )}
                        {errors.senha && !isSenhaFocused && <span className="text-[12px] text-[#ff5050] mt-1">{errors.senha}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wide text-white">CONFIRMAR SENHA</label>
                        <div className="relative">
                            <input
                                type={showConfPassword ? "text" : "password"}
                                placeholder="Repita a senha"
                                value={formData.confirmaSenha}
                                onChange={(e) => {
                                    setFormData({...formData, confirmaSenha: e.target.value})
                                }}
                                onKeyUp={checkPassMatch}
                                className={`w-full bg-white/[0.06] border rounded px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors placeholder:text-white/30 text-[14px] ${
                                    errors.confirmaSenha ? 'border-[rgba(255,80,80,0.6)]' : 'border-white/[0.12]'
                                }`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfPassword(!showConfPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white cursor-pointer"
                            >
                                {showConfPassword ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/></svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                )}
                            </button>
                        </div>
                        {errors.confirmaSenha && <span className="text-[12px] text-[#ff5050] mt-1">{errors.confirmaSenha}</span>}
                    </div>

                    <div className="flex items-start gap-3 mt-2">
                        <input
                            type="checkbox"
                            checked={formData.termos}
                            onChange={(e) => {
                                setFormData({...formData, termos: e.target.checked})
                                if (e.target.checked && errors.termos) {
                                    setErrors(prev => {
                                        const newE = {...prev}
                                        delete newE.termos
                                        return newE
                                    })
                                }
                            }}
                            className="mt-1 flex-shrink-0 cursor-pointer w-4 h-4 accent-[#00D4FF]"
                        />
                        <label className={`text-[12px] leading-snug ${errors.termos ? 'text-[#ff5050]' : 'text-white/60'}`}>
                            Li e aceito os <a href="#" target="_blank" className="text-[#00D4FF] hover:underline">Termos de Uso</a> e a <a href="#" target="_blank" className="text-[#00D4FF] hover:underline">Política de Privacidade</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || !formData.termos}
                        className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#07131f] font-bold text-[13px] uppercase tracking-wide py-[14px] rounded mt-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-4 w-4 text-[#07131f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                CRIANDO CONTA...
                            </>
                        ) : (
                            "CRIAR MINHA CONTA"
                        )}
                    </button>
                </form>

                )}

                {!successMsg && (
                    <div className="mt-8 text-center text-[13px] text-white/50">
                        Já tem conta?{' '}
                        <Link href="/login" className="text-[#00D4FF] hover:underline ml-1">Entrar</Link>
                    </div>
                )}
            </div>

            <div className="mt-2 mb-8">
                <Link href="/" className="text-white/50 hover:text-white text-[13px] transition-colors flex items-center gap-2">
                    <span>&larr;</span> Voltar ao início
                </Link>
            </div>
        </main>
    )
}
