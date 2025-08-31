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

console.log(
  bestTeam(
    { name: 'Brazil', foul: 5, cardY: 1, cardR: 0 },
    { name: 'Argentina', foul: 7, cardY: 0, cardR: 0 }
  )
);
