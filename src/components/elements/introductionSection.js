import styled from 'styled-components'
import PrimaryTitle from '../atoms/title'
import PrimaryText from '../atoms/text'
import Image from '../atoms/image'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #262626;
  color: white;
  text-align: center;
  padding: 7% 0 0 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

function IntroductionSection() {
  return (
    <Container>
      <div style={{ width: '40%', margin: '0 0 0 7%' }}>
        <PrimaryTitle>I&F Barbershop</PrimaryTitle>
        <PrimaryText padding="0 10%">
          Welcome to I&F Barbershop, where tradition meets innovation. We are more than
          just a barbershop - we are a haven for gentlemen seeking the perfect look. At
          i&F, we blend the time-honored art of barbering with modern style and
          sophistication. Our skilled barbers are masters of their craft, offering
          everything from precision haircuts to expert beard trims. We believe that every
          man deserves to look and feel his best, and we’re committed to making that a
          reality for our clients. Experience the I&F difference today - where every cut
          is a masterpiece.
        </PrimaryText>
      </div>
      <div style={{ width: '40%', margin: '0 10% 0 0' }}>
        <Image src="assets/barbershop.jpg" height="80%" />
      </div>
    </Container>
  )
}

export default IntroductionSection
