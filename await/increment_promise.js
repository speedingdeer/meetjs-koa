const increment = require('./increment');


(() => {
  increment(0)
    .then(result => {
      console.log(`1 = ${result}`)
    })
    .catch(e => {
      console.error(e)
    })
})();

(() => {
  increment(0) // 1
    .then(increment) // 2
    .then(increment) // 3
    .then(increment) // 4
    .then(increment) // 5
    .then(increment) // 6
    .then(increment) // 7
    .then(increment) // 8
    .then(increment) // 9
    .then(increment) // 10
    .then(result => {
      console.log(`10 = ${result}`)
    })
    .catch(e => {
      console.error(e)
    })
})();