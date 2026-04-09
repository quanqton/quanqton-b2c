"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Barlow_Condensed, Inter } from 'next/font/google';
import { Check, Shield, Truck, Leaf } from 'lucide-react';

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProducts = () => {
    const productsEl = document.getElementById('produtos') || document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative min-h-screen w-full bg-[#FFFFFF] text-[#1a1a1a] flex flex-col justify-between overflow-hidden ${inter.className}`}>

      {/* Container Principal */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2">

        {/* Coluna Direita: Produto - on mobile appears ABOVE copy */}
        <div className="relative w-full h-full min-h-[340px] lg:min-h-[100vh] order-1 lg:order-2 z-10 overflow-hidden">
          <Image
            src="/images/produto.png"
            alt="QuanQton Ocean Salt — O Sal Perfeito"
            fill
            className={`absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply transition-opacity duration-1000 ease-[cubic-bezier(0.2,0,0,1)] ${mounted ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4)) drop-shadow(0 0 80px rgba(0,212,255,0.08))',
              transitionDelay: '300ms'
            }}
            priority
          />
        </div>

        {/* Coluna Esquerda: Copy - on mobile appears BELOW product */}
        <div className="w-full flex justify-end order-2 lg:order-1 relative z-20 min-h-[100vh]">
          <div className="w-full max-w-[640px] h-full flex flex-col justify-center px-6 lg:px-10 xl:pl-0 pt-16 pb-24 lg:pt-0 lg:pb-0">

            {/* 1. Prova Social no Topo */}
            <div
              className={`flex items-center gap-3 transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Cliente QuanQton"
                    className="w-8 h-8 rounded-full border border-[#0a7a8f] inline-block object-cover"
                  />
                ))}
              </div>
              <p className="text-[16px] text-[#1a1a1a] font-medium">Mais de 25.000 famílias já usaram QuanQton.</p>
            </div>

            {/* 2. Eyebrow */}
            <div
              className={`mt-4 lg:mt-6 flex items-center gap-3 transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-[20px] h-[2px] bg-[#0a7a8f]"></div>
              <span className="text-[13px] uppercase tracking-[0.2em] text-[#0a7a8f] font-semibold">Sal marinho integral · Oceano Atlântico</span>
            </div>

            {/* 3. Headline */}
            <h1 className="mt-4 flex flex-col">
              <span
                className={`block ${barlowCondensed.className} font-[900] text-[52px] md:text-[96px] text-[#0a0a0a] uppercase leading-[0.95] tracking-[-0.01em] transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                  }`}
                style={{ transitionDelay: '400ms' }}
              >
                O SAL PERFEITO.
              </span>
              <span
                className={`block mt-1 lg:mt-2 ${barlowCondensed.className} font-normal text-[22px] md:text-[32px] text-[#1a1a1a] leading-[1.2] tracking-[-0.01em] transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                  }`}
                style={{ transitionDelay: '550ms' }}
              >
                Com tudo que o oceano colocou.<br />
                Sem nada que a indústria tirou.
              </span>
            </h1>

            {/* 4. Bullets de Diferencial */}
            <ul className="mt-6 flex flex-col gap-[14px]">
              {[
                "80+ minerais preservados pelo oceano",
                "Zero refino, zero aditivos, zero branqueador",
                "Colhido artesanalmente — exatamente como a natureza criou"
              ].map((text, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-3 text-[15px] md:text-[18px] text-[#1a1a1a] transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'
                    }`}
                  style={{ transitionDelay: `${700 + (idx * 100)}ms` }}
                >
                  <Check className="w-[18px] h-[18px] text-[#0a7a8f] flex-shrink-0 mt-[2px]" strokeWidth={3} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* 5. CTA Principal */}
            <div
              className={`mt-8 lg:mt-10 transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'
                }`}
              style={{ transitionDelay: '900ms' }}
            >
              <button
                onClick={scrollToProducts}
                className={`${barlowCondensed.className} font-bold text-[15px] uppercase tracking-[0.1em] text-[#FFFFFF] bg-[#0a0a0a] rounded-[2px] px-[48px] py-[20px] hover:bg-[#0a7a8f] hover:text-[#FFFFFF] transition-colors duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7a8f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF] cursor-pointer`}
              >
                QUERO O SAL PERFEITO &rarr;
              </button>
            </div>

            {/* 6. Micro-confiança */}
            <div
              className={`mt-4 flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 text-[13px] text-[#666666] transition-all duration-700 ease-out transform ${mounted ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="flex items-center gap-[6px]">
                <Shield className="w-[14px] h-[14px]" />
                <span>Satisfação garantida</span>
              </div>
              <span className="hidden lg:inline font-bold">·</span>
              <div className="flex items-center gap-[6px]">
                <Truck className="w-[14px] h-[14px] text-[#0a7a8f]" />
                <span className="text-[#0a7a8f] font-bold">Frete bonificado — valor do frete volta em mais sal!</span>
              </div>
              <span className="hidden lg:inline font-bold">·</span>
              <div className="flex items-center gap-[6px]">
                <Leaf className="w-[14px] h-[14px]" />
                <span>100% natural, sem aditivos</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
