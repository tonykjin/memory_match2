class Logic {
    constructor() {
        this.firstCardClicked;
        this.secondCardClicked;
        this.matches = 0;
        this.clickCounter = 0;
        this.gameTrack = 0;
        this.attempts = 0;
        this.accuracy = 0;
    }
    applyClickHandlers = () => {
        $('.card-inner').on('click', this.handleClick);
    }
    removeClickHandlers = () => {
        $('.card-inner').off('click', this.handleClick);
    }
    handleClick = ( event ) => {
        console.log(event.target);
        $(event.currentTarget).toggleClass('flipped');
        if (this.clickCounter === 0) {
            this.firstCardClicked = $(event.currentTarget);
            this.firstCardImage = $(event.currentTarget).children()[1].firstChild.src;
            $(event.currentTarget).off('click');
            this.clickCounter++;
        } else {
            this.secondCardClicked = $(event.currentTarget);
            this.secondCardImage = $(event.currentTarget).children()[1].firstChild.src;
            this.clickCounter--;
            this.attempts++;
            this.removeClickHandlers();
            this.testIfMatch();
        }
    }
    testIfMatch = () => {
        if (this.secondCardImage === this.firstCardImage) {
            this.matches++;
            console.log('cards match!', this.matches);
        } else {
            $(this.firstCardClicked).toggleClass('flipped');
            $(this.secondCardClicked).toggleClass('flipped');
            console.log('cards do not match', this.matches);
        }
        this.accuracy = this.calcAccuracy();
        if (this.matches === 8) {

        }
        console.log(this.accuracy);
        this.applyClickHandlers();
    }
    calcAccuracy = () => {
        return (
            ((this.matches)/(this.attempts)) * 100
        );
    }
 }