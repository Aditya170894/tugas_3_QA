let arr1 = [1,2,3,4,5];
let sum = 0;
let min, max;

for(let i = 0; i < arr1.length; i++){  
  sum += arr1[i];
  let tempNumber = arr1[i];
    if(i == 0){
      min = tempNumber;
      max = tempNumber;
    } else{
      if(tempNumber < min) min = tempNumber;
      if(tempNumber > max) max = tempNumber;
      }
}
// hasil penjumlahan 4 bilangan dari 5 bilangan pada array
arr1.forEach((element) => {
  console.log(sum - element);
});
//nilai max & min
console.log("nilai max " + (sum - min));
console.log("nilai min " + (sum - max));