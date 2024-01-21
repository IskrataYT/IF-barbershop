import styled from 'styled-components'
import PrimaryTitle from '../atoms/title'

const Container = styled.div`
  background-color: #262626;
  padding: 10px 10px;
  margin: auto auto;
  width: auto;
`
const SignInElement = () => {
  return (
    <Container>
      <PrimaryTitle>Hello World</PrimaryTitle>
    </Container>
  )
}

export default SignInElement
