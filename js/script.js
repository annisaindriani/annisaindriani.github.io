/* function show pop up message */

document.addEventListener("DOMContentLoaded", function() {
    // Show the popup when the page loads
     document.getElementById('popup-overlay').style.display = 'flex';
});

function closePopup() {
    // Close the popup when the Close button is clicked
        document.getElementById('popup-overlay').style.display = 'none';
    }

/* function update greetings text */

function updateGreeting(){
    const iconElement = document.getElementById('greetings-icon');
    const messageElement = document.getElementById('greetings-msg');
    const now = new Date();
    const hour = now.getHours();

    let iconClass;
    let message;

    if(hour >= 5 && hour < 12){
        iconClass = 'fa-cloud-sun'; 
        message = 'Good Morning!';
    } else if(hour >= 12 && hour < 18){
        iconClass = 'fa-sun'; 
        message = 'Good Afternoon!';
    } else if(hour >= 18 && hour < 22){
        iconClass = 'fa-cloud-moon'; 
        message = 'Good Evening!';
    } else{
        iconClass = 'fa-moon'; 
        message = 'Good Night!';
    }

    iconElement.classList.remove('fa-cloud-sun', 'fa-sun', 'fa-cloud-moon', 'fa-moon');
    iconElement.classList.add(iconClass);
    messageElement.textContent = message;
}

updateGreeting();
setInterval(updateGreeting, 60000);

/* function to show hidden text when the toggle is clicked */

const toggleButtons = document.querySelectorAll('.toggle-button');
const hiddenTexts = document.querySelectorAll('.hidden-text');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => toggleHiddenText(index));
});

function toggleHiddenText(index) {
    const hiddenText = hiddenTexts[index];
    // Toggle the display property of the corresponding hidden text
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
    } else {
        hiddenText.style.display = 'none';
    }
}

