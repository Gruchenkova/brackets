module.exports =
function check(str, bracketsConfig) {
  let stack = [];
  Object.defineProperty(stack, 'lastItem', {
    enumerable: false,
    get() {
      return this[this.length - 1];
    }
  });
 let openBrackets= [],
    closeBrackets= [];
    if (str.length %2 !=0){
    return false
    }
  for (let i = 0; i < bracketsConfig.length; i++) {
   openBrackets.push(bracketsConfig[i][0])
   closeBrackets.push(bracketsConfig[i][1])
  }
  for (let k = 0; k < str.length; k++) {
    if (openBrackets.includes(str[k])&&closeBrackets.includes(str[k])&& stack.lastItem === str[k]) {
      stack.pop()
    } else if (openBrackets.includes(str[k])&& closeBrackets.includes(str[k])&& stack.lastItem != str[k]){
      stack.push(str[k])
    }else if (openBrackets.includes(str[k])){
    stack.push(str[k])
    }else if (closeBrackets.includes(str[k])){
    for (let d=0;d<bracketsConfig.length; d++){
    if (bracketsConfig[d][1]===str[k]&&bracketsConfig[d][0]===stack.lastItem){
    stack.pop()
    }
    }
    }
  }
  if (stack.length === 0){
  return true
  }else return false
}
