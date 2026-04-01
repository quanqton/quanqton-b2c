import Link from 'next/link'
import FadeIn from '../ui/FadeIn'

export default function FinalCTA() {
    return (
        <section id="cta-final" className="relative overflow-hidden bg-gradient-to-br from-[#061428] via-[#0a2a5e] to-[#061428] text-center border-t border-brand-sky/20 py-[120px]">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-brand-sky/30 to-transparent"></div>
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232a7fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                }}
                aria-hidden="true"
            />

            <div className="container-custom relative z-10">
                <FadeIn>
                    <span className="section-label !text-center mb-5">OFERTA ESPECIAL</span>
                    <h2 className="text-white mb-0">EXPERIMENTE O VERDADEIRO<br />SAL INTEGRAL</h2>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <p className="text-[1.2rem] mb-10 text-brand-silver max-w-[600px] mx-auto mt-4">
                        Mais energia, menos inchaço, melhor digestão - desde a primeira semana
                    </p>
                </FadeIn>



                <FadeIn delay={0.3}>
                    <div className="text-center mb-12">
                        <Link href="#produtos" className="btn-primary btn-lg">QUERO O SAL PERFEITO →</Link>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex gap-x-8 gap-y-4 justify-center items-center flex-wrap mt-12 max-w-lg mx-auto">
                        <div className="flex items-center gap-1.5 text-[0.8rem] text-brand-silver">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-sky/40"></span>
                            <span>Pagamento seguro</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[0.8rem] text-brand-silver">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-sky/40"></span>
                            <span>Satisfação garantida</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[0.8rem] text-brand-silver">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-sky/40"></span>
                            <span>Produto 100% natural</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[0.8rem] text-brand-silver">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-sky/40"></span>
                            <span>Embalagem premium</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
