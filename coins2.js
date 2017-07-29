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
var total = prompt("How much do you have in your coin purse?");
var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;


function coinCounter (total) {
  // Initialize a JavaScript object to hold the coins
  total = total * 100;
  var amountRemaining = total
  var coinPurse = {
    quarters: '',
    dimes: '',
    nickels: '',
    pennies: ''
  };
  
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  if (amountRemaining >= quarter) {
    coinPurse.quarters = Math.floor(amountRemaining/quarter);
    amountRemaining = total % quarter;}
  
  if (amountRemaining < quarter && amountRemaining >= dime) {
    coinPurse.dimes = Math.floor(amountRemaining/dime);
    amountRemaining = total % dime;}
  
  if (amountRemaining < dime && amountRemaining >= nickel) {
    coinPurse.nickels = Math.floor(amountRemaining/nickel);
    amountRemaining = total % nickel;}

  if (amountRemaining < nickel && amountRemaining >= penny) {
    coinPurse.pennies = Math.floor(amountRemaining/penny);}
 
  return coinPurse;
}

var coins = coinCounter(total)
console.log(coins);