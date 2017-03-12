function factorial(x){
  var answer = 1;
  for (var i = x; i > 0; i--){
    answer = answer*i;
  }
  return answer;
}