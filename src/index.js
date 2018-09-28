module.exports = function getZerosCount(number) {
  // your implementation
  let answer = 0;
  let divide5 = n => {
    let newN = n / 5;
    if (newN >= 1){
      newN = Math.floor(newN);
      answer += newN;
      divide5(newN);
    }
  }
  divide5(number);
  return answer;
}
