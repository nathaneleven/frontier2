import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import HeroFiber from '../src/components/organisms/Hero-fiber'
import Cta from '../src/components/organisms/Cta'
import CompleteOrder from '../src/components/organisms/CompleteOrder'
import Services from '../src/components/organisms/Services'

export default function Fiber() {
  return (
    <div>
      <Header />
      <HeroFiber />
      <Cta />

      <Footer/>
    </div>
  )
}
