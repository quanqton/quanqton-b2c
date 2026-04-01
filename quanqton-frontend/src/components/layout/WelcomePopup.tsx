'use client'

import { useEffect, useState } from 'react'

export default function WelcomePopup() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('quanqton_popup_seen')) {
            const timer = setTimeout(() => {
                setShow(true)
            }, 45000)

            const handleMouseLeave = (e: MouseEvent) => {
                if (e.clientY <= 0) {
                    setShow(true)
                }
            }
            document.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                clearTimeout(timer)
                document.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    const handleClose = () => {
        setShow(false)
        localStorage.setItem('quanqton_popup_seen', 'true')
    }

    if (!show) return null

    return (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4">
            <div className="bg-[#0a1e3f] border border-brand-blue/30 rounded-xl p-8 md:p-10 max-w-[450px] w-full text-center relative" style={{ animation: 'fadeUp 0.4s ease-out' }}>
                <button onClick={handleClose} className="absolute top-4 right-4 text-brand-silver hover:text-white text-2xl transition-colors">×</button>
                <span className="text-4xl block mb-4">🌊</span>
                <h2 className="text-2xl font-display text-white mb-3 tracking-wide">Você está a um passo da saúde integral.</h2>
                <p className="text-brand-silver text-lg mb-6">Ganhe 10% de desconto na sua primeira compra de Sal QuanQton. O oceano inteiro na sua mesa.</p>
                
                <div className="bg-black/30 border border-dashed border-brand-sky p-4 rounded-lg mb-6">
                    <span className="block text-sm text-brand-silver mb-1">CUPOM: 10% de desconto</span>
                    <strong className="text-2xl text-brand-sky tracking-widest uppercase">QUANQTON10</strong>
                </div>

                <a href="#produtos" onClick={handleClose} className="btn-primary w-full block py-4 text-lg mb-4">QUERO MEU DESCONTO →</a>
                
                <button onClick={handleClose} className="text-sm text-brand-silver hover:text-white underline transition-colors">
                    Não, obrigado - continuar explorando
                </button>
            </div>
            <style jsx>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    )
}
