$(document).ready(init);

function init() {
    let cards = new Cards;
    let cardsArr = ['drunk_rick.jpg','drunk_rick.jpg', 'neutrino_bomb.png', 'neutrino_bomb.png', 'summer.jpg', 'summer.jpg'];
    cards.renderCards(cards.shuffle([...cardsArr]));
}
    