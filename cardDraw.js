//Global array for all the colours of the cards.
var colourSets = ["Red", "Blue", "Green", "Yellow", "Grey", "Purple", "Brown", "Pink", "Orange"];
var valueSets = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3];  //18 cards in a set

//Create an object for each cards
function card (colour, value) {
  this.cardColour = colour;
  this.cardValue = value;
}


//Create an object for each deck
function deck (cardSets) {
  this.deckOfCards = [];
}

//Methods for the DECK object
function buildDeck(cardSets) {
  var newCard;
  var deck=[];

  console.log("Card set", valueSets.length );

  for (var i = 0; i < cardSets; i++) {
    for (var j = 0; j < valueSets.length; j++) {
      newCard = new card(colourSets[i], valueSets[j]);
      deck[(i*valueSets.length)+j] = newCard;
      console.log(newCard.cardColour);
    }
  }
}

buildDeck(5);


/* Open comments
//Method functions for singleDeck object

//Function to shuffle the deck of cards
function shuffle() {
  var
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
//
*/
