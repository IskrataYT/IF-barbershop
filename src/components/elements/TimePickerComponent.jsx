import React from 'react'
import Dropdown from '../atoms/dropdown'

export default function TimePickerComponent({ selectedTime, setTime, fetchedTimes }) {
  const times = [
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ]

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Dropdown
        options={times}
        onChange={setTime}
        isDisabled={(option) => fetchedTimes.includes(option)}
        selectedOption={selectedTime}
        defaultPrompt={'Select Time'}
        style={{ width: '50%' }} // Adjust this to change the size of the dropdown
      />
    </div>
  )
}
