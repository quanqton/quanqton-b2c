import FadeIn from '../ui/FadeIn'

export default function Problem() {
    return (
        <section id="problema" className="bg-brand-navy border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-brand-sky/20 to-transparent z-[3]"></div>
            
            {/* Background Parallax */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-scroll md:bg-fixed"
                style={{ backgroundImage: "url('/oceano.jpg')" }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(7,19,31,0.85)] z-[1]"></div>

            <div className="container-custom relative z-[2] py-20 lg:py-32">
                <FadeIn>
                    <span className="section-label !text-center">O PROBLEMA</span>
                    <h2 className="text-white text-[clamp(2rem,4vw,3rem)] mb-12 max-w-4xl mx-auto text-center leading-tight">
                        E se o problema nunca foi o sal?<br />
                        <span className="text-brand-sky">Foi o que fizeram com ele.</span>
                    </h2>
                </FadeIn>

                <div className="max-w-3xl mx-auto space-y-8 text-center text-[1.1rem] md:text-[1.25rem] text-brand-silver">
                    <FadeIn delay={0.1}>
                        <p>Você adiciona sal em tudo que come. Todo dia.</p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p>
                            Mas o sal que a indústria vende passou por um processo que remove quase tudo que o
                            oceano colocou - e adiciona antiagregantes químicos no lugar.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <p>
                            O que sobra no pacote branco é basicamente cloreto de sódio puro.<br />
                            O que sobra no seu corpo é a falta de 80+ elementos que ele precisava.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="p-8 border-y border-white/10 my-12 bg-white/[0.02]">
                            <p className="font-display text-[1.5rem] md:text-[2rem] text-white">
                                A indústria chama isso de purificação.<br />
                                <span className="text-brand-gold">Nós chamamos de empobrecimento.</span>
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <p className="italic text-brand-sky text-[1.3rem]">
                            "O oceano já entrega 84+ minerais prontos. Nosso trabalho é só não estragar: colheita artesanal, secagem natural, zero refinamento."
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
