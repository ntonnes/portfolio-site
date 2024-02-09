// Function to show project details in a modal
function showProjectDetails(projectNumber) {
    // Get modal and its elements
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

    // Show the modal
    modal.style.display = 'block';
}

// Function to hide project details modal
function hideProjectDetails() {
  document.getElementById('project-details-modal').style.display = 'none';
}