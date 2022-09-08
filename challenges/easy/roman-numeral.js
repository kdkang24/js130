class RomanNumeral {
  constructor(number) {
    if (number > 3000) {
      throw new Error('Number is too large for Roman numerals!');
    }
    this.number = String(number);
  }

  toRoman() {

    const ONES = {
      0: "",
      1: "I", 
      2: "II", 
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
    };

    const TENS = {
      0: "",
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L",
      6: "LX",
      7: "LXX",
      8: "LXXX",
      9: "XC",
    }

    const HUNDREDS = {
      0: "",
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM",
    }

    const THOUSANDS = {
      1: "M",
      2: "MM",
      3: "MMM",
    }

    let length = this.number.length;
    let ones = this.number[length - 1];
    let tens = this.number[length - 2];
    let hundreds = this.number[length - 3];
    let thousands = this.number[length - 4];

    let romanNumber = "";
    if (thousands) {
      romanNumber += THOUSANDS[thousands];
    }

    if (hundreds) {
      romanNumber += HUNDREDS[hundreds];
    }

    if (tens) {
      romanNumber += TENS[tens];
    }

    if (ones) {
      romanNumber += ONES[ones];
    }

    return romanNumber;
  }
}

module.exports = RomanNumeral;

/*
Roman numerals

I - 1
IV - 4
V - 5
IX - 9
X - 10
XL - 40
L - 50
XC - 90
C - 100
CD  - 400
D - 500
CM - 900
M - 1000
*/