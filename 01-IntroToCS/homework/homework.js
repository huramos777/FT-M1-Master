'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  let exp = num.length - 1;
  console.log(exp)
  
  
  for (let i = 0; i < num.length; i++) {
    if(num[i] == 1){
      sum = sum + Math.pow(2, exp)
    }
    exp = exp - 1;    
  }
  return sum;

  
}

function DecimalABinario(num) {
  // tu codigo aca
  let resultBinaryStr = '' //declaro variable con string vacio para asegurarme que es string
  let result = 0 //inicializo variable donde van los restos de las divisiones
  //inicio bucle mientras el numero sea distinto de 0 (hasta que llegue a 0)
  while(num !== 0){
    result = num % 2 //calculo resto
    num = Math.floor(num / 2) //calculo nuevo numero para siguiente bucle
    resultBinaryStr = result + resultBinaryStr // resultado al inicio del string 
  }

  return resultBinaryStr
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}