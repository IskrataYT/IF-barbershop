import styled from 'styled-components'

const PrimaryTitle = styled.h1`
  font-size: 48px;
  text-align: ${(props) => props.align || 'center'};
  text-transform: uppercase;
  font-weight: 800;
  font-family: 'EB Garamond', serif;
  color: #d8cd90;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};

  @media (max-width: 1536px) {
    font-size: 46px;
  }

  @media (max-width: 1280px) {
    font-size: 44px;
  }

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 640px) {
    font-size: 34px;
  }

  @media (max-width: 475px) {
    font-size: 30px;
  }
`

export default PrimaryTitle
