class Logic {
    constructor() {
        this.firstCardClicked;
        this.secondCardClicked;
        this.matches = 0;
        this.clickCounter = 0;
        this.gameTrack = 0;
        this.attempts = 0;
        this.accuracy = 0;
        this.matchedCards = [];
        this.notClickable = false;
        this.maxMatches = 9;
    }
    applyClickHandlers = () => {
        $('.card-inner').on('click', this.handleClick);
    }
    removeAllClickHandlers = () => {
        $('.card-inner').off();
    }
    removeMatchedClickHandlers = ( matches ) => {
        matches.map(element => {
            $(element).off();
        });
    }
    handleClick = ( event ) => {
        if (this.notClickable) {
            return;
        }
        if (this.clickCounter === 0) {
            this.firstCardClicked = $(event.currentTarget);
            this.firstCardImage = $(event.currentTarget).children()[1].firstChild.src;
            this.clickCounter = 1;
            $(event.currentTarget).addClass('flipped');
        } else if (this.clickCounter > 0){
            this.notClickable = true;
            this.removeAllClickHandlers();
            this.secondCardClicked = $(event.currentTarget);
            this.secondCardImage = $(event.currentTarget).children()[1].firstChild.src;
            $(event.currentTarget).addClass('flipped');
            this.attempts++;
            this.clickCounter = 0;
            this.testIfMatch();
        }
    }
    testIfMatch = () => {
        if (this.secondCardImage === this.firstCardImage) {
            this.matches++;
            this.matchedCards.push(this.firstCardClicked, this.secondCardClicked);
            this.removeMatchedClickHandlers(this.matchedCards);
            this.applyClickHandlers();
            this.notClickable = false;
            console.log(this.matches);
        } else {
            setTimeout(() => {
                $(this.firstCardClicked).toggleClass('flipped');
                $(this.secondCardClicked).toggleClass('flipped');
                this.notClickable = false;
            }, 1500);
            this.applyClickHandlers();
        }
        this.accuracy = this.calcAccuracy();
        if (this.matches === this.maxMatches) {
            console.log(this.matchedCards);
            $('#win-modal').modal('show');
        }
    }
    calcAccuracy = () => {
        return (
            ((this.matches)/(this.attempts)) * 100
        );
    }
 }