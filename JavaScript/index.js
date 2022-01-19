function sumNumbers(value){
  let count = 0;
  for (let i = 1; i < value; i++)
    if (!(i % 3) || !(i % 5)) count += i;
  return count;
}

//Example 1:
console.log(sumNumbers(10));

//Example 2:
console.log(sumNumbers(11));
