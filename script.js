// FitHit30M Fitness App

// Function for user registration
function registerUser(username, password) {
    // Registration logic here
    console.log('User registered:', username);
}

// Function to track workouts over 30 days
function trackWorkout(day, workout) {
    // Logic for tracking workouts
    console.log(`Day ${day}: ${workout} tracked.`);
}

// Function to update progress bar
function updateProgressBar(daysCompleted) {
    const progressBar = document.getElementById('progressBar');
    const percentage = (daysCompleted / 30) * 100;
    progressBar.style.width = percentage + '%';
    console.log(`Progress bar updated to ${percentage}%.`);
}

// Button functions
function handleButtonClick(action) {
    switch (action) {
        case 'register':
            // Call registration function
            registerUser('exampleUser', 'examplePass');
            break;
        case 'track':
            // Track workout for day 1
            trackWorkout(1, 'Running');
            break;
        case 'updateProgress':
            // Update progress bar based on days completed
            updateProgressBar(15);
            break;
        default:
            console.log('Unknown action:', action);
    }
}

// Initialize app
function initApp() {
    console.log('FitHit30M app initialized.');
    // Set up event listeners for buttons
    document.getElementById('registerBtn').addEventListener('click', () => handleButtonClick('register'));
    document.getElementById('trackBtn').addEventListener('click', () => handleButtonClick('track'));
    document.getElementById('updateProgressBtn').addEventListener('click', () => handleButtonClick('updateProgress'));
}

// Start the app
window.onload = initApp;