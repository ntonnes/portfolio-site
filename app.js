document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Details Modal
function showProjectDetails(projectNumber) {
    const modal = document.getElementById('project-details-modal');
    const titleElement = document.getElementById('project-title');
    const descriptionElement = document.getElementById('project-description');
    const linkElement = document.getElementById('project-modal-link');

    // Update project details based on projectNumber
    if (projectNumber === 1) {
        titleElement.textContent = 'Project 1: Awesome Project';
        descriptionElement.textContent = 'This is a description of the awesome project. It includes details about the technologies used, challenges faced, and the outcome.';
        linkElement.href = '#';  // Update with the actual project link
    } else if (projectNumber === 2) {
        titleElement.textContent = 'Project 2: Amazing Website';
        descriptionElement.textContent = 'Another great project showcasing your skills and creativity. Provide insights into your role and contributions.';
        linkElement.href = '#';  // Update with the actual project link
    }

    modal.style.display = 'block';
}

function hideProjectDetails() {
    document.getElementById('project-details-modal').style.display = 'none';
}


function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    event.target.reset();
}

let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', 'disabled');
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});
