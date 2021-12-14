import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'

// const Calendar = (props) => {
//     return (
//         <div className='calendar'>
//             Calendar will be there soon
//         </div>
//     )
// }


const localizer = momentLocalizer(moment)

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      events={[]}
      style={{ height: 500 }}
      title="Test"
    />
  </div>
)

export default MyCalendar;
// export default Calendar;