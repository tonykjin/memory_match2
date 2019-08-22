class Cards {
    shuffle = ( arr ) => {
        let currentIndex = arr.length;
        let temporaryValue, randomIndex;

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
        let basePath = './style/images';
        let i = 0;
        let index = 0;
        while (i < 3) {
            let row = this.createRow();
            let cards = 0;
            while (cards < 6) {
                let card = $('<div></div>').addClass('card');
                let cardInner = $('<div></div>').addClass('card-inner');
                let cardFront = $('<div></div>').addClass('card-front hidden').css({'background-image': `url("${basePath}/${shuffledArr[index]}")`});
                let cardBack = $('<div></div>').addClass('card-back static');
                $(card).append(cardInner);
                $(cardInner).append(cardBack);
                $(cardInner).append(cardFront);
                $(row).append(card);
                $('#main').append(row);
                cards++;
                index++;
            }
            i++;
        }
    }
    createRow = () => {
        let row = $('<div></div>').addClass('row h-25');
        return row;
    }   
}
