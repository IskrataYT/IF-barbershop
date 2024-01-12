import styled from 'styled-components'

const GoBackButton = styled('button')`
  background: #ccc;
  border: none;
  padding: 6px 28px;
  textAlign: center;
  textDecoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 25px 2px;
  cursor: pointer;
  transition: .1s;

  '&:hover': {
    background: '#e8ebea';
    transition: .1s;
  },
`

export default GoBackButton
