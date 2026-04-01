"use client"

import { useState } from 'react'
import FadeIn from '../ui/FadeIn'
import { clsx } from 'clsx'

const faqs = [
    {
        question: "Por que o Sal QuanQton é úmido?",
        answer: "A umidade é a prova da sua pureza. Diferente do sal refinado, que é seco artificialmente em fornos a 600°C, nosso sal é seco naturalmente ao sol e ao vento. Essa umidade residual (cerca de 5 a 8%) é a água do próprio oceano, essencial para manter a estrutura viva dos mais de 84+ minerais intacta."
    },
    {
        question: "O Sal QuanQton contém iodo?",
        answer: "Sim, mas apenas o iodo naturalmente presente na água do mar (cerca de 1,5mg a 2mg por quilo). Não adicionamos iodo sintético (iodato de potássio), que é obrigatório por lei apenas para o sal refinado cloretado. Como o Sal QuanQton é classificado como Sal Marinho Integral Artesanal, ele mantém sua matriz original."
    },
    {
        question: "Crianças e hipertensos podem consumir?",
        answer: "Sim. Por manter o balanço natural entre sódio, potássio e magnésio, o corpo consegue metabolizar e excretar os excessos com facilidade - diferente do cloreto de sódio isolado, que retém líquidos e eleva a pressão. No entanto, recomendamos que pessoas com restrições médicas severas sempre consultem seu profissional de saúde."
    },
    {
        question: "Qual a diferença para o Sal do Himalaia?",
        answer: "O Sal do Himalaia é extraído de minas terrestres (rocha) através de explosões e mineração pesada, podendo conter metais pesados insolúveis. O Sal QuanQton é colhido na superfície, de forma sustentável, a partir do oceano atual - a fonte mais biodisponível de minerais para o plasma humano."
    },
    {
        question: "Como armazenar para não empedrar?",
        answer: "Como não usamos antiagregantes químicos (como o ferrocianeto de sódio), é natural que o sal aglomere levemente. Mantenha em recipiente de vidro ou cerâmica, preferencialmente fechado. Se empedrar, basta desfazer com os dedos ou com uma colher - os cristais são frágeis."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="bg-[radial-gradient(ellipse_at_top_right,#0a1e3d_0%,var(--color-brand-bg)_70%)]">
            <div className="container-custom">
                <FadeIn>
                    <span className="section-label !text-center">TIRE SUAS DÚVIDAS</span>
                    <h2 className="mb-[60px]">PERGUNTAS FREQUENTES</h2>
                </FadeIn>

                <div className="max-w-[800px] mx-auto flex flex-col gap-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div
                                    className={clsx(
                                        "bg-[#0a1e3d]/70 border rounded-xl overflow-hidden transition-colors duration-300",
                                        isOpen ? "border-brand-sky/40" : "border-white/10"
                                    )}
                                >
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full px-6 py-[22px] flex items-center justify-between gap-4 text-left text-base font-semibold text-white bg-transparent transition-colors hover:text-brand-sky"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.question}</span>
                                        <span
                                            className={clsx(
                                                "w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-[1.1rem] text-brand-sky transition-all duration-300",
                                                isOpen ? "bg-brand-sky/30 rotate-45" : "bg-brand-sky/15"
                                            )}
                                            aria-hidden="true"
                                        >
                                            +
                                        </span>
                                    </button>
                                    <div
                                        className={clsx(
                                            "px-6 overflow-hidden transition-all duration-400 ease-in-out",
                                            isOpen ? "max-h-[400px] pb-[22px] opacity-100" : "max-h-0 opacity-0"
                                        )}
                                    >
                                        <p className="text-[0.95rem] text-brand-silver">{faq.answer}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
