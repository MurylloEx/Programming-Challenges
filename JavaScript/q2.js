function bubbleSort(arr){
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n; i++){
      if (arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

function max(...arguments) {
  const args = arguments
    .map(v => Array.isArray(v) ? v : [v])
    .reduce((a, b) => a.concat(b));
  bubbleSort(args);
  return args[args.length - 1];
}

console.log(max(40, 28, 9, 30, 35))