var Game = require('./Game.js');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    return this.guess === this.card.correctAnswer
  }
  giveFeedback() {
    return this.guess === this.card.correctAnswer ? 'Correct!' : 'Incorrect!';
  }
}

module.exports = Turn;
