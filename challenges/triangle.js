class Triangle {
  constructor(side1, side2, side3) {
    // sort sides and test for valid triangle lengths
    let [ a, b, c ] = [side1, side2, side3].sort((a, b) => a - b);
    
    // throw error if any sides are less than or equal to zero
    if ([a, b, c].every(value => value > 0) !== true) {
      throw new Error('All sides must have length greater than zero.');
    }

    // triangle inequality test
    if (a + b <= c) {
      throw new Error('Sum of two shorter sides must be equal or greater than third side.');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    // check for all sides equal
    if ((this.a === this.b) && (this.b === this.c)) {
      return 'equilateral';
    }
    // check for two sides equal
    else if ((this.a === this.b) || (this.b === this.c)) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;


