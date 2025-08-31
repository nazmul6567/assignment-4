function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  }
  let result = '';
  for (const item of str) {
    if (item !== ' ') {
      result += item;
    }
  }
  let finalResult = result.toUpperCase();
  return finalResult;
}

// ["hack", "me"]
// true

console.log(onlyCharacter(['hack', 'me']));
