/* jshint esversion: 11 */

// Wait for the DOM to finish loading before running functions
document.addEventListener("DOMContentLoaded", function () {

    runGame();
})

/**
 * Game container function
 */
function runGame() {
    let flippedCards = []; //Store flipped cards
    let boardLocked = false; //Cards are clickable

    //Store card details
    const cardData = [
        { src: "assets/images/elf.webp", alt: "elf" },
        { src: "assets/images/house.webp", alt: "house" },
        { src: "assets/images/rudolph.webp", alt: "rudolph" },
        { src: "assets/images/santa.webp", alt: "santa" },
        { src: "assets/images/snowman.webp", alt: "snowman" },
        { src: "assets/images/tree.webp", alt: "tree" },
    ];

    //Duplicate the set of cards
    let cards = [...cardData, ...cardData];

    //Shuffle the cards
    shuffle(cards);

    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(function (cardEl, index) {
        const card = cards[index];

        // Remove any existing listeners by cloning the element - Solution provided by Claude.ai
        const newCardEl = cardEl.cloneNode(true);
        cardEl.parentNode.replaceChild(newCardEl, cardEl);

        newCardEl.dataset.card = card.alt

        const cardImg = newCardEl.querySelector(".card-flip-back img");
        cardImg.src = card.src;
        cardImg.alt = card.alt;

        //Apply event listener to cards & activate flip 
        newCardEl.addEventListener("click", function () {
            if (boardLocked || this.classList.contains("flipped")) {
                return;
            }

            //Flip the card
            this.classList.add("flipped");
            flippedCards.push(this);

            //Check if 2 cards are flipped
            if (flippedCards.length === 2) {
                boardLocked = true; //lock the board
                checkMatch();
            }
        });

    });


    /**
    * Check it the 2 flipped cards match
    */
    function checkMatch() {
        const [card1, card2] = flippedCards;
        const isMatch = card1.dataset.card === card2.dataset.card;

        if (isMatch) {
            //Cards match - keep them flipped
            //ToDo: Add function to display success message
            flippedCards = [];
            boardLocked = false;
        } else {
            //No match - flip cards back
            //ToDo: Add function to display no match message
            setTimeout(function () {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                flippedCards = [];
                boardLocked = false;
            }, 1000);
        }
    }

    //Apply event listener to game reset button
    let gameBtn = document.getElementById("game-reset");

    gameBtn.addEventListener("click", resetGame, { once : true});

}

/**
 * Shuffle the array and therefore the cards to randomise each time
 */
//Fisher-Yates algorithm method
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Reset the game to play again
 */
function resetGame() {
    //Flip all cards back "face-down"
    const gameCards = document.querySelectorAll(".game-card");
    gameCards.forEach(function (card) {
        card.classList.remove("flipped");
    });

    setTimeout(runGame, 1000);
}


