function updateTime() {
    const now = new Date();
    
    // Day of the week
    const dayOfWeek = now.toLocaleDateString(undefined, { weekday: 'long' });
    document.getElementById('dayOfWeek').innerText = dayOfWeek;

    // Time of day
    const hours = now.getHours();
    let timeOfDay;
    if (hours < 12) {
        timeOfDay = "Morning";
    } else if (hours < 17) {
        timeOfDay = "Afternoon";
    } else if (hours < 21) {
        timeOfDay = "Evening";
    } else {
        timeOfDay = "Night";
    }
    document.getElementById('timeOfDay').innerText = timeOfDay;

    // Current time without leading zero
    const minutes = now.getMinutes();
    const hourString = hours % 12 || 12; // Convert to 12-hour format and remove leading zero
    const timeString = `${hourString}:${minutes < 10 ? '0' : ''}${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
    document.getElementById('timeDisplay').innerText = timeString;

    // Date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('dateDisplay').innerText = dateString;
}

// Update the time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately