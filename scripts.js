// Personalization Features
let textSize = 1; // Initial text size

// Increase Text Size
document.getElementById('increaseText').addEventListener('click', () => {
    textSize += 0.1;
    document.documentElement.style.fontSize = `${textSize}em`;
});

// Decrease Text Size
document.getElementById('decreaseText').addEventListener('click', () => {
    textSize = Math.max(0.5, textSize - 0.1); // Ensure text size doesn't go below 0.5em
    document.documentElement.style.fontSize = `${textSize}em`;
});



// Helper function to get contrasting text color (white or black) based on theme color
function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white'; // Returns white for dark colors and black for light colors
}


// Search Functionality
const doctors = ["Dr. Jane Doe", "Dr. John Smith", "Dr. Emma Brown"];
const cities = ["London", "Manchester", "Birmingham"];

function searchDoctors() {
    const cityInput = document.getElementById('city').value.toLowerCase();
    const doctorInput = document.getElementById('doctor').value.toLowerCase();

    if (cities.includes(cityInput) && doctors.some(doctor => doctor.toLowerCase().includes(doctorInput))) {
        alert(`Searching for ${doctorInput} in ${cityInput}...`);
    } else {
        alert("No results found. Please check the doctor or city name.");
    }
}

// Submit Booking Form
function submitBooking(event) {
    event.preventDefault();
    alert("Your appointment has been booked successfully!");
    document.getElementById('bookingForm').reset();
}

// Submit Question Form
function submitQuestion(event) {
    event.preventDefault();
    alert("Your question has been submitted successfully!");
    document.getElementById('questionForm').reset();
}

// Placeholder functions for handling form submissions
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    console.log("Login with:", email, password);
    // Add your login logic here
}

function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    console.log("Sign-up with:", email, password);
    // Add your sign-up logic here
}
