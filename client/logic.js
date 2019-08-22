class Logic {
    constructor() {
        this.firstCardClicked;
        this.secondCardClicked;
        this.matches = 0;
        this.clickCounter = 0;
        this.gameTrack = 0;
        this.progressHealth = 0;
        this.misses = 0;
        this.accuracy = 0;
        this.matchedCards = [];
        this.notClickable = false;
        this.maxMatches = 9;
    }
    applyClickHandlers = () => {
        $('.card-inner').on('click', this.handleClick);
    }
    // removeAllClickHandlers = () => {
    //     $('.card').off();
    // }
    removeMatchedClickHandlers = ( matches ) => {
        matches.map(element => {
            $(element).css('pointer-events', 'none');
        });
    }
    handleClick = ( event ) => {
        if (this.notClickable) {
            return;
        }
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
            // this.removeAllClickHandlers();
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
            // this.applyClickHandlers();
            this.notClickable = false;
        } else {
            this.progressHealth += 5;
            setTimeout(() => {
                this.firstCardClicked.lastChild.className = 'card-front hidden';
                this.secondCardClicked.lastChild.className = 'card-front hidden';
                this.firstCardClicked.firstChild.className = 'card-back static reappear';
                this.secondCardClicked.firstChild.className = 'card-back static reappear';
                this.notClickable = false;
            }, 2000);
            this.updateProgressBar();
            // this.applyClickHandlers();
            this.firstCard.css('pointer-events', '');
        }
        this.accuracy = this.calcAccuracy();
        if (this.matches === this.maxMatches) {
            $('#win-modal').modal('show');
        }
    }
    calcAccuracy = () => {
        return (
            ((this.matches)/(this.attempts)) * 100
        );
    }
    updateProgressBar = () => {
        $(".progress")
        .removeClass('hidden')
        .addClass('bg-success')
        .attr('aria-valuenow', this.progressHealth);
        $('.progress').animate({
            'width': this.progressHealth + '%'
        }, 2000);
        if (this.progressHealth < 10) {
            $(".progress")
            .removeClass('bg-success')
            .addClass('bg-info');
        } else if (this.progressHealth <= 20) {
            $(".progress")
            .removeClass('bg-info')
            .addClass('bg-warning');
        } else if (this.progressHealth <= 35) {
            $(".progress")
            .removeClass('bg-warning')
            .addClass('bg-danger');
        }
        console.log(this.progressHealth);
        if (this.progressHealth === 50) {  
            $('#lose-modal').modal('show');
        }
    }
 }