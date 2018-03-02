/*
module.exports = (a, b, op) => {
 return new Promise((resolve, reject) => {
    switch(op.trim()) {
      case '+': resolve(a + b); break;
      case '-': resolve(a - b); break;
      case '/': resolve(a / b); break;
      case '*': resolve(a * b); break;
    }
  });
}
*/

module.exports = async (a, b, op) => {
  switch(op.trim()) {
    case '+': return a + b;
    case '-': return a - b;
    case '/': return a / b;
    case '*': return a * b;
  }
}