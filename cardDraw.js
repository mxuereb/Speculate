//Build a Deck of cards for Speculate there will be 9x 1card, 6x 2card and 3x 3 card
// in each colour
function buildDeck(colourInDeck)  {
    var deck = new Array(colourInDeck);
    var i;
    for (i = 0; i < colourInDeck; i++ ) {
        deck[i] = [9,6,3]  //card values for 1, 2, 3 in a colour
    }
return deck;
}

function displayDeck(colourInDeck) {
    var deck = [];
    var i;  //number of different card values in each colour
    var j;

    deck = buildDeck(colourInDeck);
    for (i = 0; i < colourInDeck; i++) {
          console.log("Colour ", i+1,"value 1x",deck[i][0],"value 2x",deck[i][1],"value 3x",deck[i][2]);
    }
}

console.log(displayDeck(9));

//Randomly draw a a number of cards from a deck an count the number and colour
//in the draw from a full deck and a number of extra cards.
