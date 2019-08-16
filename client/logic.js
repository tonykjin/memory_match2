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
        this.maxMatches = 8;
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
            console.log(this.firstCardClicked);
            console.log(this.secondCardClicked);
            console.log(this.matchedCards);
            this.notClickable = false;
        } else {
            setTimeout(() => {
                $(this.firstCardClicked).toggleClass('flipped');
                $(this.secondCardClicked).toggleClass('flipped');
                this.notClickable = false;
            }, 1500);
            this.applyClickHandlers();
            console.log('no match');
        }
        this.accuracy = this.calcAccuracy();
        if (this.matches === this.maxMatches) {
            this.winCondition();
        }
    }
    calcAccuracy = () => {
        return (
            ((this.matches)/(this.attempts)) * 100
        );
    }
    winCondition = () => {
        return (
        `<div class="modal fade" id="win-modal" tabindex="-1" role="dialog" aria-labelledby="win-modal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Congratulations! You have saved dimension c-137</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              [Put some gifs here]
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary"> Play Again </button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`
        );
    }
 }