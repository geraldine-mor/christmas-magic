/* jshint esversion: 11 */

// Wait for the DOM to finish loading before running functions
document.addEventListener("DOMContentLoaded", function () {

//Apply event listener to cards
    let gameCards = document.getElementsByClassName("game-card");
    if (gameCards) { //Not necessary if only 1 page
        for (let gameCard of gameCards) {
            gameCard.addEventListener("click", function () {
                let cardNumber = this.getAttribute("data-num");
                flipCard(cardNumber);
            });
        }
    }
})

/**
 * Rotate card when clicked
 */
function flipCard(cardNumber) {
    if (cardNumber === "one") {
        document.getElementById("card1-flip").classList.add("flipped");
    } else if (cardNumber === "two") {
        document.getElementById("card2-flip").classList.add("flipped");
    } else if (cardNumber === "three") {
        document.getElementById("card3-flip").classList.add("flipped");
    }
}