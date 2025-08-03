// Need to create 52 cards in a deck (2-10, Jack, Queen, King, Ace)
// Need to shuffle the Deck 
// Need to pass our the cards to the computer and the player
// Need to the top card from both decks and see which is higher
// Player who has the higher value card takes both cards
/* If both cards are equal, WAR begins. The face up cards are left on the table, 
each player puts three cards face down on the table, and then puts one card face up. 
The face up card determines who wins the war and gets all 10 cards that are on the table at this point. 
If the face up card is again the same rank, then the war goes on, three more face down, one face up etc.
*/
// First player who runs out of cards loses the game. 
// If a player doesnt have enough cards to play WAR, they lose.



class Card {
    constructor(suit, rank, value){
        this.suit= suit;
        this.rank= rank;
        this.value=value;
    }
}

const suits= ["Club", "Spade", 'Heart', "Diamond"];
const ranks= ["2","3","4","5","6","7","8","9","10",'Jack', 'Queen', 'King', 'Ace'];
const values= {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
'8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12,
'King': 13, 'Ace': 14};

let deck=[];

for(let i=0;i<suits.length;i++){
    const suit=suits[i];
    for(let j=0;j<ranks.length;j++){
        const rank= ranks[j];
        const value= values[ranks[j]];
        deck.push(new Card(suit,rank,value));
        }
}

for (let i=0; i<deck.length;i++){
    console.log(deck[i]);
}

//console.log(`card ${i}= ${deck[i]}`);