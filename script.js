/* Coding Steps:

    For the final project you will be creating an automated version of the classic card game WAR!
    There are many versions of the game WAR. In this version there are only 2 players.
        You do not need to do anything special when there is a tie in a round.
    Think about how you would build this project and write your plan down. 
    Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
        You do not need to accept any user input, when you run your code, the entire game should play out 
        instantly without any user input inside of your browser's console.

The completed project should, when executed, do the following:

    Deal 26 Cards to each Player from a Deck of 52 cards.
    Iterate through the turns where each Player plays a Card.
    The Player who played the higher card is awarded a point.
        Ties result in zero points for both Players.
    After all cards have been played, display the score and declare the winner*/

//Notes before starting to code:
    //Player class- Cards, points- cards in an array, pop or splice a card each turn?
    //Turn function to pop or splice one card from each player and compare values, adding one point to the winning player.
    //How to assing value to cards while keeping them as the normal 52 cards? Class with suit, name, value?
    //Does the deck need to be a class, or could it be an array that I split into 2 arrays for the players?
    //How to assign cards randomly? Need to research.
    //Could make deck a class to include shuffle function inside of it, or could run it as part of the code lines, either way could work.
    //Card class definitely necessary to streamline card creation process.
    //Am I really going to have 52 lines of code for card creation?
    //At points I will use console.log to test what I'm doing and then comment out the console.log

//To start, I defined the classes with their basic constructors, adding other functionality later.
class Card {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}

class Deck {
    constructor() {
        this.cards = []
    }
//I copied and pasted this function from Stack Overflow. Looking at it, it "shuffles" by randomly selecting index numbers.
//It then separates the deck into two parts, which I've designated as destination 1 and 2, meant to be the player.cards arrays.
//My concern with this function is that it will not mix the deck up, instead moving one card at a time in order.
//I won't know until I try it and console.log the results. If it doesn't work, I'll adjust as needed.
    deal(dest1, dest2) {
        for(let i = 0; i < this.cards.length ; i++) {
            let random = Math.floor(Math.random() * this.cards.length);
            if(random % 2 === 0) {
                dest1.push(this.cards[i]);
            } else {
                dest2.push(this.cards[i]);
            }
        }
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.deck = []
        this.points = 0
    }
}

//Before creating cards to put in the starting deck, I had to create an instance of that class.
let startingDeck = new Deck()

//I also made the two players before working on the cards, but further down so that they'd be just above the functions.
let player1 = new Player('Player 1')
let player2 = new Player('Player 2')