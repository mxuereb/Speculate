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
  return newDeck;
}

function cardDisplayCounts (cardSets, cardDraws) {
  var deck = [];
  var display = [];
  var counts = [];

  deck =buildDeck(cardSets);
  for (var i = 0; i < cardDraws; i++) {
    display[i] = deck.pop();
  }
  for (var j =0; j < colourSets.length; j++) {
      counts[j] = 0
      for (var k =0; k < display.length; k++) {
        if (colourSets[j] == display[k].cardColour) {
        counts[j]++;
        console.log(j, k, colourSets[j], display[k].cardColour, counts[j]);
        }
      }
  }
  console.log("display\n",display);
  console.log("counts", counts);
  return counts;
}

cardDisplay(5,10);
