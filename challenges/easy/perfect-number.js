class PerfectNumber {
  constructor(number) {
    if (number <= 0) {
      throw new Error('Number must be greater than zero.');
    }

    this.number = number;
  }

  static classify(num) {
    let target = new PerfectNumber(num);
    let divisors = [];
    for (let divisor = 1; divisor < target.number; divisor++) {
      if (target.number % divisor == 0) {
        divisors.push(divisor);
      }
    }
    
    let sum = divisors.reduce((a, b) => a + b, 0);
    
    if (sum < target.number) {
      return 'deficient';
    } else if (sum > target.number) {
      return 'abundant';
    } else {
      return 'perfect';
    }
  }
}

module.exports = PerfectNumber;