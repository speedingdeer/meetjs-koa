var eval = require('eval')

module.exports = (a, b, op) => {
 return new Promise((resolve, reject) => {
    setTimeout(() =>{
      switch(op.trim()) {
        case '+': resolve(a + b); break;
        case '-': resolve(a - b); break;
        case '/': resolve(a / b); break;
        case '*': resolve(a * b); break;
      }
    }, 100);
  });
}