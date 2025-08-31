function totalFine(fare) {
  if (typeof fare !== 'number' || fare <= 0) {
    return 'Invalid';
  }

  let result = fare + fare * (20 / 100) + 30;

  return result;
}



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

echo "# assignment-4" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nazmul6567/assignment-4.git
git push -u origin main

function bestTeam(player1, player2) {
  if (
    typeof player1 !== 'object' ||
    typeof player2 !== 'object' ||
    Array.isArray(player1) === true ||
    Array.isArray(player2) === true
  ) {
    return 'Invalid';
  }

  const total1 = player1.foul + player1.cardY + player1.cardR;

  const total2 = player2.foul + player2.cardY + player2.cardR;

  if (total1 < total2) {
    return player1.name;
  } else if (total2 < total1) {
    return player2.name;
  } else {
    return 'Tie';
  }
}



function isSame(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return 'Invalid';
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}




function resultReport(marks) {
  if (Array.isArray(marks) !== true) {
    return 'Invalid';
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let sum = 0,
    passed = 0,
    failed = 0;

  for (let mark of marks) {
    sum += mark;

    if (mark >= 40) {
      passed++;
    } else {
      failed++;
    }
  }

  const avg = Math.round(sum / marks.length);

  return {
    finalScore: avg,

    pass: passed,

    fail: failed,
  };
}
