import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  width: 100%;
  display: block;
  filter: ${(props) => props.filter || 'none'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  border-radius: 15px;
  border: solid 2px #d8cd90;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.8);
`

const Image = ({ src, alt, ...props }) => {
  const defaultSrc =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" // SVG wireframe
  return <StyledImg src={src || defaultSrc} alt={alt || 'Image'} {...props} />
}

export default Image
