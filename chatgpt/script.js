// Function to show content based on the clicked nav link
function showContent(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

// Initially, show the 'home' section when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showContent('home');
});
