import Link from 'next/link'
import FadeIn from '../ui/FadeIn'

export default function Vender() {
    return (
        <section id="quero-vender" className="relative overflow-hidden bg-[var(--deep)] py-[120px]">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <div className="flex flex-col items-center text-center">
                        <FadeIn>
                            <img src="/LOGO.png" alt="QuanQton Logo" className="h-16 mb-6 mx-auto object-contain drop-shadow-md" />
                            <div className="text-center w-full mb-5">
                                <span className="section-label mx-auto inline-block">ATACADO E REVENDA</span>
                            </div>
                            <h2 className="text-white mb-6">SEJA UM PARCEIRO QUANQTON</h2>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <p className="text-[1.1rem] text-brand-silver mb-8 leading-relaxed">
                                Leve o verdadeiro sal integral do oceano profundo para o seu empório, mercado ou restaurante. Condições exclusivas para compras no atacado com margens de lucro atrativas para o seu negócio.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2} className="flex flex-col items-center w-full">
                            <ul className="mb-10 space-y-4 text-left">
                                <li className="flex items-center justify-center lg:justify-start gap-3 text-brand-silver">
                                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" />
                                    <span>Tabelas de preços exclusivas para CNPJ</span>
                                </li>
                                <li className="flex items-center justify-center lg:justify-start gap-3 text-brand-silver">
                                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" />
                                    <span>Material de PDV premium incluso</span>
                                </li>
                                <li className="flex items-center justify-center lg:justify-start gap-3 text-brand-silver">
                                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" />
                                    <span>Suporte comercial dedicado</span>
                                </li>
                            </ul>

                            <Link href="#contato" className="btn-primary inline-flex justify-center">
                                FALAR COM COMERCIAL →
                            </Link>
                        </FadeIn>
                    </div>

                    {/* Image Area */}
                    <FadeIn delay={0.3} direction="left">
                        <div className="relative aspect-[4/4.5] w-full max-w-[450px] mx-auto hidden lg:flex rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                            <img
                                src="/B2B.png"
                                alt="Pack B2B QuanQton Ocean Salt"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Subtle dark gradient overlay to blend corners and frame the image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040B16]/80 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl z-20 pointer-events-none" />
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    )
}
