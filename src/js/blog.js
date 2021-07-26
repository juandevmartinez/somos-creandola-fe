document.addEventListener( 'DOMContentLoaded', () => {
    const title = document.querySelector('.header-title');
    const typewriter = new Typewriter( title, {
        strings: [title.textContent],
        loop: true,
        autoStart: true
    });
});