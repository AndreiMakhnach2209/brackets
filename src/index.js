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
      if (item === stack[stack.length - 1] && brackets.close[item] === item) stack.pop()
      else stack.push(item);
    }else{
      if (!stack.length) return false;
      if (brackets.close[item]) {
        if (stack.length) {
          if (brackets.close[item] === stack[stack.length - 1]) stack.pop();
          else return false;
        }else{
          return false;
        }
      }
    }
    console.log(stack)
  })
  return (stack.length) ? false : true;
}

// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7));
// console.log(check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6));
// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', config6));
