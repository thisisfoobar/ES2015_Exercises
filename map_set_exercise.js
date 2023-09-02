// Question 1
// new Set([1,1,2,2,3,4])
// returns {1,2,3,4}

// Question 2
// [...new Set("referee")].join("")
// returns "ref"

// Question 3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// returns {[1,2,3] => true, [1,2,3] => false}

// hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

// vowelCount
function isVowel(char) {
  let vowels = "aeiou";
  return vowels.includes(char);
}
const vowelCount = (string) => {
  let stringVowels = new Map();
  for (char of string) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (stringVowels.has(lowerCaseChar)) {
        stringVowels.set(lowerCaseChar, stringVowels.get(lowerCaseChar) + 1);
      } else {
        stringVowels.set(lowerCaseChar, 1);
      }
    }
  }
  return stringVowels;
};

vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount("Colt"); // Map { 'o' => 1 }
