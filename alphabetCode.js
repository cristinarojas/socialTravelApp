const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function LetterChanges(myString) {
    let count = 0;
    const output = [];

    [...myString.toLowerCase()].forEach((letter) => {
      let indexFound = alphabet.indexOf(letter);
      let nextLetter = alphabet.charAt(indexFound + 1);
      output.push(nextLetter);
    });

    return output;
}

console.log(LetterChanges('ace')); // [b, d, f]
