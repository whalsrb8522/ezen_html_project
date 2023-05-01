document.addEventListener("scroll", function (p) {
    const top_button = document.getElementById('top_button');

    if (window.scrollY >= 500) {
        top_button.classList.remove('dp_none');
        top_button.classList.add('fadein')
        top_button.classList.remove('fadeout')
    } else {
        top_button.classList.remove('fadein')
        top_button.classList.add('fadeout')
    }
});