document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    setTimeout(() => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('fade-in-active');
            }, index * 200); // Delay each element's fade-in by 200ms increments
        });
    }, 500); // Start adding fade-in-active after 500ms
});
