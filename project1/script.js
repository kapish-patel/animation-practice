const btn = document.querySelector('.animate-button');
const bouncetest = document.querySelector('.fade-in');

btn.addEventListener('click', () => {
    console.log('clicked');
    bouncetest.classList.remove('fade-in');
    bouncetest.classList.add('animate-text');
    setTimeout(() => {
        bouncetest.classList.remove('animate-text');
        bouncetest.classList.add('fade-in');
    }, 10000);
});