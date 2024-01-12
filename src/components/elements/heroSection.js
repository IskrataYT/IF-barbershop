import styled from 'styled-components'
import LoopingVideo from '../atoms/video'
import PrimaryText from '../atoms/text'
import PrimaryTitle from '../atoms/title'
import Image from '../atoms/image'
import ButtonPrimary from '../atoms/buttonPrimary'
import Typewriter from 'typewriter-effect'
import { useEffect, useState, useRef } from 'react'

const Background = styled.div`
  position: relative;
  text-align: center;
  color: white;
  box-sizing: border-box;
`

const TextOver = styled.div`
  position: absolute;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 35%;
  padding: 0 5% 0 5%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 65%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0)
    ); /* adjust as needed */
    @media (max-width: 768px) {
      display: none;
      width: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0 0 0;
    background: rgba(0, 0, 0, 0.8);
  }
`

function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="heroSection">
      {!isMobile && (
        <Background>
          <LoopingVideo />
          <TextOver>
            <Image src="assets/Logo.svg" height="20%" />
            <PrimaryTitle margin="8% 0 8% 0">
              {' '}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Cutting Edge Style, Classic Comfort')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Experience the fusion of tradition and innovation')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Your style is our masterpiece')
                    .start()
                }}
                options={{
                  cursor: '', // This will remove the cursor
                }}
              />
            </PrimaryTitle>
            <PrimaryText>
              Experience the fusion of tradition and innovation at our barbershop. Where
              every snip is a step towards perfection, and your style is our masterpiece.
            </PrimaryText>
            <ButtonPrimary to={'/book-an-appointment'} margin={'40% 0 0 0'}>
              Book Now
            </ButtonPrimary>
          </TextOver>
        </Background>
      )}
      {isMobile && (
        <Background>
          <Image src="assets/Background-Long.jpg" height="40%" />
          <TextOver>
            <PrimaryTitle margin="8% 0 8% 0">
              {' '}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Cutting Edge Style, Classic Comfort')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Experience the fusion of tradition and innovation')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('Your style is our masterpiece')
                    .start()
                }}
                options={{
                  cursor: '', // This will remove the cursor
                }}
              />
            </PrimaryTitle>
            <PrimaryText padding={'5%'}>
              Experience the fusion of tradition and innovation at our barbershop. Where
              every snip is a step towards perfection, and your style is our masterpiece.
            </PrimaryText>
            <ButtonPrimary to={'/book-an-appointment'}>Book Now</ButtonPrimary>
          </TextOver>
        </Background>
      )}
    </div>
  )
}

export default HeroSection
