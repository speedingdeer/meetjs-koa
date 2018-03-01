const calc = require('./calc');


(async () => {

  // 2 * 2 + ( 4 - 3 ) * 2

  let result = await calc(
    await calc(
      2,
      2,
      '*'),
    await calc(
      await calc(
        4,
        3,
        '-'), 
      2,
      '*'),
  '+')


  let result_2 = await calc(await calc(2, 2,'*'), await calc(await calc(4, 3, '-'), 2, '*'), '+')


  let result_3_1 = await calc(2, 2,'*');
  let result_3_2 = await calc(await calc(4, 3, '-'), 2, '*');
  let result_3 = await calc(result_3_1, result_3_2, '+');


  console.log(`${(2 * 2 + ( 4 - 3 ) * 2)} = ${result} = ${result_2} = ${result_3}`);


})();