// Elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement | null;

// Function to generate resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from refreshing the page

        // Retrieve values from the form fields
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;

        // Generate HTML for the resume
        const resumeHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;

        // Display the generated resume
        resumeOutput.innerHTML = resumeHTML;
    });
} else {
    console.error('Form or output div not found in the DOM.');
}
