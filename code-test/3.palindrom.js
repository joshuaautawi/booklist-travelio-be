const isPalindrom = (str) => {
  const loopTimes = Math.ceil(str.length / 2);
  const lastStrIndex = str.length - 1;
  for (let i = 0; i < loopTimes; i++) {
    if (str[i] != str[lastStrIndex - i]) {
      return "not palindrome";
    }
  }
  return "palindrome";
};

console.log(isPalindrom('bringback'))
