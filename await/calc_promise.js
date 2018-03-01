const calc = require('./calc');

(() => {

  // 2 * 2 + ( 4 - 3 ) * 2'

  Promise.all([
    calc(4, 3, '-')
      .then(res => {
        return calc(res, 2, '*')
      }),
    calc(2, 2, '*').then()
  ]).then(res => {
    calc(res[0], res[1], '+').then(res => {
      console.log(res)
    })
  })

})();