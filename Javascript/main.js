console.log('hi!');

// let player1Json = 'amandamitchell4';
// let player2Json = 'leotaylor2';

const printToDom = (domString, divId) =>{
    document.getElementById(divId).innerHTML = domString;
};

const treeHouseCage = (player1Json, player2Json) => {
    console.log(player1Json, player2Json);
    let domString = "";
    let winnerString = "";
    domString += `<div class ="row" >`;
    domString += `<div id ="player1Img" class ="col-md-6 ">`;
    domString += `<img src="${player1Json.gravatar_url}" alt="">`;
    domString += `<h2>${player1Json.points.total}</h2>`;
    domString += `</div>`;
    domString += `<div class="image2" class ="col-md-6" >`;
    domString += `<img src="${player2Json.gravatar_url}" alt="">`;
    domString += `<h2>${player2Json.points.total}</h2>`;
    domString += `</div>`;
    // printToDom (domString, 'player-card');
    if (player1Json.points.total > player2Json.points.total){
        
        // player1Json.badges.forEach((badge)=>{;
        for ( let i =0; i< player1Json.badges.length; i++) {
        domString += `<div class="row"><img src="${player1Json.badges[i].icon_url}">`
        domString += `</div>`;
        };
    } else {
        // player2Json.badges.forEach((badge)=>{;
        for ( let j = 0; j < player2Json.badges.length; j++) {
        domString += `<div class="row"><img src="${player2Json.badges[j].icon_url}">`
        domString += `</div>`;
    };
    }
    printToDom (domString, 'player-card');
    // printToDom (domString, 'winner-card');
    
}




function codeFails(){
    console.log("something is wrong");
}

const XHR1 = () =>{
    console.log ('hello');
    const player1name=document.getElementById('playerOneInput').value;
    console.log(player1name);
    const player1Url=`https://teamtreehouse.com/${player1name}.json`;
    let myRequest = new XMLHttpRequest ();
    myRequest.addEventListener('load',player1);
    myRequest.addEventListener('error', codeFails);
    myRequest.open('GET',player1Url);
    myRequest.send();

};

function player1 () {
    const player1Json = JSON.parse(this.responseText);
    console.log (player1Json);
    XHR2(player1Json);
    
}

const button = document.getElementById('checkButton');
button.addEventListener ('click', XHR1) ;

const XHR2 = (player1Json) => {
    const player2name = document.getElementById("playerTwoInput").value;
    const player2Url = `https://teamtreehouse.com/${player2name}.json`;
    let myRequest = new XMLHttpRequest ();
    myRequest.addEventListener('load',nestedFunction);
    myRequest.addEventListener ('error',codeFails);
    myRequest.open('GET',player2Url);
    myRequest.send();

    function nestedFunction () {
        const player2Json = JSON.parse (this.responseText);
        treeHouseCage(player1Json, player2Json);
    }
}   

XHR1();
