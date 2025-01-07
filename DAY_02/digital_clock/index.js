function updateClock() {
    const now = new Date();

    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Format date
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    // Update DOM elements
    document.getElementById('time').textContent = formattedTime;
    document.getElementById('date').textContent = `Today's Date: ${formattedDate}`;
}

// Initialize and update clock every second
setInterval(updateClock, 1000);
updateClock();
