import React from 'react'
import SecondaryTitle from '../atoms/secondaryTitle'
import PrimaryText from '../atoms/text'
import Image from '../atoms/image'
import styled from 'styled-components'
import ButtonPrimary from '../atoms/buttonPrimary'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #262626;
  color: white;
  padding: 5%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 11px 18px 0px rgba(0, 0, 0, 0.35) inset;

  div {
    padding: 0 6% 0 6% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 810px) {
    flex-direction: column;

    button {
      margin: 50% 0 50% 0 !important;
    }
  }
`

function IntroductionSection({ title, text, imageUrl, isLeft }) {
  return (
    <Container>
      {isLeft ? (
        <>
          <div
            style={{
              padding: '0 0 0 10%',
            }}
          >
            <Image src={imageUrl} />
          </div>
          <div style={{ padding: '0 0 0 0' }}>
            <SecondaryTitle margin="0 0 10% 0">{title}</SecondaryTitle>
            <PrimaryText align="center">{text}</PrimaryText>
            <ButtonPrimary to="/about" margin="25% 0 0 0">
              Learn More
            </ButtonPrimary>
          </div>
        </>
      ) : (
        <>
          <div style={{ padding: '0 0 0 0' }}>
            <SecondaryTitle margin="0 0 10% 0">{title}</SecondaryTitle>
            <PrimaryText align="center">{text}</PrimaryText>
            <ButtonPrimary to="/about" margin="25% 0 0 0">
              Learn More
            </ButtonPrimary>
          </div>
          <div style={{ padding: '0 0 0 10%' }}>
            <Image src={imageUrl} />
          </div>
        </>
      )}
    </Container>
  )
}

export default IntroductionSection
