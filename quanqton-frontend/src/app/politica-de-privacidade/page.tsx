import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PoliticaPrivacidade() {
    return (
        <div className="bg-[#07131f] min-h-screen text-white font-sans flex flex-col">
            <Header />
            <main className="flex-1 container-custom pt-32 pb-20 md:pt-36">
                <div className="max-w-3xl mx-auto bg-white/[0.02] p-6 md:p-8 rounded-xl border border-white/5">
                    <div className="border-b border-white/10 pb-6 mb-6">
                        <h1 className="text-2xl md:text-4xl font-display font-bold mb-2">Política de Privacidade</h1>
                        <p className="text-[#00D4FF] font-medium tracking-wide uppercase text-[11px] mb-1.5">Nunca vendemos seus dados a terceiros.</p>
                        <p className="text-white/40 text-[12px]">Última atualização: Abril de 2026</p>
                    </div>

                    <div className="text-white/70 space-y-5 text-[15px] leading-snug">
                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">1. Quem somos</h2>
                            <p>Esta Política de Privacidade descreve como a QuanQton Ocean Salt, operada pela Industria Pontal do Sal Ltda (CNPJ: 59.578.538/0001-20), coleta, usa e protege suas informações pessoais.</p>
                        </section>
                        
                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">2. Dados coletados</h2>
                            <p>Para processar seus pedidos, coletamos as informações essenciais como nome completo, CPF, endereço para entrega, e-mail para comunicação direta e dados mínimos de pagamento processados seguramente por nossos parceiros autorizados (Mercado Pago / Pagar.me / Stripe).</p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">3. Como usamos</h2>
                            <p>Utilizamos os dados em caráter unicamente operacional: envio do produto à sua residência, emissão da nota fiscal, garantia do seu limite extra de Frete Bonificado e o envio eventual de comunicações relevantes sobre novos lotes (do qual você pode optar sair a qualquer momento).</p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">4. Direitos LGPD</h2>
                            <p>Seus direitos fundamentais ficam salvaguardados de acordo com a Lei de Proteção de Dados (lei brasileira Nº 13.709). Opcionalmente e rapidamente através do e-mail, pode solicitar: remoção conta, portabilidade, retificação, entre outros.</p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">5. Cookies</h2>
                            <p>Nosso sistema faz uso brando de armazenamento de sessão local focado na performance global, mantendo seu carrinho sincronizado e a preferência de tela preservada.</p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">6. Contato</h2>
                            <p>Em caso de quaisquer dúvidas acerca dos seus dados, nossa equipe especializada está disponível através do suporte imediato pelo e-mail <strong>contato@quanqton.com.br</strong> ou pelo nosso WhatsApp de central aberta.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
