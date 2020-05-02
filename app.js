function makeCounter(noun) {
  let count = 0;
  return function() {
    count++;
    console.log(`There are ${count} ${noun}s.`);
  }
}


// let birdCounter = makeCounter('bird');
// let dogCounter = makeCounter('dog');
// let birdCounter2 = makeCounter('bird');

// each instance has its own private scope thanks to the closure
