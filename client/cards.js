class Cards{
    constructor() {
        this.cardsArr = ['drunk_rick.jpg','drunk_rick.jpg', 'neutrino_bomb.png', 'neutrino_bomb.png', 'summer.jpg', 'summer.jpg'];
        this.basePath = './style/images';
    }
    shuffle = (arr) => {
        let currentIndex = arr.length;
        let { temporaryValue, randomIndex };

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        return arr;
    }
    renderCards = ( shuffledArr ) => {
        this.card = $('<div></div>').addClass('card');
        this.cardInner = $('<div></div>').addClass('card-inner');
        this.cardBack = $('<div></div>').addClass('col').attr('id', 'cardBack');
        this.cardFront = $('<div></div>').addClass('col').attr('id', 'cardFront');
        $(this.card).append(this.cardInner)
        $(this.cardInner).append(this.cardFront);
        $(this.cardInner).prepend(this.cardBack);
    }
    renderRows = () => {
        this.row = $('<div></div>').addClass('row h-25');
        $('#main').append(this.row);
        $(this.row).append(this.)
    }
}