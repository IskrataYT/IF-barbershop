import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'
import PrimaryText from './text'

const StyledButton = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  background: none;
  transition: 0.2s;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};

  &:hover {
    color: #d8cd90;
    transition: 0.2s;
  }

  @media (max-width: 640px) {
    margin: ${(props) => props.mobilemargin || '0'};
  }

  @media (max-width: 475px) {
    margin: ${(props) => props.mobilemargin || '0'};
  }
`

const ButtonSecondary = ({ children, onClick, to, ...props }) => {
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

export default ButtonSecondary
