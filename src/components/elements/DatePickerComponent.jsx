import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function DatePickerComponent({ selectedDate, setDate }) {
  return (
    <label>
      <Datepicker
        selected={selectedDate}
        onChange={(date) => setDate(date)}
        minDate={new Date()}
      />
    </label>
  )
}
