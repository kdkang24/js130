class sumOfMultiples {
  constructor(...factors) {
    this.factors = [...factors].sort((a, b) => a - b);
    // default factors are 3 and 5 if none are provided
    if (this.factors.length === 0) {
      this.factors = [3, 5];
    }
  }

  //static method
  static to(target) {
    let obj = new sumOfMultiples();
    return obj.to(target);
  }

  //instance method
  to(target) {
    let allMultiples = [];
    this.factors.forEach(factor => {
      let counter = 1;
      while (factor * counter < target) {
        allMultiples.push(factor * counter);
        counter += 1; 
      }
    });

    allMultiples = [...new Set(allMultiples)];
    let sum = allMultiples.reduce((a, b) => a + b, 0);
    return sum;
  }
}

module.exports = sumOfMultiples;
