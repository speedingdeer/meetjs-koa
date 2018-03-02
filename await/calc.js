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