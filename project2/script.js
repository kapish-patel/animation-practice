console.log('script.js loaded');
const cardsbody = document.querySelectorAll('.card-body');

for (const cardbody of cardsbody) {
    const card = cardbody.querySelector('.card');
    const cardinfo = card.querySelector('.card-info');
    card.addEventListener('click', (event) => {
        const clickedCard = event.currentTarget;
        const cardText = clickedCard.querySelector('h3').textContent;
        const cardInfoText = cardinfo.querySelector('h3').textContent;
        console.log(cardText);
        console.log(cardInfoText);
    });
}
