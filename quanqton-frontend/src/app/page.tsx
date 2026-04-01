import Header from '@/components/layout/Header'
import MobileMenu from '@/components/layout/MobileMenu'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

import SalScrollAnimation from '@/components/SalScrollAnimation'
import SocialProof from '@/components/sections/SocialProof'
import Story from '@/components/sections/Story'
import Testimonials from '@/components/sections/Testimonials'
import Problem from '@/components/sections/Problem'
import Benefits from '@/components/sections/Benefits'
import Pyramid from '@/components/sections/Pyramid'
import Minerals from '@/components/sections/Minerals'
import Products from '@/components/sections/Products'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Vender from '@/components/sections/Vender'

export default function Home() {
  return (
    <>
      <Header />
      <MobileMenu />
      <CartDrawer />

      <main className="overflow-clip w-full px-0 mx-0 bg-[var(--deep)]">
        <SalScrollAnimation />

        {/* Next Sections Slide OVER the Hero Scroll Animation */}
        <div className="relative z-20 bg-[var(--deep)] -mt-[100vh] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <SocialProof />
          <Story />
          <Testimonials />
          <Problem />
          <Pyramid />
          <Benefits />
          <Minerals />
          <Products />
          <Vender />
          <FAQ />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </>
  )
}
