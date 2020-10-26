var choreEarnedDataURL = 'https://api.sheety.co/d0224c1122eba3307dc190260ea81f6c/cadenceRewards/reward';

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var dataJSON = JSON.parse(httpGet(choreEarnedDataURL));

console.log('START HERE:')
console.log(dataJSON.reward[0].amount);