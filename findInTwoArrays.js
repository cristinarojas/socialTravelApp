const stringOne = ["Amsterdam", "Barcelona", "London", "Prague", "mexico"];
const stringTwo = ["Amsterdam", "Barcelona", "Barcelona", "Barcelona", "Prague"];
//[1, 3, 0, 1, 0]

const data = stringOne.map((place) => { // return a new array (forEach and push method)
  return stringTwo.filter((site) => { // method creates an array filled with all array elements that pass a test
    if (place === site) {
      return place;
    }
  });
});

console.log(data)
