// const BookingCalendar = ({ bookings }) => {
//     const { openingTime, closingTime, Price, Holiday } = bookings;
//     const timeSlotDuration = 60;
//     const timeSlots = [];
//     let numDays = 7;
//     const dates = [];

//     const startDate = new Date();
//     startDate.setHours(parseInt(openingTime.split(":")[0]));
//     startDate.setMinutes(parseInt(openingTime.split(":")[1]));
//     const endDate = new Date();
//     endDate.setHours(parseInt(closingTime.split(":")[0]));
//     endDate.setMinutes(parseInt(closingTime.split(":")[1]));

//     const amPm = (hours) => (hours >= 12 ? "PM" : "AM");

//     const skipTimeSlots = ["11:00 AM to 12:00 PM", "3:00 PM to 4:00 PM"];

//     for (let time = startDate; time <= endDate; time = new Date(time.getTime() + timeSlotDuration * 60 * 1000)) {
//         const startHour12 = ((time.getHours() + 11) % 12) + 1;
//         const endHour12 = ((time.getHours() + 12) % 12) + 1;
//         const ampm = amPm(time.getHours());
//         const openingTime = `${startHour12}:${time.getMinutes().toString().padStart(2, "0")} ${ampm}`;
//         const closingTime = `${endHour12}:${time.getMinutes().toString().padStart(2, "0")} ${ampm}`;
//         const timeSlot = `${openingTime} to ${closingTime}`;


//         if (!skipTimeSlots.includes(timeSlot)) {
//             timeSlots.push(timeSlot);
//         }
//     }

//     for (let i = 0; i < numDays; i++) {
//         const date = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
//         const day = new Date(date).toLocaleString('en-US', { weekday: 'long' });
//         if (day == Holiday) {
//             numDays++
//             continue
//         }
//         dates.push(date);
//     }

//     const handleCellClick = (dateIndex, timeIndex) => {
//         const date = dates[dateIndex];
//         const time = timeSlots[timeIndex];
//         console.log(`Clicked on ${date.toLocaleDateString()} at ${time}`);
//         alert(`Clicked on ${date.toLocaleDateString()} at ${time}`);
//     };

//     return (
//         <div className="overflow-x-auto">
//             <table className="table-auto w-full border-collapse border-2 border-gray-800">
//                 <thead className="bg-gray-200">
//                     <tr>
//                         <th className="w-1/4 py-2 px-12 md:px-4 border-2 border-gray-800">Time Slots</th>
//                         {dates.map((date) => (
//                             <th key={date.toISOString()} className="w-1/7 py-2 px-4 border-2 border-gray-800">
//                                 {date.toLocaleDateString()}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {timeSlots.map((time, timeIndex) => (
//                         <tr key={time} className="border-2 border-gray-800">
//                             <td className="w-1/4 py-2 px-4 border-2 border-gray-800">{time}</td>
//                             {dates.map((date, dateIndex) => (
//                                 <td
//                                     key={date.toISOString() + time}
//                                     className="w-1/7 py-2 px-4 border-2 border-gray-800 cursor-pointer hover:bg-green-600 text-center bg-green-500"
//                                     onClick={() => handleCellClick(dateIndex, timeIndex)}
//                                 >
//                                     Book Now
//                                     <br />
//                                     <span className='font-semibold'> ₹ {Price}</span>
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default BookingCalendar


import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
import { bookingConfirm } from '../../../../utils/Helpers/Swal'
const BookingCalendar = ({ bookings }) => {
    const { openingTime, closingTime, Price, Holiday } = bookings;
    const timeSlotDuration = 60;
    const timeSlots = [];

    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false)
    const isDateDisabled = ({ date }) => {
        return date.getDay() === 3; // Disable Sundays and Saturdays
    };
    const today = new Date();
    const maxDate = new Date(today.getFullYear() + 1, today.getMonth() - 1, today.getDate());


    const amPm = (hours) => (hours >= 12 ? "PM" : "AM");

    const skipTimeSlots = ["11:00 AM to 12:00 PM", "3:00 PM to 4:00 PM"];



    return (
        <>
            <div className='flex'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center w-full px-5'>
                        <Calendar maxDate={maxDate} tileDisabled={isDateDisabled} minDate={new Date()} onChange={setDate} onClickDay={() => setShowTime(true)} />
                    </div>
                </div>
                <div className=' hidden lg:flex justify-center overflow-hidden text-2xl font-bold text-center lg:w-1/2 h-full py-20'>
                    <div>Choose your date & <br /> book your slot
                        <div className="relative w- pt-5 ">
                            <div className=" absolute w-full h-full" style={{ animation: "slide 2s ease-in-out infinite alternate" }}>
                                <span>
                                    <svg width="30" height="30" fill="currentColor" className="font-extrabold text-indigo-600" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Time startTime={openingTime} price={Price} endTime={closingTime} showTime={showTime} date={date} />
        </>
    );
}

export default BookingCalendar


function Time({ showTime, date, startTime, endTime, price }) {

    return (
        <div>
            {showTime ? <Times date={date} startTime={startTime} endTime={endTime} price={price} /> : null}
        </div>
    )
}





function Times({ date, startTime, endTime, price }) {

    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)
    // const [timeSlots, setTimeSlots] = useState([])
    const timeSlots = []
    // const startTime = '08:00'
    // const endTime = '14:00'
    const gap = 60
    const startDate = new Date(`2000-01-01T${startTime}:00`);
    const endDate = new Date(`2000-01-01T${endTime}:00`);
    const duration = endDate - startDate;
    const numSlots = Math.floor(duration / (gap * 60 * 1000));


    for (let i = 0; i < numSlots; i++) {
        const slotTime = new Date(startDate.getTime() + (i * gap * 60 * 1000));
        let time = slotTime.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' });
        if (time.split(':')[0].length === 1) time = '0' + time;
        timeSlots.push(time);
    }
    const brIndex = timeSlots.length / 2
    function displayInfo(e) {
        setInfo(true);
        // setEvent(e.target.innerText);
        // console.log(e.target.innerText);
    }

    return (

        <div className="w-full  md:px-20 py-5">
            <div className='flex px-3 mb-2 justify-between text-gray-400'>
                <p>Time Slots</p>
                <p>Price</p>
                <p>Available</p>
            </div>
            {timeSlots.map((times, index) => {
                return (
                    <div key={times} className="border-2 pl-5 flex justify-between rounded-md items-center mb-5 ">
                        <button onClick={(e) => displayInfo(e)}> {times} </button>
                        <p>₹ {price}</p>
                        <button className='bg-green-500 h-full p-[10px] rounded-md' onClick={(e) => bookingConfirm}>Book Now</button>
                    </div>
                )
            })}
        </div>
    )
}
