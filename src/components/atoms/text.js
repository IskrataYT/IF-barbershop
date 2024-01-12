import styled from 'styled-components'

const PrimaryText = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 22px;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  font-weight: 300;

  @media (max-width: 1536px) {
    font-size: 22px;
  }

  @media (max-width: 1280px) {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }

  @media (max-width: 475px) {
    font-size: 18px;
  }
`
export default PrimaryText
