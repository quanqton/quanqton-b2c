"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/useCartStore'
import FadeIn from '@/components/ui/FadeIn'

export default function CheckoutPage() {
    const router = useRouter()
    const { items, getCartTotal, clearCart } = useCartStore()
    const [isProcessing, setIsProcessing] = useState(false)
    const [step, setStep] = useState<1 | 2 | 3>(1) // 1: Delivery, 2: Payment, 3: Success

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault()
        setStep(2)
    }

    const handleSimulatePayment = (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulate API call to payment gateway
        setTimeout(() => {
            setIsProcessing(false)
            setStep(3)
            clearCart()
        }, 2000)
    }

    if (step === 3) {
        return (
            <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_center,#0a1e3d_0%,var(--color-brand-bg)_60%)] flex flex-col items-center justify-center p-6 text-center">
                <FadeIn>
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/50">
                        <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="font-display text-4xl text-white mb-4">Pedido Confirmado!</h1>
                    <p className="font-body text-brand-silver mb-8 max-w-md mx-auto">
                        Sua simulação de compra foi concluída com sucesso. Em um ambiente real, você receberia um e-mail com os detalhes do seu pedido.
                    </p>
                    <Link href="/" className="btn-primary py-4 px-8 inline-block">
                        Voltar para a Loja
                    </Link>
                </FadeIn>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-brand-bg pt-24 pb-12">
            <div className="container-custom max-w-5xl">

                <div className="mb-8 flex items-center gap-4 text-brand-silver text-sm">
                    <Link href="/" className="hover:text-white transition-colors">Voltar</Link>
                    <span>/</span>
                    <span className="text-white">Checkout Seguro (Simulação)</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Form Column */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-brand-sky' : 'bg-white/10'}`}></div>
                            <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-brand-sky' : 'bg-white/10'}`}></div>
                        </div>

                        {step === 1 ? (
                            <form onSubmit={handleNextStep} className="space-y-6">
                                <h2 className="font-display text-2xl text-white mb-6">1. Dados de Entrega</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-brand-silver text-sm">Nome Completo</label>
                                        <input required type="text" defaultValue="Cliente Teste" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-brand-silver text-sm">E-mail</label>
                                        <input required type="email" defaultValue="teste@quanqton.com" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-brand-silver text-sm">CPF</label>
                                        <input required type="text" defaultValue="000.000.000-00" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-brand-silver text-sm">Celular</label>
                                        <input required type="tel" defaultValue="(11) 99999-9999" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-brand-silver text-sm">CEP</label>
                                        <input required type="text" defaultValue="00000-000" className="w-full md:w-1/2 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-brand-silver text-sm">Endereço Completo</label>
                                        <input required type="text" defaultValue="Rua Fictícia, 123 - Bairro Imaginário" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary w-full py-4 mt-8">Ir para Pagamento →</button>
                            </form>
                        ) : (
                            <form onSubmit={handleSimulatePayment} className="space-y-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="font-display text-2xl text-white">2. Pagamento</h2>
                                    <button type="button" onClick={() => setStep(1)} className="text-brand-sky text-sm hover:underline">Voltar para Entrega</button>
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-center gap-4 p-4 border border-brand-sky/50 bg-brand-sky/10 rounded-xl cursor-pointer">
                                        <input type="radio" name="payment" defaultChecked className="text-brand-sky w-5 h-5" />
                                        <div className="flex-1">
                                            <div className="text-white font-bold">Cartão de Crédito</div>
                                            <div className="text-brand-silver text-sm">Até 12x (Aprovação Imediata)</div>
                                        </div>
                                    </label>

                                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-brand-silver text-sm">Número do Cartão</label>
                                            <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-brand-silver text-sm">Validade</label>
                                                <input required type="text" placeholder="MM/AA" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-brand-silver text-sm">CVV</label>
                                                <input required type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-brand-silver text-sm">Nome impresso no cartão</label>
                                            <input required type="text" placeholder="JOAO DA SILVA" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-sky focus:outline-none transition-colors" />
                                        </div>
                                    </div>

                                    <label className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 rounded-xl cursor-not-allowed opacity-50">
                                        <input disabled type="radio" name="payment" className="text-brand-sky w-5 h-5" />
                                        <div className="flex-1">
                                            <div className="text-white font-bold">PIX</div>
                                            <div className="text-brand-silver text-sm">Em breve</div>
                                        </div>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="btn-primary w-full py-4 mt-8 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                            Processando...
                                        </>
                                    ) : (
                                        `Finalizar Compra - ${formatCurrency(getCartTotal())}`
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Summary Column */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#020609] p-6 lg:p-8 rounded-2xl border border-white/10 sticky top-32 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                            <h3 className="font-display text-xl text-white mb-6">Resumo do Pedido</h3>

                            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto scrollbar-thin pr-2">
                                {items.length === 0 ? (
                                    <p className="text-brand-silver text-sm">Nenhum item.</p>
                                ) : (
                                    items.map(item => (
                                        <div key={item.id} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-xs text-brand-silver">Q</div>
                                                <div>
                                                    <div className="text-white text-sm font-bold">{item.name}</div>
                                                    <div className="text-brand-silver text-xs">Qtd: {item.quantity}</div>
                                                </div>
                                            </div>
                                            <div className="text-brand-sky font-bold text-sm">
                                                {formatCurrency(item.price * item.quantity)}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="border-t border-white/10 pt-6 space-y-3">
                                <div className="flex justify-between text-brand-silver text-sm">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(getCartTotal())}</span>
                                </div>
                                <div className="flex justify-between text-brand-silver text-sm">
                                    <span>Frete (Fixo - Simulação)</span>
                                    <span>R$ 15,00</span>
                                </div>
                                <div className="flex justify-between items-center pt-3 mt-3 border-t border-white/10">
                                    <span className="text-white font-bold">Total a pagar</span>
                                    <span className="font-display text-2xl text-brand-sky">{formatCurrency(getCartTotal() + 15)}</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 text-center flex flex-col items-center justify-center gap-2">
                                <svg className="w-6 h-6 text-brand-silver/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span className="text-xs text-brand-silver/70 px-4">Ambiente Seguro. Dados criptografados.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
