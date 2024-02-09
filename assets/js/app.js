/** 
 *      DARK MODE FUNCTIONALITY 
 **/
let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// Enable dark mode
const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

// Disable dark mode
const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', 'disabled');
}

// Check if dark mode is enabled in local storage
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Event listener for dark mode toggle button
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); 
    // Get form data and reset the form
    const formData = new FormData(event.target);
    event.target.reset();
}

