// Fisher-Yates Algorithm
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


// Get minimum value of 2D array
// Function can return min value or its coordinates
const minValue = (a, returnValue = 'value') => {
  let coords;
  let min = Infinity;

  for (i = 0; i < a.length; i++) {
    if (Math.min(...a[i]) < min) {
      min = Math.min(...a[i]);
      coords = [i, a[i].indexOf(min)];
    }
  }

  if (returnValue == 'coords') {
    return coords;
  } else {
    return min;
  }

}
