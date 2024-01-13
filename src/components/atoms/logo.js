import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 100%;
  display: block;
  filter: ${(props) => props.filter || 'none'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`

const Logo = ({ src, alt, ...props }) => {
  const defaultSrc =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" // SVG wireframe
  return <StyledImg src={src || defaultSrc} alt={alt || 'Image'} {...props} />
}

export default Logo
