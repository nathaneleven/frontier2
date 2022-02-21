import Header from '../src/components/molecules/Header'
import FooterFiber from '../src/components/molecules/FooterFiber'
import HeroFiber from '../src/components/organisms/Hero-fiber'
import Cta from '../src/components/organisms/Cta'
import FiberPlans from '../src/components/organisms/FiberPlans'
import AboutFiber from '../src/components/organisms/AboutFiber'

export default function Fiber() {
  return (
    <div>
      <Header />
      <HeroFiber />
      <Cta />
      <FiberPlans/>
      <AboutFiber/>
      <FooterFiber/>
    </div>
  )
}
