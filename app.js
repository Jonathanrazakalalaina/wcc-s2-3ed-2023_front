const preloader = document.querySelector('.preloader');
const body = document.querySelector('body')
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hide-preloader')
    }, 3000)
})