const matriz = [
  [10, 3],
  [1, 3]
];

function calcDet(a){
  return a[0][0] * a[1][1] - a[0][1] * a[1][0];
}

console.log(calcDet(matriz))