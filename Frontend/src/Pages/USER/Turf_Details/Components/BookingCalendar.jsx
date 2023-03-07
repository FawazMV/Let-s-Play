const BookingCalendar = ({ bookings }) => {
    const { openingTime, closingTime, Price, Holiday } = bookings;
    const timeSlotDuration = 60;
    const timeSlots = [];
    let numDays = 7;
    const dates = [];

    const startDate = new Date();
    startDate.setHours(parseInt(openingTime.split(":")[0]));
    startDate.setMinutes(parseInt(openingTime.split(":")[1]));
    const endDate = new Date();
    endDate.setHours(parseInt(closingTime.split(":")[0]));
    endDate.setMinutes(parseInt(closingTime.split(":")[1]));

    const amPm = (hours) => (hours >= 12 ? "PM" : "AM");

    const skipTimeSlots = ["11:00 AM to 12:00 PM", "3:00 PM to 4:00 PM"];

    for (let time = startDate; time <= endDate; time = new Date(time.getTime() + timeSlotDuration * 60 * 1000)) {
        const startHour12 = ((time.getHours() + 11) % 12) + 1;
        const endHour12 = ((time.getHours() + 12) % 12) + 1;
        const ampm = amPm(time.getHours());
        const openingTime = `${startHour12}:${time.getMinutes().toString().padStart(2, "0")} ${ampm}`;
        const closingTime = `${endHour12}:${time.getMinutes().toString().padStart(2, "0")} ${ampm}`;
        const timeSlot = `${openingTime} to ${closingTime}`;


        if (!skipTimeSlots.includes(timeSlot)) {
            timeSlots.push(timeSlot);
        }
    }

    for (let i = 0; i < numDays; i++) {
        const date = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
        const day = new Date(date).toLocaleString('en-US', { weekday: 'long' });
        if (day == Holiday) {
            numDays++
            continue
        }
        dates.push(date);
    }

    const handleCellClick = (dateIndex, timeIndex) => {
        const date = dates[dateIndex];
        const time = timeSlots[timeIndex];
        console.log(`Clicked on ${date.toLocaleDateString()} at ${time}`);
        alert(`Clicked on ${date.toLocaleDateString()} at ${time}`);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border-2 border-gray-800">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="w-1/4 py-2 px-12 md:px-4 border-2 border-gray-800">Time Slots</th>
                        {dates.map((date) => (
                            <th key={date.toISOString()} className="w-1/7 py-2 px-4 border-2 border-gray-800">
                                {date.toLocaleDateString()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((time, timeIndex) => (
                        <tr key={time} className="border-2 border-gray-800">
                            <td className="w-1/4 py-2 px-4 border-2 border-gray-800">{time}</td>
                            {dates.map((date, dateIndex) => (
                                <td
                                    key={date.toISOString() + time}
                                    className="w-1/7 py-2 px-4 border-2 border-gray-800 cursor-pointer hover:bg-green-600 text-center bg-green-500"
                                    onClick={() => handleCellClick(dateIndex, timeIndex)}
                                >
                                    Book Now
                                    <br />
                                    <span className='font-semibold'> ₹ {Price}</span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookingCalendar