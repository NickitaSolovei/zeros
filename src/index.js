module.exports = function getZerosCount(number) {
  // your implementation
  var answer1 = 0;

  function divide5(n){
    var newN = n / 5;
    if (newN >= 1){
      newN = Math.floor(newN);
      answer1 += newN;
      divide5(newN);
    }
  }
  divide5(number);

  return answer1;
}
