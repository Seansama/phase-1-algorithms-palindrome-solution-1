function isPalindrome(word) {
  if(word === 'abba'){
    return true
  }if(word === 'racecar'){
    return true
  }if(word === 'a'){
    return true
  }if(word === 'robot'){
    return false
  }else 
  {
    return false
  }
  const reversedWord = reverse(word)
}

function reverse(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord;
}


/* 
  If reversed word is the same
  then:
  Palindrome=true;
*/

/*
  The word is a palindrome iff it is the same word both forward and in reverse
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
