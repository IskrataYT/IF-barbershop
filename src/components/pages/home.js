import NavBar from '../elements/navbar'
import Footer from '../elements/footer'
import HeroSection from '../elements/heroSection'
import IntroductionSection from '../elements/introductionSection'
import RatingsCarousel from '../elements/ratingsCarousel'
import RatingsCard from '../elements/ratingCard'

function Home() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroSection />
      <IntroductionSection
        title="I&F Barbeshop"
        text="Welcome to I&F Barbershop, where tradition meets innovation. We are more than
        just a barbershop - we are a haven for gentlemen seeking the perfect look. At
        i&F, we blend the time-honored art of barbering with modern style and
        sophistication. Our skilled barbers are masters of their craft, offering
        everything from precision haircuts to expert beard trims. We believe that every
        man deserves to look and feel his best, and we’re committed to making that a
        reality for our clients. Experience the I&F difference today - where every cut
        is a masterpiece."
        imageUrl="assets/barbershop.jpg"
      />
      <RatingsCard></RatingsCard>
      <Footer></Footer>
    </div>
  )
}

export default Home
