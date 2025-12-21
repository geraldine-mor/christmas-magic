/* jshint esversion: 11 */

// Wait for the DOM to finish loading before running functions
document.addEventListener("DOMContentLoaded", function () {

//Apply event listener to cards & activate flip 
    let gameCards = document.getElementsByClassName("game-card");
    if (gameCards) { //To check if we're on the right page
        for (let gameCard of gameCards) {
            gameCard.addEventListener("click", function () {
                this.classList.add("flipped");
                          
            });
        }
    }

    runGame();
})

/**
 * Game container function
 */
function runGame() {
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

        cardEl.dataset.card = card.alt

        const cardImg = cardEl.querySelector(".card-flip-back img");
        cardImg.src = card.src;
        cardImg.alt = card.alt;
    });
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

