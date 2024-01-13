import React from 'react'
import PrimaryTitle from '../atoms/title'
import PrimaryText from '../atoms/text'
import Image from '../atoms/image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #262626;
  color: white;
  padding: 5%;
  align-items: center;
  justify-content: cetner;

  @media (max-width: 768px) {
    flex-direction: column;

    div{
      padding{ 0 10% 0 10%}
    }

    h1, p{
      text-align: center;
      margin: 0 0 10% 0 ;
    }


  }
`

function IntroductionSection({ title, text, imageUrl }) {
  return (
    <Container>
      <div style={{ padding: '0 0 0 0' }}>
        <PrimaryTitle align="left" margin="0 0 10% 0">
          {title}
        </PrimaryTitle>
        <PrimaryText>{text}</PrimaryText>
      </div>
      <div style={{ padding: '0 0 0 10%' }}>
        <Image src={imageUrl} />
      </div>
    </Container>
  )
}

export default IntroductionSection
