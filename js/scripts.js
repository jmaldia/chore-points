var choreEarnedDataURL = 'https://api.sheety.co/d0224c1122eba3307dc190260ea81f6c/cadenceRewards/reward';

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// CONVERT RETURN VALUE TO JSON
var dataJSON = JSON.parse(httpGet(choreEarnedDataURL));

// VARIABLE TO BE DISPLAYED
var earnedCash = dataJSON.reward[0].amount.toFixed(2);
var earnedPass = dataJSON.reward[10].amount;

// DISPLAY DATA ON PAGE
document.getElementById("earned-cash").innerHTML = "$" + earnedCash;
document.getElementById("earned-pass").innerHTML = earnedPass;

console.log('START HERE:')
// console.log(dataJSON.reward);
console.log(typeof earnedCash);
console.log(earnedPass);