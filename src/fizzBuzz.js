function FizzBuzz() {
};

FizzBuzz.prototype.play = function(number) {
  if (this.check(number, 15)){
    return 'fizzbuzz';
  }
  if (this.check(number, 5)){
    return 'buzz';
  }
  if (this.check(number, 3)){
    return 'fizz';
  }
  return number;
};

FizzBuzz.prototype.check = function(number, divisor) {
  return number % divisor === 0;
};
