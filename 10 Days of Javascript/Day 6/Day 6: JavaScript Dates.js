function getDayName(dateString) {
    let dayName;

    // Write your code here
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(dateString)
    dayName = date.getDay();

    return days[dayName];
}