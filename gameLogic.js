// Need to create 52 cards in a deck (2-10, Jack, Queen, King, Ace)
// Need to shuffle the Deck 
// Need to pass our the cards to the computer and the player
// Need to the top card from both decks and see which is higher. Player who has higher value card takes both cards
/* If both cards are equal, WAR begins. The face up cards are left on the table, 
each player puts three cards face down on the table, and then puts one card face up. 
The face up card determines who wins the war and gets all 10 cards that are on the table at this point. 
If the face up card is again the same rank, then the war goes on, three more face down, one face up etc.
*/
// First player who runs out of cards loses the game. 
// If a player doesnt have enough cards to play WAR, they lose.



const suits= ["Club", "Spade", 'Heart', "Diamond"];
const ranks= ["2","3","4","5","6","7","8","9","10",'Jack', 'Queen', 'King', 'Ace'];
const values= {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
'8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12,
'King': 13, 'Ace': 14};

class Card {
    constructor(suit, rank, value){
        this.suit= suit;
        this.rank= rank;
        this.value=value;
    }
}


class Deck {


constructor(){

this.deck=[];

for(let i=0;i<suits.length;i++){
    const suit=suits[i];
    for(let j=0;j<ranks.length;j++){
        const rank= ranks[j];
        const value= values[ranks[j]];
        this.deck.push(new Card(suit,rank,value));
        }
}


}

printDeck(){
    for (let i=0; i<this.deck.length;i++){
        console.log(this.deck[i]);
}

}

shuffleDeck(){
    for(let i=this.deck.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [this.deck[i],this.deck[j]]= [this.deck[j],this.deck[i]];
    }
}

}

class Game{
    constructor(deckObj){
        this.deckObj= deckObj
        this.deck=this.deckObj.deck;
        this.player1Deck=this.deck.slice(0,26);
        this.player2Deck=this.deck.slice(26,52);
        }

    playOneTurn() {
        if (this.player1Deck.length === 0) {
            return { gameOver: true, winner: "Player 2" };
        }
        if (this.player2Deck.length === 0) {
            return { gameOver: true, winner: "Player 1" };
        }

        const topcard1 = this.player1Deck.shift();
        const topcard2 = this.player2Deck.shift();
        const warPile = [topcard1, topcard2];

        if (topcard1.value > topcard2.value) {
            this.player1Deck.push(...warPile);
            return {
                result: "Player 1 wins the turn",
                topcard1,
                topcard2,
                player1DeckCount: this.player1Deck.length,
                player2DeckCount: this.player2Deck.length,
            };
        } else if (topcard2.value > topcard1.value) {
            this.player2Deck.push(...warPile);
            return {
                result: "Player 2 wins the turn",
                topcard1,
                topcard2,
                player1DeckCount: this.player1Deck.length,
                player2DeckCount: this.player2Deck.length,
            };
        } else {
            return this.war(topcard1, topcard2, warPile);
        }
    }

    war(topcard1, topcard2, warPile) {
        if (this.player1Deck.length < 4) {
            return { gameOver: true, winner: "Player 2", reason: "Player 1 cannot continue war" };
        }
        if (this.player2Deck.length < 4) {
            return { gameOver: true, winner: "Player 1", reason: "Player 2 cannot continue war" };
        }

        for (let i = 0; i < 3; i++) {
            warPile.push(this.player1Deck.shift());
            warPile.push(this.player2Deck.shift());
        }

        const warTopCard1 = this.player1Deck.shift();
        const warTopCard2 = this.player2Deck.shift();
        warPile.push(warTopCard1, warTopCard2);

        if (warTopCard1.value > warTopCard2.value) {
            this.player1Deck.push(...warPile);
            return {
                result: "Player 1 wins the war",
                warTopCard1,
                warTopCard2,
                player1DeckCount: this.player1Deck.length,
                player2DeckCount: this.player2Deck.length,
            };
        } else if (warTopCard2.value > warTopCard1.value) {
            this.player2Deck.push(...warPile);
            return {
                result: "Player 2 wins the war",
                warTopCard1,
                warTopCard2,
                player1DeckCount: this.player1Deck.length,
                player2DeckCount: this.player2Deck.length,
            };
        } else {
            return this.war(warTopCard1, warTopCard2, warPile);
        }
    }

    consolePrintPlayer1Deck(){
        console.log("=======Player 1 Deck=======:")
        for (let i=0; i<this.player1Deck.length;i++){
            console.log(this.player1Deck[i]);
    }
    }
    
    consolePrintPlayer2Deck(){
        console.log("=======Player 2 Deck=======:")
        for (let i=0; i<this.player2Deck.length;i++){
            console.log(this.player2Deck[i]);
    }
    }

    
}







module.exports= {Card, Deck, Game};
