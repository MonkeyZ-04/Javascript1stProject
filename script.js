function getData(){ 
    // football api
    fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",{
        "method" : "GET",
        "headers" : {
            "x-repidapi-host": "v3.football.api-sports.io",
            "x-repidapi-key": ""
        }
    })
}