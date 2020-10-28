let url = 'https://api.sheety.co/d0224c1122eba3307dc190260ea81f6c/cadenceRewards/reward';

fetch(url)
    .then((response) => response.json())
    .then(json => {
        // Do something with the data
        let earnedCash = json.reward[0].amount.toFixed(2);
        let earnedPass = json.reward[10].amount;

        document.getElementById("earned-cash").innerHTML = "$" + earnedCash;
        document.getElementById("earned-pass").innerHTML = earnedPass;
        
        return json.reward;
    });