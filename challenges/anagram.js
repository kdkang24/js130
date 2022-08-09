class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(wordArray) {
    // matches are case-insensitive
    let matches = [];
    let target = this.word.toLowerCase();
    wordArray.forEach(candidate => {
      let word = candidate.toLowerCase();
      // verify they are not the same word, then check for same length, then verify if anagram
      if ((word !== target) && (word.length === target.length) && this.isAnagram(word)) {
        matches.push(candidate);
      }
    });

    return matches;
  }

  isAnagram(candidate) {
    // create objects with letter counts for word and potential match
    let wordDict = {};
    let candidateDict = {};
    let anagram = true;

    // letter count for original word
    [...(this.word.toLowerCase())].forEach(char => {
      if (wordDict[char]) {
        wordDict[char] += 1;
      } else {
        wordDict[char] = 1;
      }
    });

    // letter count for match candidate
    [...candidate].forEach(char => {
      if (candidateDict[char]) {
        candidateDict[char] += 1;
      } else {
        candidateDict[char] = 1;
      }
    });

    // compare keys and values of both objects
    for (let key in wordDict) {
      if (wordDict[key] !== candidateDict[key]) {
        anagram = false;
        break;
      }
    }

    return anagram;
  }
}

module.exports = Anagram;
