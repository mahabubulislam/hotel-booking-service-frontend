'use client'
import { useState } from 'react'
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker'
type DateStyle = {
  className?: string
  footer?: boolean
  inputClassName?: string
}
const DatePicker = ({ className, footer, inputClassName }: DateStyle) => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(11))
  })

  const handleValueChange = (newValue: DateValueType) => {
    console.log('newValue:', newValue)
    setValue(newValue)
  }
  return (
    <Datepicker
      containerClassName={className}
      popoverDirection='down'
      showFooter={footer}
      value={value}
      inputClassName={inputClassName}
      onChange={handleValueChange}
      primaryColor='teal'
    />
  )
}

export default DatePicker
