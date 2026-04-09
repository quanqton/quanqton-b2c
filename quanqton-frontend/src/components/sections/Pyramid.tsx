import FadeIn from '../ui/FadeIn'
import { clsx } from 'clsx'
import Image from 'next/image'

export default function Pyramid() {
    return (
        <section id="piramide" className="bg-brand-navy py-[100px] border-t border-white/5 relative">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-brand-sky/10 to-transparent"></div>
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start relative pb-10">

                    <div className="lg:sticky lg:top-[120px] w-full self-start">
                        <FadeIn direction="right">
                            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(42,127,255,0.15)] bg-white/[0.02]">
                                <Image
                                    src="/pyramid.png"
                                    alt="Pirâmide de Sal QuanQton"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn direction="left" delay={0.2}>
                        <div className="flex flex-col">
                            <span className="section-label">A PROVA DA PUREZA</span>
                            <h2 className="mb-6">O Formato Geométrico Perfeito</h2>

                            <p className="text-[1.05rem] mb-6">
                                O Sal Integral QuanQton <strong className="text-white">cristaliza-se naturalmente em formato de pirâmide.</strong>
                            </p>

                            <p className="mb-6 text-brand-silver">
                                Essa formação geométrica complexa e deslumbrante é a prova inquestionável de que não houve nenhuma interferência humana ou de maquinário em seu processo de secagem.
                            </p>

                            <div className="bg-brand-sky/5 border border-brand-sky/20 rounded-2xl p-6 mt-4 backdrop-blur-sm">
                                <h3 className="text-white font-body font-bold text-[0.95rem] mb-3 flex items-center gap-2">
                                    A Geometria da Natureza
                                </h3>
                                <p className="text-[0.9rem] text-brand-silver leading-relaxed">
                                    Apenas quando a salmoura do oceano perde umidade de forma nativa e extremamente lenta, impulsionada exclusivamente pela ação do sol e do vento nas salinas de argila, o cristal consegue esculpir suas quinas até formar os icônicos cristais piramidais de sal integral, preservando sua umidade e seus 84+ minerais em seu interior sem jamais granular como o sal fino de mesa.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    )
}