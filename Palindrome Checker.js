function palindrome(str) {
  let palindromeCheckerString = str.replace(/\W+|_/g, "").toLowerCase();
  let transposedWordOrSentence = palindromeCheckerString.split("").reverse().join("");

  if (palindromeCheckerString != transposedWordOrSentence) {
    return false;
  }
  return true;
}



palindrome("eye");
console.log(palindrome("five|\_/|four"));