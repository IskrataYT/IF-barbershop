import ButtonSecondary from '../atoms/buttonSecondary'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const NavBar = styled.div`
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0;

  @media (max-width: 640px) {
    flex-direction: column;
    padding: 1em 0;
  }

  @media (max-width: 475px) {
    flex-direction: column;
    padding: 1em 0;
  }
`

const Hamburger = styled(FaBars)`
  display: none;
  font-size: 2rem;
  color: white;
  margin: 0 0.5em 0 auto;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

const Cross = styled(FaXmark)`
  display: none;
  font-size: 2rem;
  color: white;
  margin: 0 0.5em 0 auto;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between; // Add this line
  align-items: center; // This will vertically center the items
  width: 100%;
`

const Stupid = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`

function Navbar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 640)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 640)
      setIsMobile(window.innerWidth <= 640)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    if (window.innerWidth <= 640) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <NavBar>
      {isMobile && (
        <Container>
          <div style={{ width: '33%' }}></div>
          <Stupid style={{ width: '33%' }}>
            <img
              src="assets/Logo.svg"
              alt="Logo"
              style={{ width: '2em', margin: '0 3em 0 3em' }}
            />
          </Stupid>
          <div style={{ width: '33%' }}>
            {!isOpen && <Hamburger onClick={toggleMenu}></Hamburger>}
            {isOpen && <Cross onClick={toggleMenu}></Cross>}
          </div>
        </Container>
      )}
      {isOpen && (
        <>
          <ButtonSecondary to="/" margin={'0 1.5em 0 0'} mobilemargin={'0.4em 0'}>
            Home
          </ButtonSecondary>
          <ButtonSecondary to="/about" margin={'0 1.5em 0 0'} mobilemargin={'0.4em 0'}>
            About
          </ButtonSecondary>
          {!isMobile && (
            <img
              src="assets/Logo.svg"
              alt="Logo"
              style={{ width: '5%', margin: '0 3em 0 3em' }}
            />
          )}
          <ButtonSecondary
            to="/catalogue"
            margin={'0 1.5em 0 0'}
            mobilemargin={'0.4em 0'}
          >
            Catalogue
          </ButtonSecondary>
          <ButtonSecondary to="/book-an-appointment" mobilemargin={'0.4em 0'}>
            Booking
          </ButtonSecondary>
        </>
      )}
    </NavBar>
  )
}
export default Navbar
