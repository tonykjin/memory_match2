$(document).ready(init);

function init() {
    if (window.innerHeight > window.innerWidth) {
        $('#portrait-modal').modal('show');
    }
    $('#win-modal').modal({ show: false });
    let cards = new Cards;
    let cardsArr = ['beth.png','beth.png', 'space_head.png', 'space_head.png', 'summer.png', 'summer.png', 'pickle_rick.png', 'pickle_rick.png', 'bird_person.png', 'bird_person.png', 'jerry.png', 'jerry.png', 'snowball.png', 'snowball.png', 'squanchy.png', 'squanchy.png', 'scary_terry.png', 'scary_terry.png'];
    cards.renderCards(cards.shuffle([...cardsArr]));
    let logic = new Logic;
    logic.applyClickHandlers();
}
    