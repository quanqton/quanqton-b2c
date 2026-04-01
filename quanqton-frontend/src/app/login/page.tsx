import Link from 'next/link'

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#040B16] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background ambiance */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,21,50,0.5)_0%,transparent_100%)] pointer-events-none" />

            <div className="w-full max-w-md p-8 relative z-10">
                <div className="flex justify-center mb-8">
                    <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                        <img src="/LOGO.png" alt="QuanQton" className="w-[120px] h-[120px] object-contain drop-shadow-2xl" />
                    </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <h1 className="text-2xl font-accent italic text-white text-center mb-2">Acesso Exclusivo</h1>
                    <p className="text-brand-silver text-sm text-center mb-8 font-body">Bem-vindo(a) ao seu portal de saúde</p>

                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-brand-silver">E-mail</label>
                            <input
                                type="email"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-sky/50 transition-colors"
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-brand-silver flex justify-between">
                                <span>Senha</span>
                                <a href="#" className="text-brand-sky hover:text-white transition-colors">Esqueceu?</a>
                            </label>
                            <input
                                type="password"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-sky/50 transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full bg-gradient-to-r from-brand-blue to-brand-navy hover:from-brand-blue/80 hover:to-brand-navy/80 text-white font-bold uppercase tracking-wider text-sm py-4 rounded-xl mt-4 transition-all shadow-lg"
                        >
                            Entrar ma minha conta
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-brand-silver">
                        Ainda não tem conta? <Link href="/#quero-vender" className="text-brand-sky font-medium hover:text-white transition-colors">Criar agora</Link>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-brand-silver hover:text-white text-sm transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Voltar ao início
                    </Link>
                </div>
            </div>
        </main>
    )
}
