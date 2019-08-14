class Cards{
    renderCards = ( cardsArr ) => {
        this.card = $('<div></div>').addClass('card');
        this.cardBack = $('<div></div>').addClass('col').attr('id', 'cardBack');
        this.cardFront = $('<div></div>').addClass('col').attr('id', 'cardFront');
        $(".row").append(this.card);
        $(this.card).append(this.cardFront);
        $(this.card).prepend(this.cardBack);
    }
}