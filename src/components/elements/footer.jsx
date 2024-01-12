import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import ButtonSecondary from '../atoms/buttonSecondary'
import SecondaryText from '../atoms/secondaryText'

const FooterContainer = styled.footer`
  background-color: #404040;
  color: white;
  text-align: center;
  padding: 1em;
  left: 0;
  bottom: 0;
`

function Footer() {
  return (
    <FooterContainer>
      <ButtonSecondary
        to={'https://www.facebook.com/p/Dikarl-Barber-shop-100063667568649/'}
        margin={'1em 1.5em 0 0'}
        mobilemargin={'1em 1.5em 0 0'}
      >
        <FaFacebook />
      </ButtonSecondary>
      <ButtonSecondary
        to={'https://www.instagram.com/dikarl_barber_shop/?hl=bg'}
        margin={'1em 0 0 0'}
        mobilemargin={'1em 1.5em 0 0'}
      >
        <FaInstagram />
      </ButtonSecondary>
      <SecondaryText>© 2023 by I&F Barbershop. All rights reserved.</SecondaryText>
    </FooterContainer>
  )
}

export default Footer
