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