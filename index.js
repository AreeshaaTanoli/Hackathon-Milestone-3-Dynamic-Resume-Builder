// Elements
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Generate Resume Functionality
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting in the traditional way
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        // Generate resume HTML
        var resumeHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n            <p><strong>Description:</strong> ").concat(description, "</p>\n        ");
        // Display generated resume
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error('Resume form or output div not found.');
}
