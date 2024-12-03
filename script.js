let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true

});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});





function showSection(sectionId) {
    // Always scroll to the top when a section is clicked
    window.scrollTo(0, 0);

    // Check if the selected section is the same as the current section
    if (sectionId === currentSection) {
        return; // Do nothing if the section is already visible
    }

    // Update the current section
    currentSection = sectionId;

    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'flex'; // Use 'flex' or 'block' based on your layout
}











