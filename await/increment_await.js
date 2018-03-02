const increment = require('./increment');


(async () => {
  try {
    let result = 0;
    result = await increment(result);
    console.log(`1 = ${result}`)
  } catch(e) {
    console.error(e)
  }
  
})();


(async () => {
  try {
    let result = 0;
    result = await increment(result); // 1
    result = await increment(result); // 2
    result = await increment(result); // 3
    result = await increment(result); // 4
    result = await increment(result); // 5
    result = await increment(result); // 6
    result = await increment(result); // 7
    result = await increment(result); // 8
    result = await increment(result); // 9
    result = await increment(result); // 10
    console.log(`10 = ${result}`)
  } catch(e) {
    console.error(e)
  }
})();

(async () => {
  try {
    let result = 0;
    for(let i = 0; i < 10; i++) {
      result = await increment(result)
    }
    console.log(`10 = ${result}`)
  } catch(e) {
    console.error(e)
  }
})();

