document.addEventListener( 'DOMContentLoaded', () => {
    const sliderTitle = document.querySelector('.slider-title');
    const typewriter = new Typewriter( sliderTitle, {
        strings: [sliderTitle.textContent],
        loop: true,
        autoStart: true
    });


    const menuToggle = document.querySelector('[data-open]');
    const sidebar = document.querySelector('#sidebar-menu');
    menuToggle.addEventListener('click', (event) => {
        sidebar.classList.toggle('opened');
    })
});