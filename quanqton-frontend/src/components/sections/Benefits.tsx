import FadeIn from '../ui/FadeIn'
import { clsx } from 'clsx'

export default function Benefits() {
    return (
        <section id="beneficios" className="bg-brand-bg border-t border-white/5 relative">
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-brand-sky/10 to-transparent"></div>
            <div className="container-custom relative z-10">
                <FadeIn>
                    <span className="section-label !text-center">CIÊNCIA + NATUREZA</span>
                    <h2 className="mb-[60px] text-[clamp(1.8rem,3vw,2.5rem)] text-center text-white">
                        O sal mais completo que você pode colocar na mesa da sua família.
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[60px]">
                    <FadeIn delay={0}>
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-10 flex gap-5 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                            <div>
                                <h3 className="text-white font-body font-bold text-xl mb-2">84+ elementos naturais. Intactos.</h3>
                                <p>O oceano levou milênios para equilibrar essa composição. Nós apenas colhemos. Sódio, magnésio, potássio, cálcio, cloretos - e mais de 79 elementos traço que o refino industrial remove. Nada é retirado. Nada é adicionado.</p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-10 flex gap-5 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                            <div>
                                <h3 className="text-white font-body font-bold text-xl mb-2 leading-tight">Colhido à mão. Lavado com água do oceano. Seco ao sol e ao vento.</h3>
                                <p>Nenhum branqueador. Nenhum antiagregante. Nenhum iodo artificial. O processo não mudou porque não precisava mudar - a natureza já havia feito o trabalho.</p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-10 flex gap-5 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                            <div>
                                <h3 className="text-white font-body font-bold text-xl mb-2">O sal que devolve o que falta.</h3>
                                <p>7 em cada 10 brasileiros consomem magnésio e potássio abaixo do ideal - dois minerais essenciais para músculo, coração, sono e equilíbrio hídrico. No QuanQton, chegam na proporção exata que o oceano estabeleceu.</p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-10 flex gap-5 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                            <div>
                                <h3 className="text-white font-body font-bold text-xl mb-2">A diferença que você sente.</h3>
                                <p>Milhares de famílias pelo mundo relatam mudanças em energia, sono, digestão e disposição. Não é coincidência - é o corpo recebendo o que sempre precisou e nunca encontrou no sal refinado.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-white/5">
                                    <th className="p-4 md:px-6 py-4 text-left font-body text-[0.8rem] tracking-[0.08em] uppercase text-brand-sky border-b border-white/10">Característica</th>
                                    <th className="p-4 md:px-6 py-4 text-center font-body text-[0.8rem] tracking-[0.08em] uppercase text-brand-sky border-b border-white/10 bg-white/5">QuanQton</th>
                                    <th className="p-4 md:px-6 py-4 text-center font-body text-[0.8rem] tracking-[0.08em] uppercase text-brand-sky border-b border-white/10">Sal Refinado</th>
                                    <th className="p-4 md:px-6 py-4 text-center font-body text-[0.8rem] tracking-[0.08em] uppercase text-brand-sky border-b border-white/10">Sal Rosa Himalaia</th>
                                </tr>
                            </thead>
                            <tbody className="text-[0.9rem] text-brand-silver">
                                <tr>
                                    <td className="p-4 md:px-6 py-4 text-left border-b border-white/10">Quantidade de minerais</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10 bg-white/5 text-white font-semibold">84+ minerais</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10">Apenas Sódio (isolado)</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10">84+ minerais</td>
                                </tr>
                                <tr>
                                    <td className="p-4 md:px-6 py-4 text-left border-b border-white/10">Processo</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10 bg-white/5 text-white font-semibold">Natural / Solar</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10">Industrial / Químico</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10">Mineração terrestre</td>
                                </tr>
                                <tr>
                                    <td className="p-4 md:px-6 py-4 text-left border-b border-white/10">Magnésio</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10 bg-white/5 text-white font-semibold"><span className="text-[#4caf50]">✓ Alto</span></td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10"><span className="text-brand-danger">✗ Removido</span></td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10"><span className="text-[#4caf50]">✓ Médio</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 md:px-6 py-4 text-left border-b border-white/10">Potássio</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10 bg-white/5 text-white font-semibold"><span className="text-[#4caf50]">✓ Alto</span></td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10"><span className="text-brand-danger">✗ Removido</span></td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10"><span className="text-[#4caf50]">✓ Médio</span></td>
                                </tr>
                                <tr>
                                    <td className="p-4 md:px-6 py-4 text-left border-b border-white/10">Recomendação nutricional</td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10 bg-white/5 text-white font-semibold"><span className="text-[#4caf50]">✓✓✓</span></td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10"><span className="text-brand-danger">✗</span></td>
                                    <td className="p-4 md:px-6 py-4 text-center border-b border-white/10"><span className="text-[#4caf50]">✓✓</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Comparison View (Cards) */}
                    <div className="md:hidden space-y-4">
                        {[
                            { label: 'Minerais', quan: '84+ minerais', refi: 'Apenas Sódio', hima: '84+ minerais' },
                            { label: 'Processo', quan: 'Natural / Solar', refi: 'Químico', hima: 'Mineração' },
                            { label: 'Magnésio', quan: '✓ Alto', refi: '✗ Zero', hima: '✓ Médio' },
                            { label: 'Potássio', quan: '✓ Alto', refi: '✗ Zero', hima: '✓ Médio' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                                <div className="bg-brand-sky/10 px-4 py-2 text-[0.7rem] uppercase tracking-wider font-bold text-brand-sky border-b border-white/5">
                                    {item.label}
                                </div>
                                <div className="grid grid-cols-3 text-[0.8rem]">
                                    <div className="p-3 text-center border-r border-white/5 bg-brand-sky/5">
                                        <div className="text-[0.6rem] text-brand-sky mb-1 uppercase font-bold">QuanQton</div>
                                        <div className="text-white font-semibold">{item.quan}</div>
                                    </div>
                                    <div className="p-3 text-center border-r border-white/5">
                                        <div className="text-[0.6rem] text-brand-silver/50 mb-1 uppercase">Refinado</div>
                                        <div className="text-brand-silver/80">{item.refi}</div>
                                    </div>
                                    <div className="p-3 text-center">
                                        <div className="text-[0.6rem] text-brand-silver/50 mb-1 uppercase">Himalaia</div>
                                        <div className="text-brand-silver/80">{item.hima}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
