class Scrabble {
  constructor(word) {
    if (word === null || word === undefined) {
      word = '';
    }

    this.word = word.trim();
  }

  static VALUES = {
    "1": "AEIOULNRST".split(''),
    "2": "DG".split(''),
    "3": "BCMP".split(''),
    "4": "FHVWY".split(''),
    "5": "K".split(''),
    "8": "JX".split(''),
    "10": "QZ".split(''),
  }

  static score = function(arg = this.word) {
    let scrabble = new Scrabble(arg);
    return scrabble.score();
  }

  score(arg = this.word) {
    let total = 0;
    // Loop through each character in this.word
    [...arg.toUpperCase()].forEach(char => {
      // Loop through each key in VALUES
      for (let key in Scrabble.VALUES) {
        if (Scrabble.VALUES[key].includes(char)) {
          total += Number(key);
        }
      }
    });

    return total;
  }
}

module.exports = Scrabble;

// Constructor
// function Scrabble(word) {
//   // Guard clause against null or undefined args
//   if (word === null || word === undefined) {
//     word = '';
//   }
  
//   // Guard clause against lack of new keyword
//   if (!(this instanceof Scrabble)) {
//     return new Scrabble(word);
//   }

//   // remove white space then set as property
//   this.word = word.trim();
// }

// Scrabble.VALUES = {
//   "1": "AEIOULNRST".split(''),
//   "2": "DG".split(''),
//   "3": "BCMP".split(''),
//   "4": "FHVWY".split(''),
//   "5": "K".split(''),
//   "8": "JX".split(''),
//   "10": "QZ".split(''),
// };

// Scrabble.prototype.score = function(arg = this.word) {
//   let total = 0;
//   // Loop through each character in this.word
//   [...arg.toUpperCase()].forEach(char => {
//     // Loop through each key in VALUES
//     for (let key in Scrabble.VALUES) {
//       if (Scrabble.VALUES[key].includes(char)) {
//         total += Number(key);
//       }
//     }
//   });

//   return total;
// }

// Scrabble.score = Scrabble.prototype.score;


