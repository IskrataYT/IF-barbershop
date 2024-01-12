import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../atoms/buttonPrimary'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`

const Input = styled.input`
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

export default function FormComponent({
  service,
  setService,
  phoneNumber,
  setPhoneNumber,
  name,
  setName,
  onSubmit,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value="beard">Beard</option>
        <option value="hair">Hair</option>
        <option value="beardAndHair">Hair and beard</option>
      </select>
      <Input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div style={{ width: '7%' }}>
        <ButtonPrimary type="submit">Submit</ButtonPrimary>
      </div>
    </Form>
  )
}
