// this code is created by LWJerri#3290 https://lwjerri.js.org/
const teamContainer = document.getElementById(".team-container");
const API = "https://japi.ohori.me/discord/avatar/";

const owners = [
    {
        "id": "442793591501357056",
        "post": "Creator / Dev",
        "GHURL": "https://github.com/Hadi-Koubeissi",
        "InstaURL": "",
        "YTURL": "https://www.youtube.com/channel/UCmO0xdpxQr7fX2Csth_2JOQ"
    }
]

for(let indexOne = 0; indexOne < owners.length; indexOne++){
    const elementOwners = owners[indexOne];

    $.getJSON(API + elementOwners.id)
    .then(output => {
        if(!output.username || !output.url){
            setTimeout(function(){
                document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "/src/images/logo-default.png");
            }, 1000);
        }

        const ownerList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + output.url + "'></div></br></br></br></br><h2 class='name'>" + output.username + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.GHURL + "' target='_blank'><button style='color: #000000;'>GitHub</button></a></div><div class='follow-btn'><a href='" + elementOwners.YTURL + "' target='_blank'><button style='color: #000000;'>YouTube</button></a></div></div></div>"
        teamContainer.innerHTML += ownerList;
    });
}