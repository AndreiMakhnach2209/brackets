module.exports = function check(str, bracketsConfig) {
  // your solution
  const brackets = {
    open : [],
    close : {}
  };

  bracketsConfig.forEach(element => {
    brackets.open.push(element[0]);
    brackets.close[element[1]] = element[0];
  });

  const strArr = str.split('');
  let stack = [];

  for (let item of strArr) {
    if (brackets.close[item] === item) {
      if (item === stack[stack.length - 1]) stack.pop();
      else stack.push(item);
    }else{
      if (brackets.open.includes(item)) stack.push(item);
      else {
        if (brackets.close[item] === stack[stack.length - 1] && stack.length) {
          stack.pop();
        }else{
         return false;
        }
      }
    }
  }
  return (stack.length) ? false : true;
}