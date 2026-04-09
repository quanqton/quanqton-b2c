import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PoliticaFrete() {
    return (
        <div className="bg-[#07131f] min-h-screen text-white font-sans flex flex-col">
            <Header />
            <main className="flex-1 container-custom pt-32 pb-20 md:pt-36">
                <div className="max-w-3xl mx-auto bg-white/[0.02] p-6 md:p-8 rounded-xl border border-white/5">
                    <div className="border-b border-white/10 pb-6 mb-6 text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <div className="inline-flex items-center justify-center p-2 bg-[#00D4FF]/10 text-[#00D4FF] rounded-full flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-4xl font-display font-bold mb-1">A Revolução do Frete Bonificado</h1>
                            <p className="text-white/50 text-sm md:text-base">Na QuanQton, o frete nunca é um custo perdido.</p>
                        </div>
                    </div>

                    <div className="text-white/70 space-y-6 text-[15px] leading-relaxed">
                        <section className="bg-white/5 px-5 py-4 rounded-lg border border-white/10 text-[14px]">
                            <h2 className="text-[16px] font-bold text-white mb-2">Como funciona o Frete Bonificado?</h2>
                            <p className="mb-2">
                                Acreditamos que você não deveria ser penalizado com taxas altas apenas para receber a saúde da nossa marca em sua casa. Por isso, <strong>todo o valor que você investir no frete logístico será automaticamente reembolsado em formato de produto extra dentro da própria embalagem do pedido.</strong>
                            </p>
                            <p>
                                <em>Exemplo prático:</em> Você simulou R$ 30,00 de transporte? O equivalente em gramaturas correspondentes de sal marinho natural lhe acompanharão.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-2">Os Prazos por Método</h2>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0"></div>
                                    <p><strong>Cartão de Crédito e PIX:</strong> Por disporem de aprovação quase instantânea, essas faturas geralmente emitem pedido dentro do mesmo dia em horário útil. Seu despacho ocorrerá sempre dentro de até 48 Hrs.</p>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] mt-2 flex-shrink-0"></div>
                                    <p><strong>Boletos Bancários:</strong> A depender estritamente da Câmara de Compensação, isso retém os despachos em até 3 dias antes da autorização fiscal em ser repassada pela automação na plataforma.</p>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-2">Rastreamento Constante</h2>
                            <p>Nossa automação possui inteligência para alertar você perfeitamente em momentos essenciais durante a jornada da rota: a liberação na expedição central, a movimentação inter-estados, etc. Garantimos enviar pro ativamente seu respectivo Código Direto logo aos primeiros transcursos de movimento em seu WhatsApp cadastrado e via de E-mail.</p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-2">Endereços Restritos ou Incorretos</h2>
                            <p>Em devoluções logísticas provenientes de falhas puramente na base dos próprios remetentes (destinatários declarando blocos divergentes, áreas não assinaladas ou restrições via periculosidade por local fixo da transportadora) não isentamos de taxas do reenvio, que precisará ser revalidado em negociação de contato de forma individual.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
