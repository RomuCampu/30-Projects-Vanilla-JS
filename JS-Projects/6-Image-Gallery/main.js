const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// SET FIRST IMG OPACITY //
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // RESET OPACITY //
    imgs.forEach(img => (img.style.opacity = 1));
    // CHANGE CURRENT IMG TO SRC //
    current.src = e.target.src;
    // ADD FADE IN CLASS //
    current.classList.add('fade-in');
    // REMOVE FADE-IN CLASS AFTER S /
    setTimeout(() => current.classList.remove('fade-in'), 500);
    // CHANGE OPACITY //
    e.target.style.opacity = opacity;
}