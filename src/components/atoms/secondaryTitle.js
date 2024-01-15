import styled from 'styled-components'

const SecondaryTitle = styled.h2`
  font-size: 40px;
  text-align: ${(props) => props.align || 'center'};
  font-family: 'EB Garamond', serif;
  font-weight: 800;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};

  @media (max-width: 1536px) {
    font-size: 38px;
  }

  @media (max-width: 1280px) {
    font-size: 36px;
  }

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }

  @media (max-width: 475px) {
    font-size: 30px;
  }
`

export default SecondaryTitle
