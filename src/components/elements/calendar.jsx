import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DatePickerComponent from './DatePickerComponent.jsx'
import TimePickerComponent from './TimePickerComponent'
import FormComponent from './serviceForm.jsx'
import styled from 'styled-components'
import { FaAngleLeft } from 'react-icons/fa'
import { format } from 'date-fns'

export default function Calendar() {
  const [selectedDate, setDate] = useState(null)
  const [selectedTime, setTime] = useState(null)
  const [showDatePicker, setShowDatePicker] = useState(true)
  const [service, setService] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')

  const GoBackButton = styled.button`
    border: transparent;
    background-color: transparent;
    border-radius: 25px;
    color: #cccccc;
    padding: 6px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 25px 2px;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background-color: #e8ebea;
      transition: 0.1s;
    }
  `

  const [fetchedTimes, setFetchedTimes] = useState([])

  useEffect(() => {
    if (selectedDate) {
      axios
        .post('/api/getTimes', { date: format(selectedDate, 'dd/MM/yy') })
        .then((response) => {
          console.log(response)
          setFetchedTimes(response.data)
        })
        .catch((error) => {
          console.error('There was an error!', error)
        })
    }
  }, [selectedDate])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('/api/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: format(selectedDate, 'dd/MM/yy'),
        time: selectedTime,
        service: service,
        phoneNumber: phoneNumber,
        name: name,
      }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      {showDatePicker ? (
        <DatePickerComponent
          selectedDate={selectedDate}
          setDate={(date) => {
            setDate(date)
            setShowDatePicker(false)
          }}
        />
      ) : (
        <div>
          <GoBackButton onClick={() => setShowDatePicker(true)}>
            <FaAngleLeft fontSize={36} />
          </GoBackButton>
          <TimePickerComponent
            selectedTime={selectedTime}
            setTime={setTime}
            fetchedTimes={fetchedTimes}
          />
          <FormComponent
            service={service}
            setService={setService}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            name={name}
            setName={setName}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  )
}
