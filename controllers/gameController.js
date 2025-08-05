const { Deck, Game } = require('../gameLogic');

let currentGame;

exports.startGame = (req, res) => {
  const deck = new Deck();
  deck.shuffleDeck();
  currentGame = new Game(deck);
  res.json({ message: 'Game started' });
};

exports.playTurn = (req, res) => {
  const result = currentGame.playOneTurn();  
  res.json(result);
};