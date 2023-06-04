//Dom varaible
var elapsedTime = document.querySelector("#elapsed");
var homeTeamLogo = document.querySelector("#homeLogo");
var homeTeamName = document.querySelector("#homeName");
var awayTeamLogo = document.querySelector("#awayLogo");
var awayTeamName = document.querySelector("#awayName");
var lastMatchGoals = document.querySelector("#goals");
var matchTable = document.querySelector("#matchTable");


function getData(){ 
    // football api
    fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",{
        "method" : "GET",
        "headers" : {
            "x-repidapi-host": "v3.football.api-sports.io",
            "x-repidapi-key": "1877b85542mshd6fbd9e339d339fp11978ejsn3fd72e1b4fbd" //API KEY
        }
    })
    .then(response => response.json().then(data =>{
        //test endpoint
        //console.log(response);
        var mactchesList = data['response'];  
        var fixture = mathchesList[0]['fixture'];
        var goals = mactchesList[0]['goals']; //return the goals data
        var teams = mathchesList[0]['teams']; //return teams data

        //render data in page
        elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";
        homeTeamLogo.src = teams['home']['logo'];
        homeTeamName.innerHTML = teams['home']['name'];
        awayTeamLogo.src = teams['away']['logo'];
        homeTeamLogo.src = teams['home']['name'];
        lastMatchGoals.innerHTML = goals['home']+ "  :  " +goals['away'];
    
    }))
    .catch(err =>{
        console.log(err);
    })
}
getData();