// You can add JavaScript for interactivity here, such as smooth scrolling, form validation, etc.
// Example:
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

// Form Submission
function submitForm(event) {
    event.preventDefault();

    // Perform form validation and submission logic here
    // Example: You can use the Fetch API to send form data to a server
    const formData = new FormData(event.target);
    // Fetch API example:
    // fetch('/submit-form', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Form submission successful:', data);
    // })
    // .catch(error => {
    //     console.error('Error submitting form:', error);
    // });

    // Reset the form after submission
    event.target.reset();
}
