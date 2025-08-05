const { Deck, Game } = require('../gameLogic');

let currentGame;

exports.startGame = (req, res) => {
    const { Deck, Game } = require('../gameLogic');
    const deck = new Deck();
    deck.shuffleDeck();
    currentGame = new Game(deck);
    res.json({ message: "Game started" });
  };
  
  exports.playTurn = (req, res) => {
    if (!currentGame) return res.status(400).json({ error: "Start a game first" });
    const result = currentGame.playOneTurn();
    res.json(result);
  };