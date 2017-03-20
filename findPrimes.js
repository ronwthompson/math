function primes(num) { //gets all prime numbers less than or equal to num
  var primes = [];
  for (var i = 2; i <= num; i++){
    var prime = true;
    for (var x = i; x > 0; x--){
      if (x != i && x != 1 && i%x === 0){
        prime = false;
      }
    }
    if (prime === true){
      primes.push(i);
    }
  }
  return primes;
}