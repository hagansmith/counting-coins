# Counting Coins

## Synopsis:

Counting coins is an introductory exercise to javascript. Javascript math and if statements are used to write results to the console.

## What to expect:
An alert displays asking for a value the console then displays the the max amount of each coin to make up the total.

![DEMO](https://github.com/hagansmith/counting-coins/blob/master/Coins.png)

## Requirements

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

```js
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

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();
```

## How to run (Node must be installed on your machine):

1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

```
git clone git@github.com:hagansmith/counting-coins.git
cd counting-coins
npm install http-server -g
hs -c-1
```
Navigate to: http://localhost:8080

Coin count is displayed in the console so it must be open to view the results.
