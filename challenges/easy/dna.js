class DNA {
  constructor(dna) {
    this.dna = dna;
  }

  hammingDistance(otherDNA) {
    let counter = 0;
    let length = Math.min(this.dna.length, otherDNA.length);
    for (let index = 0; index < length; index++) {
      if (this.dna[index] !== otherDNA[index]) {
        counter++
      }
    }
    return counter;
  }
}

module.exports = DNA;