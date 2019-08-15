$(document).ready(init);

function init() {
    let cards = new Cards;
    let cardsArr = ['drunk_rick.png','drunk_rick.png', 'neutrino_bomb.png', 'neutrino_bomb.png', 'summer.jpg', 'summer.jpg'];
    cards.renderCards(cards.shuffle([...cardsArr]));
    let logic = new Logic;
    logic.applyClickHandlers();
}
    