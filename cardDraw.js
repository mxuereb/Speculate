//Global array for all the colours of the cards.
var colourSets = ["Red", "Blue", "Green", "Yellow", "Grey", "Purple", "Brown", "Pink", "Orange"];
var valueSets = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3];  //18 cards in a set

//Create an object for each cards
function card (colour, value) {
  this.cardColour = colour;
  this.cardValue = value;
}

//Build a deck and shuffle
function buildDeck(setsInDeck) {
  var newCard;
  var newDeck=[];

  for (var i = 0; i < setsInDeck; i++) {
    for (var j = 0; j < valueSets.length; j++) {
      newCard = new card(colourSets[i], valueSets[j]);
      newDeck[(i*valueSets.length)+j] = newCard;
    }
  }
  newDeck.sort(function() {return 0.5 - Math.random()});
  console.log(newDeck);
  return newDeck;
}

buildDeck(3);

/*//Draw a card from a deck
function drawCard(deck) {
  var topCard;

  topCard =

}

function cardDisplay (cardSets, cardDraws, displaySize) {
  cardDeck = buildDeck(6);
  console.log(cardDeck);
}

cardDisplay(5,1,1);
*/
