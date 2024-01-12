import styled from 'styled-components'

const SecondaryTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  font-family: 'EB Garamond', serif;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`

export default SecondaryTitle
