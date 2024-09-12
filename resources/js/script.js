// Functionality for the Hide/Show Schedule Button

// Select the Hide/Show button and schedule container
const toggleButton = document.getElementById('toggle-schedule');
const scheduleContainer = document.getElementById('schedule-container');

// Ensure both elements exist before adding event listeners
if (toggleButton && scheduleContainer) {
    toggleButton.addEventListener('click', function () {
        if (scheduleContainer.style.display === 'none') {
            // Show the schedule
            scheduleContainer.style.display = 'block';
            toggleButton.textContent = 'Hide Schedule';
        } else {
            // Hide the schedule
            scheduleContainer.style.display = 'none';
            toggleButton.textContent = 'Show Schedule';
        }
    });
}

// Functionality for the Name Input Form

// Select the form and welcome message
const welcomeForm = document.getElementById('welcome-form');
const welcomeMessage = document.getElementById('welcome-message');

// Ensure both elements exist before adding event listeners
if (welcomeForm && welcomeMessage) {
    welcomeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from refreshing the page
        const nameInput = document.getElementById('name-input').value;

        // Ensure the name input is not empty before changing the text
        if (nameInput.trim() !== "") {
            welcomeMessage.textContent = `Welcome, ${nameInput}!`;
        }
    });
}
