function largestOfFour(arr) {
  let ans = 0;
  let a = [];
 for (let i = 0; i < arr.length; i++){
       max = arr[i][0];
       ans = arr[i][0];
   for(let j = 1; j < arr[i].length; j++){     
       if(ans >= max){
      max = arr[i][j];
   }
   }
   a[i] = max;
 }
  return a;
}

let x = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(x);


