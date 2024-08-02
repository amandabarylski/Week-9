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
//For card, I included name to indicate suit and card type (such as two of hearts) and value.
//The values range from 2 to 14 as the highest value card in a typical game of war is an ace.
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
//Source: https://stackoverflow.com/questions/59824504/split-randomly-array-of-object-in-two-equal-arrays
//It then separates the deck into two parts, which I've designated as destination 1 and 2, meant to be the player.cards arrays.
//My concern with this function is that it will not mix the deck up, instead moving one card at a time in order.
//I won't know until I try it and console.log the results. If it doesn't work, I'll adjust as needed.
    // deal(dest1, dest2) {
    //     for(let i = 0; i < this.cards.length ; i++) {
    //         let random = Math.floor(Math.random() * this.cards.length);
    //         if(random % 2 === 0) {
    //             dest1.push(this.cards[i]);
    //         } else {
    //             dest2.push(this.cards[i]);
    //         }
    //     }
    // }
    //Initial test of this function had the player decks end up different sizes, not sure why.
    //Commenting out this version, will try something else below.

//Again found on Stack Overflow, this one uses the Fisher-Yates Shuffle.
//Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//After testing it as just shuffle, I changed the name to shuffleAndDeal and added a similar for loop and if statement as above.
//However, without the randomization in the for loop, it should split the arrays equally.
    shuffleAndDeal(dest1, dest2) {
        let currentIndex = this.cards.length
        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [this.cards[currentIndex], this.cards[randomIndex]] = [
              this.cards[randomIndex], this.cards[currentIndex]];
          }
        
        for (let i = 0; i < this.cards.length; i++) {
            if (i % 2 === 0) {
                dest1.push(this.cards[i])
            } else {
                dest2.push(this.cards[i])
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

//My process for card creation: Make one, then copy, paste, and edit until switching suits, then copy first card in new suit for speed.
//I made the cards const to make sure that no reassignment accidents could possibly occur.
//For each card, I immediately pushed them to the cards array in the starting deck that I created above.
startingDeck.cards.push(new Card('Two of Hearts', 2))
startingDeck.cards.push(new Card('Three of Hearts', 3))
startingDeck.cards.push(new Card('Four of Hearts', 4))
startingDeck.cards.push(new Card('Five of Hearts', 5))
startingDeck.cards.push(new Card('Six of Hearts', 6))
startingDeck.cards.push(new Card('Seven of Hearts', 7))
startingDeck.cards.push(new Card('Eight of Hearts', 8))
startingDeck.cards.push(new Card('Nine of Hearts', 9))
startingDeck.cards.push(new Card('Ten of Hearts', 10))
startingDeck.cards.push(new Card('Jack of Hearts', 11))
startingDeck.cards.push(new Card('Queen of Hearts', 12))
startingDeck.cards.push(new Card('King of Hearts', 13))
startingDeck.cards.push(new Card('Ace of Hearts', 14))
startingDeck.cards.push(new Card('Two of Spades', 2))
startingDeck.cards.push(new Card('Three of Spades', 3))
startingDeck.cards.push(new Card('Four of Spades', 4))
startingDeck.cards.push(new Card('Five of Spades', 5))
startingDeck.cards.push(new Card('Six of Spades', 6))
startingDeck.cards.push(new Card('Seven of Spades', 7))
startingDeck.cards.push(new Card('Eight of Spades', 8))
startingDeck.cards.push(new Card('Nine of Spades', 9))
startingDeck.cards.push(new Card('Ten of Spades', 10))
startingDeck.cards.push(new Card('Jack of Spades', 11))
startingDeck.cards.push(new Card('Queen of Spades', 12))
startingDeck.cards.push(new Card('King of Spades', 13))
startingDeck.cards.push(new Card('Ace of Spades', 14))
startingDeck.cards.push(new Card('Two of Diamonds', 2))
startingDeck.cards.push(new Card('Three of Diamonds', 3))
startingDeck.cards.push(new Card('Four of Diamonds', 4))
startingDeck.cards.push(new Card('Five of Diamonds', 5))
startingDeck.cards.push(new Card('Six of Diamonds', 6))
startingDeck.cards.push(new Card('Seven of Diamonds', 7))
startingDeck.cards.push(new Card('Eight of Diamonds', 8))
startingDeck.cards.push(new Card('Nine of Diamonds', 9))
startingDeck.cards.push(new Card('Ten of Diamonds', 10))
startingDeck.cards.push(new Card('Jack of Diamonds', 11))
startingDeck.cards.push(new Card('Queen of Diamonds', 12))
startingDeck.cards.push(new Card('King of Diamonds', 13))
startingDeck.cards.push(new Card('Ace of Diamonds', 14))
startingDeck.cards.push(new Card('Two of Clubs', 2))
startingDeck.cards.push(new Card('Three of Clubs', 3))
startingDeck.cards.push(new Card('Four of Clubs', 4))
startingDeck.cards.push(new Card('Five of Clubs', 5))
startingDeck.cards.push(new Card('Six of Clubs', 6))
startingDeck.cards.push(new Card('Seven of Clubs', 7))
startingDeck.cards.push(new Card('Eight of Clubs', 8))
startingDeck.cards.push(new Card('Nine of Clubs', 9))
startingDeck.cards.push(new Card('Ten of Clubs', 10))
startingDeck.cards.push(new Card('Jack of Clubs', 11))
startingDeck.cards.push(new Card('Queen of Clubs', 12))
startingDeck.cards.push(new Card('King of Clubs', 13))
startingDeck.cards.push(new Card('Ace of Clubs', 14))

//I also made the two players before working on the cards, but further down so that they'd be just above the other functions.
let Ed = new Player('Ed')
let Al = new Player('Al')

//Time for a test!
// startingDeck.deal(player1.deck, player2.deck)
// console.log(player1.deck)
// console.log(player2.deck)

//Quick test of the new shuffle function before I decide how best to implement it in a split.
//Added a return of this.cards so that I could actually print it, but will be deleting it before adding the split section.
//It worked, and each time I refresh it shuffles in a different way!
// console.log(startingDeck.shuffle())

//Another deal test:
startingDeck.shuffleAndDeal(Ed.deck, Al.deck)
// console.log(Ed.deck)
// console.log(Al.deck)
//And it works! Commenting out the test console.logs, but leaving the shuffleAndDeal as it successfully randomizes each reload.

//My initial idea was to write the game as a function that iterates the play via a for loop.
const game = (player1, player2) => {
    for (let i = 0; i < player1.deck.length; i++) {
        console.log(`${player1.name} played a ${player1.deck[i].name}. ${player2.name} played a ${player2.deck[i].name}.`)
        if (player1.deck[i].value > player2.deck[i].value) {
            player1.points += 1
            console.log(`${player1.name} gets a point!`)
        } else if (player1.deck[i].value < player2.deck[i].value) {
            player2.points += 1
            console.log(`${player2.name} gets a point!`)
        }
    }
    if (player1.points > player2.points) {
        return console.log(`${player1.name} got ${player1.points} points. ${player2.name} got ${player2.points} points. ${player1.name} is the winner!`)
    } else if (player1.points < player2.points) {
        return console.log(`${player1.name} got ${player1.points} points. ${player2.name} got ${player2.points} points. ${player2.name} is the winner!`)
    } else return console.log(`${player1.name} got ${player1.points} points. ${player2.name} also got ${player2.points} points. It's a tie!`)
}

//In order to test it, I called the game with my players. Since it comes after the shuffleAndDeal, I don't have to repeat that step.
//With the test, I realized I forgot to call the value of the cards when comparing. After editing, I saved and checked again.
//Then I forgot to call the name of the players in the return, and had to edit that.
//It worked!
game(Ed, Al)