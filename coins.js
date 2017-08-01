/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var amount = prompt("How much do you have in your coin purse?");
var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;


 function coinCounter(amount) {
   // Initialize a JavaScript object to hold the coins
  amount = amount * 100;
  var whatsLeft = amount;
  var coinPurse = {
      quarters:'',
      dimes:'',
      nickels:'',
      pennies:'',
    }; 

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  do { 
      if (whatsLeft >= quarter) {
        coinPurse.quarters = Math.floor(whatsLeft / quarter);
        whatsLeft = whatsLeft % quarter;
            
      } else if (whatsLeft >= dime){
        coinPurse.dimes = Math.floor(whatsLeft / dime);
        whatsLeft = whatsLeft % dime;
          
      } else if (whatsLeft >= nickel){
        coinPurse.nickels = Math.floor(whatsLeft / nickel);
        whatsLeft = whatsLeft % nickel;
         
      } else if (whatsLeft >= penny){
        coinPurse.pennies = Math.floor(whatsLeft / penny);
        whatsLeft = whatsLeft % penny;
          
      } else {
        whatsLeft = 0
        console.log("shit's broken");
      }
    }
  while (whatsLeft > 0);

  return coinPurse;
 
 }

 var coins = coinCounter(amount);
 console.log(coins);