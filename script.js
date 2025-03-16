// Get all the elements that we need to interact with
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let darkModeButton = document.querySelector('.toggle-btn'); // Dark mode button
let body = document.body; // Body element
let moonIcon = document.getElementById('moon-icon'); // Moon icon
let sunIcon = document.getElementById('sun-icon'); // Sun icon

// Active Navigation Bar - Highlight the active link when clicked
const links = document.querySelectorAll('.navbar a');

// Add event listener to each link in the navbar
links.forEach(link => {
    link.addEventListener('click', function () {
        // Remove active class from all links
        links.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

// Toggle dark mode when the dark mode button is clicked
darkModeButton.onclick = () => {
    body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    moonIcon.classList.toggle('active'); // Toggle active class for moon icon
    sunIcon.classList.toggle('active'); // Toggle active class for sun icon

    // Toggle the visibility of the icons based on dark mode
    if (body.classList.contains('dark-mode')) {
        moonIcon.style.display = 'none'; // Hide moon icon in dark mode
        sunIcon.style.display = 'block'; // Show sun icon in dark mode
    } else {
        sunIcon.style.display = 'none'; // Hide sun icon in light mode
        moonIcon.style.display = 'block'; // Show moon icon in light mode
    }
};

// Form Validation for Contact Form - Ensure all fields are filled
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', function (event) {
    // Get form field values
    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.querySelector('textarea').value;

    // Check if any field is empty and prevent form submission if true
    if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all fields before submitting the form.');
    }
});

// Set the initial state of icons based on the current theme
if (body.classList.contains('dark-mode')) {
    moonIcon.style.display = 'none'; // Hide moon icon if dark mode is active initially
    sunIcon.style.display = 'block'; // Show sun icon if dark mode is active initially
} else {
    sunIcon.style.display = 'none'; // Hide sun icon if dark mode is not active initially
    moonIcon.style.display = 'block'; // Show moon icon if dark mode is not active initially
}

// Function to toggle the description visibility in project cards
function toggleDescription(button) {
    // Get the description paragraph corresponding to the clicked "Read More" button
    const description = button.previousElementSibling;

    // Toggle the description display (show or hide)
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block"; // Show the description
        button.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
        description.style.display = "none"; // Hide the description
        button.textContent = "Read More"; // Change button text back to "Read More"
    }
}

// Dynamic Projects - Define project data
const projectsData = [
    {
        title: "Portfolio Website",
        description: "My second project is my very first personal portfolio website, which showcases my skills, projects, and journey as a budding web developer. The site includes several sections like Home, About Me, Skills, Projects, and Contact, each designed to highlight my achievements and showcase the technologies I'm currently learning. The website's layout is responsive and built with HTML and CSS, with interactive elements such as navigation bars and dynamic content sections. I also added features like dark mode for better user experience, and dynamic project cards with Read More functionality, where users can explore detailed descriptions of the projects. This project serves as a personal showcase of my web development skills and a stepping stone toward mastering more complex web technologies.",
        image: "2ndProject.png",
        link: "#"
    }
];

// Function to create and add project cards dynamically
function addProjects() {
    const projectsContainer = document.querySelector('.projects-box');

    projectsData.forEach(project => {
        // Create the project card div element
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        // Create the image element for the project
        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = "Project Image";

        // Create the project title element
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        // Create the description element (initially hidden)
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDescription.classList.add('project-description');
        projectDescription.style.display = "none"; // Hide initially

        // Create the "Read More" button
        const readMoreButton = document.createElement('div');
        readMoreButton.classList.add('btn');
        readMoreButton.textContent = 'Read More';

        // Add the toggleDescription function to the "Read More" button
        readMoreButton.onclick = function() {
            toggleDescription(readMoreButton, projectDescription);
        };

        // Append elements to the project card
        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(readMoreButton);

        // Append the project card to the projects container
        projectsContainer.appendChild(projectCard);
    });
}

// Dynamic Skills - Define skills data
const skillsData = [
    {
        title: "Web Development",
        description: "I’m currently in the process of mastering the basics of web development through my course, 'Web Systems Technology.' I’m really enjoying the journey so far and gaining a solid foundation in building websites. Although I know there’s still a long way to go, I am persistent and excited to continue learning and refining my skills in web development.",
        iconClass: 'bx bx-code-alt'
    }
];

// Function to create and add skill cards dynamically
function addSkills() {
    const skillsContainer = document.querySelector('.skills-container');

    skillsData.forEach(skill => {
        // Create the skill box
        const skillsBox = document.createElement('div');
        skillsBox.classList.add('skills-box');

        // Create the skill info container
        const skillsInfo = document.createElement('div');
        skillsInfo.classList.add('skills-info');

        // Create the skill icon
        const skillIcon = document.createElement('i');
        skillIcon.classList.add(...skill.iconClass.split(' '));

        // Create the skill title
        const skillTitle = document.createElement('h4');
        skillTitle.textContent = skill.title;

        // Create the skill description
        const skillDescription = document.createElement('p');
        skillDescription.textContent = skill.description;

        // Append elements to the skills info container
        skillsInfo.appendChild(skillIcon);
        skillsInfo.appendChild(skillTitle);
        skillsInfo.appendChild(skillDescription);

        // Append the skills info to the skills box
        skillsBox.appendChild(skillsInfo);

        // Append the skills box to the skills container
        skillsContainer.appendChild(skillsBox);
    });
}

// Call functions to add dynamic projects and skills to the page
addProjects();
addSkills();

// Intersection Observer for Active Navbar Links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Create an IntersectionObserver to detect when a section is in view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const link = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
        
        if (entry.isIntersecting) {
            // Add 'active' class to the navbar link for the current section
            link.classList.add('active');
        } else {
            // Remove 'active' class from navbar link when the section is not in view
            link.classList.remove('active');
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Smooth Scroll for Navbar Links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default behavior (jumping to section)
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        
        // Scroll to the target section smoothly
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Update Date and Time in the Footer
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const currentDate = new Date(); // Get the current date and time

    // Format the current date and time
    const formattedDateTime = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    // Display the formatted date and time in the footer
    dateTimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
}

// Call the function once to display the current date and time when the page loads
updateDateTime();

// Update the time every second (for a live clock)
setInterval(updateDateTime, 1000);