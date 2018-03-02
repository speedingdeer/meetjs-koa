module.exports = (i) => {
 return new Promise((resolve, reject) => {
    // if(i == 5) reject('Hello Exception');
    resolve(i+1)
  });
}