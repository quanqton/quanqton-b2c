"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/lib/store/useCartStore'

export default function CheckoutPage() {
    const router = useRouter()
    const { items, getCartTotal, clearCart } = useCartStore()
    const [step, setStep] = useState(1)
    const [paymentMethod, setPaymentMethod] = useState('pix')
    const [loading, setLoading] = useState(false)
    const [coupon, setCoupon] = useState('')
    const [discount, setDiscount] = useState(0)

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val)
    }

    const subtotal = getCartTotal()
    const shipping = 29.90
    const total = subtotal - discount + shipping

    const applyCoupon = () => {
        if (coupon.toUpperCase() === 'QUANQTON10') {
            setDiscount(subtotal * 0.1)
        } else {
            alert('Cupom inválido')
        }
    }
    
    const handleConfirm = () => {
        setLoading(true)
        setTimeout(() => {
            clearCart()
            router.push('/pedido-confirmado')
        }, 2000)
    }

    return (
        <div className="bg-[#07131f] min-h-screen text-white font-sans flex flex-col">
            {/* Minimal Header */}
            <header className="border-b border-white/5 bg-white/[0.01]">
                <div className="container-custom h-20 flex items-center justify-between">
                    <Link href="/">
                        <img src="/LOGO.png" alt="QuanQton" className="h-12 w-12 object-contain" />
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        Checkout 100% Seguro
                    </div>
                </div>
            </header>

            <main className="flex-1 container-custom py-10 flex flex-col lg:flex-row gap-10">
                {/* Left Form Area */}
                <div className="flex-1">
                    {/* Progress */}
                    <div className="flex items-center mb-8 text-[13px] uppercase tracking-wide font-bold">
                        <div className={`flex items-center ${step >= 1 ? 'text-[#00D4FF]' : 'text-white/40'}`}>
                            <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center mr-2 text-[10px]">1</div>
                            Endereço
                        </div>
                        <div className={`h-px flex-1 mx-4 ${step >= 2 ? 'bg-[#00D4FF]' : 'bg-white/10'}`}></div>
                        <div className={`flex items-center ${step >= 2 ? 'text-[#00D4FF]' : 'text-white/40'}`}>
                            <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center mr-2 text-[10px]">2</div>
                            Pagamento
                        </div>
                        <div className={`h-px flex-1 mx-4 bg-white/10`}></div>
                        <div className="flex items-center text-white/40">
                            <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center mr-2 text-[10px]">3</div>
                            Confirmar
                        </div>
                    </div>

                    {step === 1 && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 lg:p-8">
                            <h2 className="text-xl font-bold mb-6 text-white font-display">Endereço de Entrega</h2>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Nome Completo</label>
                                        <input type="text" required className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">CPF</label>
                                        <input type="text" required placeholder="000.000.000-00" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">E-mail</label>
                                        <input type="email" required placeholder="seu@email.com" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Telefone</label>
                                        <input type="tel" required placeholder="(00) 00000-0000" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                    </div>
                                </div>
                                
                                <div className="border-t border-white/5 my-6 pt-4">
                                    <div className="grid grid-cols-3 gap-4 mb-4">
                                        <div className="col-span-1">
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">CEP</label>
                                            <input type="text" required placeholder="00000-000" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Endereço (Rua/Avenida)</label>
                                            <input type="text" required className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-3 gap-4 mb-4">
                                        <div className="col-span-1">
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Número</label>
                                            <input type="text" required className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Complemento</label>
                                            <input type="text" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Bairro</label>
                                            <input type="text" required className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                        <div>
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Cidade</label>
                                            <input type="text" required className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                        <div>
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Estado</label>
                                            <input type="text" required className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 pt-2">
                                    <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer accent-[#00D4FF]" />
                                    <label className="text-[13px] text-white/70">Salvar este endereço para futuras compras</label>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-[#00D4FF] text-[#07131f] font-bold uppercase text-[13px] py-4 rounded tracking-wide hover:bg-[#00D4FF]/90 transition-colors cursor-pointer">
                                        Continuar para Pagamento
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 lg:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold font-display">Pagamento</h2>
                                <button onClick={() => setStep(1)} className="text-[#00D4FF] text-[13px] font-bold hover:underline uppercase tracking-wide cursor-pointer">Voltar</button>
                            </div>
                            
                            <div className="flex gap-2 mb-6 bg-white/[0.06] p-1 rounded-lg">
                                <button onClick={() => setPaymentMethod('pix')} className={`flex-1 py-3 text-[13px] uppercase tracking-wide font-bold rounded transition-colors cursor-pointer ${paymentMethod === 'pix' ? 'bg-[#00D4FF] text-[#07131f]' : 'text-white/70 hover:text-white'}`}>PIX</button>
                                <button onClick={() => setPaymentMethod('credit')} className={`flex-1 py-3 text-[13px] uppercase tracking-wide font-bold rounded transition-colors cursor-pointer ${paymentMethod === 'credit' ? 'bg-[#00D4FF] text-[#07131f]' : 'text-white/70 hover:text-white'}`}>Cartão</button>
                                <button onClick={() => setPaymentMethod('boleto')} className={`flex-1 py-3 text-[13px] uppercase tracking-wide font-bold rounded transition-colors cursor-pointer ${paymentMethod === 'boleto' ? 'bg-[#00D4FF] text-[#07131f]' : 'text-white/70 hover:text-white'}`}>Boleto</button>
                            </div>

                            {paymentMethod === 'pix' && (
                                <div className="text-center py-8">
                                    <div className="w-48 h-48 bg-white mx-auto rounded-lg mb-6 flex items-center justify-center p-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR Code PIX Mock" className="w-full h-full opacity-90" />
                                    </div>
                                    <p className="text-white/70 text-sm mb-4 max-w-sm mx-auto">Escaneie o QR Code ou use o código Pix Copia e Cola. A aprovação é imediata.</p>
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex justify-between items-center max-w-sm mx-auto">
                                        <span className="text-white/50 text-xs truncate">00020126580014br.gov.bcb.pix...</span>
                                        <button className="text-[#00D4FF] text-[11px] uppercase font-bold ml-2 tracking-wide cursor-pointer hover:underline">COPIAR</button>
                                    </div>
                                </div>
                            )}

                            {paymentMethod === 'credit' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Número do Cartão</label>
                                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Nome Impresso no Cartão</label>
                                        <input type="text" placeholder="NOME IMPRESSO" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none uppercase text-[14px]" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Validade</label>
                                            <input type="text" placeholder="MM/AA" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                        <div>
                                            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">CVV</label>
                                            <input type="text" placeholder="123" className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none text-[14px]" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wide block mb-1">Parcelamento</label>
                                        <select className="w-full bg-[#0a1526] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00D4FF] focus:outline-none appearance-none text-[14px]">
                                            <option>1x de {formatCurrency(total)} sem juros</option>
                                            <option>2x de {formatCurrency(total/2)} sem juros</option>
                                            <option>3x de {formatCurrency(total/3)} sem juros</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {paymentMethod === 'boleto' && (
                                <div className="text-center py-10 bg-white/5 rounded-xl border border-white/10">
                                    <svg className="w-12 h-12 mx-auto text-[#00D4FF] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    <p className="text-white font-medium mb-2">Boleto Bancário</p>
                                    <p className="text-white/50 text-sm max-w-xs mx-auto">O boleto será gerado após a confirmação. O prazo de compensação é de até 3 dias úteis.</p>
                                </div>
                            )}

                            <div className="pt-8 text-center">
                                <button 
                                    onClick={handleConfirm}
                                    disabled={loading}
                                    className="w-full bg-[#00D4FF] text-[#07131f] font-bold uppercase text-[15px] py-4 rounded tracking-wide hover:bg-[#00D4FF]/90 transition-colors flex justify-center items-center gap-2 disabled:opacity-50 cursor-pointer"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-[#07131f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            PROCESSANDO PAGAMENTO...
                                        </>
                                    ) : "CONFIRMAR PEDIDO"}
                                </button>
                                <p className="text-white/40 text-[11px] mt-4 flex items-center justify-center gap-1 uppercase tracking-wide font-bold">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    Pagamento 100% seguro
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sticky Summary */}
                <aside className="w-full lg:w-[380px]">
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sticky top-8">
                        <h3 className="text-[16px] font-bold mb-6 font-display">Resumo da Compra</h3>
                        
                        <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto scrollbar-thin pr-1">
                            {items.length === 0 ? (
                                <p className="text-white/50 text-sm">Nenhum item adicionado.</p>
                            ) : (
                                items.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 bg-white/[0.04] border border-white/5 rounded-lg overflow-hidden relative flex-shrink-0">
                                            <img src="/images/produto.png" className="absolute inset-0 w-full h-full object-cover object-center mix-blend-screen" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <p className="text-[13px] font-medium text-white/90 leading-tight mb-1">{item.name}</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="text-[11px] font-bold text-white/50 uppercase tracking-wide">Qtd: {item.quantity}</span>
                                                <span className="text-[13px] font-bold text-[#00D4FF]">{formatCurrency(item.price * item.quantity)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="space-y-3 pt-6 border-t border-white/5 text-[14px]">
                            <div className="flex justify-between text-white/70">
                                <span>Subtotal</span>
                                <span>{formatCurrency(subtotal)}</span>
                            </div>
                            
                            <div className="flex gap-2 pt-2">
                                <input 
                                    type="text" 
                                    placeholder="Cupom (Apenas QUANQTON10 p/ teste)" 
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-[12px] text-white focus:border-[#00D4FF] focus:outline-none uppercase placeholder:normal-case placeholder:text-white/30" 
                                />
                                <button onClick={applyCoupon} className="bg-white/10 hover:bg-white/20 px-4 rounded text-[11px] font-bold uppercase tracking-wide transition-colors cursor-pointer">Aplicar</button>
                            </div>

                            {discount > 0 && (
                                <div className="flex justify-between text-[#00D4FF] pt-2">
                                    <span>Desconto (10%)</span>
                                    <span>- {formatCurrency(discount)}</span>
                                </div>
                            )}

                            <div className="flex justify-between items-center pt-2">
                                <span className="text-white/70">Frete Integrado</span>
                                <span>{formatCurrency(shipping)}</span>
                            </div>
                        </div>

                        {/* Box Frete Bonificado */}
                        <div className="mt-5 p-4 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#00D4FF]"></div>
                            <h4 className="text-[#00D4FF] text-[11px] font-bold mb-1 uppercase tracking-wide flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                FRETE BONIFICADO ATIVO
                            </h4>
                            <p className="text-white/70 text-[12px] leading-snug">
                                O valor pago no frete retorna integralmente em sal marinho extra enviado na sua caixa.
                            </p>
                        </div>

                        <div className="flex justify-between items-center pt-6 mt-6 border-t border-white/5">
                            <span className="text-[16px] font-medium text-white/60">Total</span>
                            <span className="text-[24px] font-bold text-white">{formatCurrency(total)}</span>
                        </div>

                        <div className="flex justify-center gap-3 mt-6 opacity-30 grayscale saturate-0">
                            <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-5 object-contain" alt="Visa" />
                            <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-5 object-contain" alt="Mastercard" />
                            <img src="https://img.icons8.com/color/48/000000/pix.png" className="h-5 object-contain" alt="PIX" />
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col items-center justify-center gap-2">
                            <div className="flex items-center gap-2 text-[#00D4FF]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                <span className="text-[10px] font-bold uppercase tracking-wider">Compra Segura</span>
                            </div>
                            <p className="text-center text-[10px] text-white/30 uppercase tracking-widest mt-1">QuanQton · CNPJ 59.578.538/0001-20</p>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    )
}
