import { clsx } from 'clsx'
import React from 'react'

export default function SocialProof() {
    return (
        <section id="social-proof" className="py-0 bg-brand-navy border-y border-brand-sky/20 overflow-hidden">
            <div className="flex h-16 items-center whitespace-nowrap overflow-hidden group">
                <div className="flex gap-0 animate-[marquee_30s_linear_infinite] w-max group-hover:[animation-play-state:paused]">
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              Milhares de famílias pelo mundo
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              84+ minerais preservados
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              Colhido artesanalmente do Atlântico
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              Zero refino, zero aditivos
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              LAUDO Oficial certificado
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              Satisfação garantida
            </span>
            {/* DUPLICATE TO CREATE INFINITE LOOP */}
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              Milhares de famílias pelo mundo
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              84+ minerais preservados
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              Colhido artesanalmente do Atlântico
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              Zero refino, zero aditivos
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              LAUDO Oficial certificado
            </span>
            <span className="inline-flex items-center px-12 font-body text-[0.9rem] font-medium text-brand-silver border-r border-white/10">
              Satisfação garantida
            </span>
                </div>
            </div>
        </section>
    )
}
