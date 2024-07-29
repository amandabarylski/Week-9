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