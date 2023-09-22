document.addEventListener("DOMContentLoaded", function () {
    const savedProjects = document.querySelectorAll(".sidebar__category");
    const projectNameElement = document.getElementById("projectName");
    const projectDetailsElement = document.getElementById("projectDetails");
    const clockElement = document.getElementById("clock");

    // Define startStopButton and resetButton if they exist in your HTML
    const startStopButton = document.getElementById("startStop");
    const resetButton = document.getElementById("reset");

    savedProjects.forEach(function (project) {
        project.addEventListener("click", function () {
            const projectName = project.innerText;
            const projectDetails = getProjectDetails(projectName);
            projectNameElement.textContent = projectName;
            projectDetailsElement.textContent = projectDetails;
        });
    });

    function getProjectDetails(projectName) {
        switch (projectName) {
            case "Inventory Management System":

                return "A web-based or desktop application to manage inventory, track stock levels, and generate reports for businesses";
            case "Real-time Data Analytics Dashboard":
                return "A dashboard that can process and visualize real-time data streams, making it suitable for monitoring network traffic, social media trends, or IoT sensor data";
            case "Traffic Management System":
                return "A system that uses sensors and real-time data to optimize traffic flow, reduce congestion, and improve transportation efficiency";
            // Add more cases for other saved projects
            default:
                return "No details available";
        }
    }

    let timerInterval;
    let running = false;
    let startTime = 0;

    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const seconds = totalSeconds % 60;
        const totalMinutes = Math.floor(totalSeconds / 60);
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function pad(value) {
        return value.toString().padStart(2, "0");
    }

    function updateTimer() {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        clockElement.textContent = formatTime(elapsedTime);
    }

    if (startStopButton && resetButton) {
        startStopButton.addEventListener("click", function () {
            if (running) {
                clearInterval(timerInterval);
                startStopButton.textContent = "Start";
            } else {
                startTime = new Date().getTime() - (startTime ? startTime - new Date().getTime() : 0);
                timerInterval = setInterval(updateTimer, 1000);
                startStopButton.textContent = "Stop";
            }
            running = !running;
        });

        resetButton.addEventListener("click", function () {
            clearInterval(timerInterval);
            clockElement.textContent = "00:00:00";
            running = false;
            startTime = 0;
            startStopButton.textContent = "Start";
        });
        
        
    }

    // Call updateTimer initially and every second
    updateTimer(); // Call initially
    setInterval(updateTimer, 1000); // Call every second
});
