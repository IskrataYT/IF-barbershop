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
  justify-content: cetner;

  @media (max-width: 810px) {
    flex-direction: column;

    div {
      padding: 0 6% 0 6% !important;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    h1,
    p {
      text-align: center;
    }

    button {
      margin: 50% 0 50% 0 !important;
    }
  }
`

function IntroductionSection({ title, text, imageUrl }) {
  return (
    <Container>
      <div style={{ padding: '0 0 0 0' }}>
        <SecondaryTitle align="left" margin="0 0 10% 0">
          {title}
        </SecondaryTitle>
        <PrimaryText>{text}</PrimaryText>
        <ButtonPrimary to="/about" margin="10% 0 0 0">
          Learn More
        </ButtonPrimary>
      </div>
      <div style={{ padding: '0 0 0 10%' }}>
        <Image src={imageUrl} />
      </div>
    </Container>
  )
}

export default IntroductionSection
