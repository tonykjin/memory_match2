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
        let i = 1;
        let cards = 0;
        while (i <= 3) {
            this.renderRows(i);
            while (cards < shuffledArr.length) {
                let card = $('<div></div>').addClass('card');
                let cardInner = $('<div></div>').addClass('card-inner');
                let cardFront = $('<div></div>').addClass('card-front');
                let cardBack = $('<div></div>').addClass('card-back');
                let frontImage = $('<img>').attr('src', `${basePath}/${shuffledArr[cards]}`);
                let backImage = $('<img>').attr('src', `${basePath}/portal.png`);
                $(cardBack).append(backImage);
                $(cardFront).append(frontImage);
                $(`#row-${i}`).append(card);
                $(card).append(cardInner);
                $(cardInner).append(cardBack);
                $(cardInner).append(cardFront);
                cards++;
            }
            i++;
        }
    }
    renderRows = ( index ) => {
        let row = $('<div></div>').addClass('row h-25').attr('id', `row-${index}`);
        $('#main').append(row);
    }
}