/*Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the
 first letter of each word.
 Words will be separated by only one space. */

function LetterCapitalize(str) {
  const words = str.split(' ');

  const upperWords =  words.map((word) => {
    let upper =  word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    return upper;
  });

  return upperWords.join(' ');
}

console.log(LetterCapitalize('cristina rojas zamora santana be vo'));
