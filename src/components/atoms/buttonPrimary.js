import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'
import PrimaryText from './text'

const StyledButton = styled.button`
  border-radius: 25px;
  border: none;
  cursor: pointer;
  width: auto;
  color: black;
  background-color: #d8cd90;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '10px 20px'};
  transition: 0.5s;

  &:hover {
    background-color: #c3a13c;
    transition: 0.2s;
  }

  @media (max-width: 640px) {
    margin: ${(props) => props.mobilemargin || '0'};
  }

  @media (max-width: 475px) {
    margin: ${(props) => props.mobilemargin || '0'};
  }
`

const ButtonPrimary = ({ children, onClick, to, ...props }) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick()
    }
  }

  if (to) {
    return (
      <Link to={to}>
        <StyledButton {...props}>
          <PrimaryText>{children}</PrimaryText>
        </StyledButton>
      </Link>
    )
  }

  return (
    <StyledButton onClick={handleButtonClick} {...props}>
      <PrimaryText>{children}</PrimaryText>
    </StyledButton>
  )
}

export default ButtonPrimary
