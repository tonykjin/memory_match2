class Logic {
    constructor() {
        this.firstCardClicked;
        this.secondCardClicked;
        this.matches = 0;
        this.clickCounter = 0;
        this.gameTrack = 0;
        this.regress = 0;
        this.misses = 0;
        this.accuracy = 0;
        this.matchedCards = [];
        this.notClickable = false;
        this.maxMatches = 9;
        this.attempts = 0;
    }
    applyClickHandlers = () => {
        $('.card-inner').on('click', this.handleClick);
    }
    removeMatchedClickHandlers = ( matches ) => {
        matches.map(element => {
            $(element).css('pointer-events', 'none');
        });
    }
    handleClick = ( event ) => {
        if (this.notClickable) {
            return;
        };
        if (this.clickCounter === 0) {
            this.firstCardClicked = event.currentTarget;
            this.firstCard = $(event.currentTarget);
            this.firstCardImage = $(event.currentTarget).children()[1].outerHTML;
            this.clickCounter = 1;
            event.currentTarget.firstChild.className = 'card-back dynamic disappear';
            event.currentTarget.lastChild.className = 'card-front reappear';
            this.firstCard.css('pointer-events', 'none');
        } else if (this.clickCounter > 0){
            this.notClickable = true;
            this.secondCardClicked = event.currentTarget;
            this.secondCardImage = $(event.currentTarget).children()[1].outerHTML;
            event.currentTarget.firstChild.className = 'card-back dynamic disappear';
            event.currentTarget.lastChild.className = 'card-front reappear';
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
            this.notClickable = false;
        } else {
            this.regress += 10;
            setTimeout(() => {
                this.firstCardClicked.lastChild.className = 'card-front hidden';
                this.secondCardClicked.lastChild.className = 'card-front hidden';
                this.firstCardClicked.firstChild.className = 'card-back static reappear';
                this.secondCardClicked.firstChild.className = 'card-back static reappear';
                this.notClickable = false;
            }, 2000);
            this.updateProgressBar();
            this.firstCard.css('pointer-events', '');
        }
        console.log('matches:', this.matches);
        console.log('attempts:', this.attempts);
        this.accuracy = this.calcAccuracy();
        console.log(this.accuracy);
        this.updatePanel();
        this.morty();
        if (this.matches === this.maxMatches) {
            $('#win-modal').modal('show');
        }
    }
    calcAccuracy = () => {
        return (
            (((this.matches)/(this.attempts)) * 100).toFixed(1)
        );
    }
    updateProgressBar = () => {
        let progress = $('.progress-bar');
        progress.css('width', this.regress + '%');
        if (this.regress <= 40) {
            progress.css('background-color', '#5C8789');
        } else if (this.regress <= 60) {
            progress.css('background-color', '#cad420');
        } else {
            progress.css('background-color', '#d20505');
        }
        if (this.regress === 100) {
            $('#lose-modal').modal('show');
        }
    }
    morty = () => {
        if (this.accuracy <= 50) {
            $('.morty')
            .addClass('.angry')
            .removeClass('.happy');
        } else if (this.accuracy > 50) {
            $('.morty')
            .addClass('.happy')
            .removeClass('.angry');
        }
    }
    updatePanel = () => {
        $('.accuracy-value').text(this.accuracy + '%');
        $('.matches-value').text(this.matches);
    }
 }