const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', function() {

  it('should be a function', function() {
    const turn = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const turn = new Deck();
    expect(turn).to.be.an.instanceof(Deck);
  });

  it('should be able to count the amount of cards it conatins', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3)
  });

});
