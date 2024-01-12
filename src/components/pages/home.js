import NavBar from '../elements/navbar'
import Footer from '../elements/footer'
import HeroSection from '../elements/heroSection'
import IntroductionSection from '../elements/introductionSection'

function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroSection />
      <IntroductionSection />
      <Footer></Footer>
    </div>
  )
}

export default Home
