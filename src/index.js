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

  strArr.forEach(item => {
    if (brackets.open.includes(item)) {
      if (item === stack[-1]) stack.pop()
      else stack.push(item);
    }else{
      if (brackets.close[item]) {
        if (stack.length) {
          if (brackets.close[item] === item) stack.pop();
          else return false;
        }else{
          return false;
        }
      }
    }
  })
  return true;
}

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// console.log(check('1111156111111111561111111122228888882222557787777877555566667777777777662222211112222888882222577877778775555666677777777776622222',config6));