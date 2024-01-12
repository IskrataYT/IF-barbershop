import styled from 'styled-components'

const SecondaryText = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 17px;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  font-weight: 300;

  @media (max-width: 1536px) {
    font-size: 16px;
  }

  @media (max-width: 1280px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 640px) {
    font-size: 10px;
  }

  @media (max-width: 475px) {
    font-size: 9px;
  }
`
export default SecondaryText
