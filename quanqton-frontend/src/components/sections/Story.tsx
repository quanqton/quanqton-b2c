import FadeIn from '../ui/FadeIn'

export default function Story() {
    return (
        <section id="historia" className="relative border-t border-white/5 bg-[radial-gradient(ellipse_at_bottom_left,#0a1e3d_0%,var(--color-brand-bg)_70%)]">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-brand-sky/10 to-transparent"></div>
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

                    <div className="lg:sticky lg:top-[100px] w-full max-w-sm mx-auto lg:max-w-none">
                        <FadeIn>
                            <div className="w-full aspect-[3/4] bg-white/[0.02] rounded-[24px] border border-white/5 flex flex-col items-end justify-end overflow-hidden relative shadow-[inset_0_0_80px_rgba(255,255,255,0.02)] group">
                                {/* The RENE Image */}
                                <img
                                    src="/RENE.png"
                                    alt="René Quinton"
                                    className="absolute inset-0 w-full h-full object-cover object-top z-0 group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Subtle Gradient just for text readability at the very bottom */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#040B16] to-transparent z-10" />

                                {/* Text Content */}
                                <div className="relative z-20 w-full p-8 text-center">
                                    <div className="font-accent text-[1.8rem] italic text-white mb-1 drop-shadow-md">
                                        René Quinton (1866–1925)
                                    </div>
                                    <div className="font-body text-[0.85rem] tracking-[0.15em] text-brand-gold uppercase drop-shadow-md">
                                        "O fisiologista que descobriu que o oceano carrega a fórmula da vida"
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="flex flex-col">
                        <FadeIn>
                            <span className="section-label">A ORIGEM</span>
                            <h2 className="text-left mb-6">Uma busca. Um oceano. O sal que mudou tudo.</h2>

                            <div className="font-accent text-[clamp(1.4rem,2.5vw,2rem)] italic text-white leading-[1.4] py-6 px-8 border-l-4 border-brand-sky bg-brand-sky/10 rounded-r-xl my-8">
                                "A medicina não tinha mais resposta. Então fomos buscar onde a vida sempre começou: no mar."
                            </div>

                            <p className="font-body text-[0.9rem] text-brand-sky font-medium mb-6">
                                - Família QuanQton
                            </p>

                            <p className="mb-4">
                                Em 2014, nossa filha Luisa, de 5 anos, foi diagnosticada com uma doença autoimune. O tratamento proposto: medicação para o resto da vida.
                            </p>

                            <p className="mb-4">
                                Foi nessa busca que encontramos o trabalho de René Quinton, fisiologista francês que demonstrou algo extraordinário: a composição mineral do oceano e a do nosso sangue são quase idênticas.
                            </p>

                            <p className="mb-4 italic text-white/90">
                                O sal integral fez parte da recuperação dela. Hoje, Luisa está saudável. Sem medicação. Sem sequelas.
                            </p>

                            <p className="mb-6">
                                Em 2016, nasceu a QuanQton. Um compromisso: trazer ao Brasil um sal que preserve o que o oceano criou. Nada adicionado. Nada removido.
                            </p>

                            <p className="mb-6 font-semibold text-brand-sky">
                                Hoje somos milhares de famílias pelo mundo que fazem essa escolha todos os dias.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 mt-6 backdrop-blur-sm">
                                <h4 className="text-white/80 mb-2.5 font-body text-[0.85rem] tracking-[0.1em] uppercase">
                                    René Quinton - A Base Científica
                                </h4>
                                <p className="text-[0.95rem]">
                                    Quinton demonstrou que a composição mineral do Oceano Atlântico - sódio, magnésio, potássio, cálcio, cloretos e mais de 75 elementos traço - replica de forma extraordinária o ambiente interno das nossas células. Seus estudos são a base científica que inspira a QuanQton desde o primeiro dia.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    )
}
