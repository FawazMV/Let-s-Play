function addHoursToDate(hours, time) {
    const [hoursStr, minutesStr] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hoursStr, 10) + hours);
    date.setMinutes(parseInt(minutesStr, 10));
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Usage example
const newTime = addHoursToDate(2, '10:00');
console.log(newTime); // output: 12:00 PM
const ls = (date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
const date = new Date();
date.setHours(10);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);


<form onSubmit={handleSubmit} className="max-w-sm mx-auto my-4">
    <label htmlFor="timeInput" className="block font-medium text-gray-700 mb-2">Enter a time:</label>
    <div className="flex items-center">
        <input
            type="time"
            id="timeInput"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mr-2 py-2 px-3 border border-gray-400 rounded-md text-gray-700 w-28"
        />
        <button type="submit" className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Add 2 hours
        </button>
    </div>
</form>



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