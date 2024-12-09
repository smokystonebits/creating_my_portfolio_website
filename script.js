//below is for my bee that follows the curser
document.addEventListener('mousemove', (event) => {
    // get the main element
    const mainElement = document.querySelector('main');

    // calculate the position of the mouse relative to the viewport
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;

    // update the background position to follow the cursor
    mainElement.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});



//---------------------------------------------------------------------
//below is for the about me and traits sections appearing slowly after eachother
document.addEventListener('DOMContentLoaded', () => {
    // selects elements
    const textContent = document.querySelector('.text-content');
    const traitsContent = document.querySelector('.traits-text');

    // shows element 1 after 1 second
    setTimeout(() => {
        textContent.classList.add('visible');
    }, 1000); // 1000ms = 1 second

    // show element 2 after 2 seconds
    setTimeout(() => {
        traitsContent.classList.add('visible');
    }, 2000); // 2000ms = 2 seconds
});




// ------------------------------------------------------------------
// below is the code for changing from light mode to dark mode
document.getElementById("toggle-colors").addEventListener("click", () => {
    document.body.classList.toggle("invert-colors");
});


// ------------------------------------------------------------------
// below is the code for the contact form in main element
const about = document.getElementById('about');
const originalContent = about.innerHTML; // save the original content when the page loads

// function to reapply animations to the main sections
function reapplyAnimations() {
    const textContent = about.querySelector('.text-content');
    const traitsContent = about.querySelector('.traits-text');

    if (textContent) {
        textContent.classList.remove('visible'); // reset the animation state
        textContent.classList.add('hidden'); // start hidden
        setTimeout(() => {
            textContent.classList.add('visible'); // trigger the animation
        }, 1000); // 1s delay
    }

    if (traitsContent) {
        traitsContent.classList.remove('visible'); // reset animation
        traitsContent.classList.add('hidden'); // start hidden
        setTimeout(() => {
            traitsContent.classList.add('visible'); // trigger the animation
        }, 2000); // 2s delay
    }
}

// show the contact form when 'show-contact-form' aka contact in nav is clicked
document.getElementById('show-contact-form').addEventListener('click', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) {
        console.error("Contact form element not found");
        return;
    }

    // Clear the main content and show the contact form
    about.innerHTML = ''; // clear the content
    contactForm.style.display = 'block'; // make form visible
    about.appendChild(contactForm); // add the form to the main element
});

// reset to the original content in main when the 'home-button' button is clicked
document.getElementById('home-button').addEventListener('click', () => {
    about.innerHTML = originalContent; // restore the original content
    reapplyAnimations(); // reapply the animation
});


