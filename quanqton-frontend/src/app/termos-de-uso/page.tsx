import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TermosDeUso() {
    return (
        <div className="bg-[#07131f] min-h-screen text-white font-sans flex flex-col">
            <Header />
            <main className="flex-1 container-custom pt-32 pb-20 md:pt-36">
                <div className="max-w-3xl mx-auto bg-white/[0.02] p-6 md:p-8 rounded-xl border border-white/5">
                    <div className="border-b border-white/10 pb-6 mb-6">
                        <h1 className="text-2xl md:text-4xl font-display font-bold mb-1.5">Termos de Uso</h1>
                        <p className="text-white/40 text-[12px]">Última atualização: Abril de 2026</p>
                    </div>

                    <div className="text-white/70 space-y-5 text-[15px] leading-snug">
                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">1. Aceitação dos Termos</h2>
                            <p>Ao navegar ou realizar qualquer transação final através de nossa plataforma digital QuanQton, você de ofício declara sua compreensão total referente aos artigos operacionais mantidos nestes Termos formais regidos de acordo com a jurisdição do território brasileiro.</p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">2. Condições de Produtos e Preços</h2>
                            <p>Os preços dos cristais minerais são sujeitos à mudança sem aviso prévio. Comprometemo-nos que a cada alteração formal os pagamentos não sejam reatribuídos para parcelamentos correntes de datas passadas. Garantimos o envio dos minerais da mais pura forma possível mantendo a natureza exata em cada pote envazado.</p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">3. Política de Pagamento e Entrega</h2>
                            <p>O prazo de entrega passará a ser rastreado logo ao processamento fiscal via operadora financeira (Pixel ou Cartão instantâneo, e Boletos via prazo da caixa). A QuanQton assumirá total responsabilidade em viabilizar a entrega do material nos estados dispostos via cobertura nacional em parceria da plataforma de postagem logística competente.</p>
                        </section>

                        <section>
                            <h2 className="text-[18px] font-bold text-white mb-1.5">4. Devoluções e Trocas (Art. 49 CDC)</h2>
                            <p>Assegurado por lei, o consumidor está amparado de seu prazo de 7 dias úteis contra arrependimentos plenos contados a partir da data de recepção, mediante estorno simplificado no portal interno ou contato imediato.</p>
                        </section>
                        
                        <div className="mt-8 bg-white/5 border-l-4 border-[#00D4FF] p-4 rounded-r-lg">
                            <h3 className="text-[#00D4FF] font-bold text-[12px] uppercase tracking-wide mb-1.5">Disclaimer Importante</h3>
                            <p className="text-[13px] leading-relaxed">
                                Os produtos QuanQton são de natureza alimentar em viés natural integrativo. <strong>Não substituem avaliações especializadas, nem configuram substitutivo de tratamento médico ou nutricional padronizado</strong>. Resultados diretos à suplementação via minerais in natura podem sofrer variância individual a critério dos hábitos e genética. Nossos estudos e dados baseiam-se globalmente via laboratórios do INMETRO (LAUDO nº 2084/25).
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
