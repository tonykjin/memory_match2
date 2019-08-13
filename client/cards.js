class Cards{
    renderCards = ( cardsArr ) => {
        this.card = $('<div></div>').addClass('card');
        this.cardBack = $('<div></div>').addClass('cardBack');
        this.cardFront = $('<div></div>').addClass('cardFront');
        $(".row").append(this.card);
        $(this.card).append(this.cardFront);
        $(this.card).append(this.cardBack);
    }
}