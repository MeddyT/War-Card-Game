function compareDecks(gameInstance) {
    while (gameInstance.player1Deck.length > 0 && gameInstance.player2Deck.length > 0) {
        const topcard2 = gameInstance.player2Deck.shift();
        const topcard1 = gameInstance.player1Deck.shift();

        if (topcard1.value > topcard2.value) {
            gameInstance.player1Deck.push(topcard1, topcard2);
        } else if (topcard2.value > topcard1.value) {
            gameInstance.player2Deck.push(topcard2, topcard1);
        } else {
            let warPile = [];
            War(gameInstance, topcard1, topcard2, warPile);
        }
    }

    if (gameInstance.player1Deck.length === 0) {
        console.log("Player 2 Wins!");
    }
    if (gameInstance.player2Deck.length === 0) {
        console.log("Player 1 Wins!");
    }
}

function War(gameInstance, topcard1, topcard2, warPile) {
    if (gameInstance.player1Deck.length < 4) {
        console.log("Player 2 Wins!");
        return;
    } else if (gameInstance.player2Deck.length < 4) {
        console.log("Player 1 Wins!");
        return;
    }

    warPile.push(topcard1, topcard2);
    warPile.push(
        gameInstance.player1Deck.shift(),
        gameInstance.player2Deck.shift(),
        gameInstance.player1Deck.shift(),
        gameInstance.player2Deck.shift(),
        gameInstance.player1Deck.shift(),
        gameInstance.player2Deck.shift()
    );

    const warTopCard1 = gameInstance.player1Deck.shift();
    const warTopCard2 = gameInstance.player2Deck.shift();
    warPile.push(warTopCard1, warTopCard2);

    if (warTopCard1.value > warTopCard2.value) {
        gameInstance.player1Deck.push(...warPile);
    } else if (warTopCard2.value > warTopCard1.value) {
        gameInstance.player2Deck.push(...warPile);
    } else {
        War(gameInstance, warTopCard1, warTopCard2, warPile);
    }
}

module.exports = { compareDecks };