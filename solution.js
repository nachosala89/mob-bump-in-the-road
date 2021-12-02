function bump(x) {
  let accum = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'n') {
      accum++;
    }
  }
  if (accum <= 15) {
    return 'Woohoo!';
  } else {
    return 'Car Dead';
  }
}