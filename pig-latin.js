// Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

const userInput = process.argv.slice(2);

const pigLatin = function(arr) {
  if (!arr[0]) {
    console.log("Please enter a word to translate.");
    return;
  }
  const newArr = [];
  for (let word of arr) {
    let wordArr = word.split("");
    let firstLetter = wordArr.shift();
    console.log(wordArr);
    wordArr.push(firstLetter);
    wordArr.push("ay");
    let newWord = wordArr.join("");
    newArr.push(newWord);
  }
  let pigString = "";
  newArr.forEach((word) => {
    pigString += word + " ";
  });
  pigString = pigString.trim();
  pigString += ".";
  console.log(pigString);
}

pigLatin(userInput);