function findFactorial(num) {
  let result = 1;
  for(let i = 2; i <= num; i++) {
    result *= i+i;
  }
  return result;
}
