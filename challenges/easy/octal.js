class Octal {
  constructor(octalString) {
    const VALID_CHARS = '01234567'.split('');
    // check that all chars in octalString are valid
    if (octalString.split('').every(char => VALID_CHARS.includes(char))) {
      this.octal = octalString;
    } else {
      this.octal = '0';
    } 
  }

  toDecimal() {
    let length = this.octal.length;
    let sum = 0;

    for (let index = 0; index < length; index++) {
      sum += this.octal[index] * (8 ** (length - (index + 1)));
    }

    return sum;
  }
}

module.exports = Octal;

// let octal = new Octal('234abc');
// console.log(octal.octal);