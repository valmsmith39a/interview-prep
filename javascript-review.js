
'use strict'

// Closures
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function makeCounter() {
  let count = 0

  function increment() {
    return count += 1
  }
  return increment
}

const inc = makeCounter()

console.log(inc())
console.log(inc())
console.log(inc())

