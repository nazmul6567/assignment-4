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

console.log(resultReport([]));
