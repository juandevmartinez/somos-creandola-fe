document.addEventListener( 'DOMContentLoaded', () => {
    const sliderTitle = document.querySelector('.slider-title');
    const typewriter = new Typewriter( sliderTitle, {
        strings: [sliderTitle.textContent],
        loop: true,
        autoStart: true
    });
});