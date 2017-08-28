var ClozeCard = require ("./ClozeCard.js");
var BasicCard = require ("./BasicCard.js");
// var firstPresident = new ClozeCard("Who was the first president of the United States?", "George Washington")

// console.log(firstPresident.cardArray);

// firstPresident.addCard("Who was the first president of the United States?", "George Washington")

// console.log(JSON.stringify(firstPresident.cardArray, null, 2) + "\n");
// // console.log(firstPresident.cardArray[0].front)

// // console.log(firstPresident.cardArray[0].back)

var sky = new BasicCard("What is the color of the sky?", "blue");
console.log('\nFront Card: ' + sky.front);
console.log('Back Card: ' + sky.back + '\n');

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");
console.log('\nfull text: ' + firstPresidentCloze.fullText);
console.log('cloze text: ' +  firstPresidentCloze.cloze);
console.log('partial text: ' + firstPresidentCloze.partial() + '\n');

var error = new ClozeCard("Statue of Liberty is in New York", "State of Liberty");
console.log(error.fullText);
console.log(error.cloze);
console.log(error.partial());
