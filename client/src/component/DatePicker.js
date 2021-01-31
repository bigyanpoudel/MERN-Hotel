import React from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates'
import './DatePicker.css'
const DatePicker = ({
    startDate,
    endDate,
    SetEndDate,
    SetStartDate
}) => {
    const [focusedInput,SetFocusedInput] = React.useState(null);
    const dateChangeController = ({startDate,endDate})=>{
        SetStartDate(startDate);
        SetEndDate(endDate);
    }
    return (
        <div>
             <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={dateChangeController} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => SetFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                showClearDates={true}
                startDatePlaceholderText="Check-in date"
                endDatePlaceholderText="Check-out date"
                showDefaultInputIcon={true}
                />
        </div>
    )
}

export default DatePicker
