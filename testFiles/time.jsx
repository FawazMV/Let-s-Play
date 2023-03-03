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
