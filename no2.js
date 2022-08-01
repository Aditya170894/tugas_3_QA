function inputNumber(angka){
  let pembagi = 0;
  for(let i = 1; i < angka; i++){
    if(angka%i == 0){
      pembagi++;
    }
  }
  if(pembagi == 1){
    console.log(angka + " adalah bilangan prima");
  } else{
      console.log(angka + " adalah bukan bilangan prima");
    }
}
inputNumber(2);
inputNumber(3);
inputNumber(4);
inputNumber(5);
inputNumber(6);
inputNumber(7);