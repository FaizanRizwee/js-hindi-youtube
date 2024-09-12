const accountId = 1121
let accountEmail = "faizan@google.com"
var accountPass = "636633"
accountCity = "Delhi" //Bina Variable Name k bhi Define kr skte h bt not preferred
let accountState;

// acccountId= 2  Not Allowed

accountEmail = "faiz@gmail.com"
accountPass = "66767"
accountCity = "Patna"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])

/* {
    curly braces are scopes
 } */