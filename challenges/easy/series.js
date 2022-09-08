class Series {
  constructor(digits) {
    this.digits = String(digits);
  }
  
  slices(length) {
    // Guard clause
    if (length > this.digits.length) {
      throw new Error('Specified length is too long.');
    }
    
    let result = [];
    let nums = this.digits.split('');
    for (let counter = 0; counter <= nums.length; counter++) {
      if (nums[counter + length - 1] !== undefined) {
      let slice = nums.slice(counter, counter + length);
      slice = slice.map(num => Number(num));
      result.push(slice);
      }
    }

    return result;
  }   
}  

module.exports = Series;

let series = new Series('01234');
console.log(series.slices(1))