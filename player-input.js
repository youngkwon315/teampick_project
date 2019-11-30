var player = [];

const name = document.getElementById("pl-name");
const atk = document.getElementById("pl-atk");
const mid = document.getElementById("pl-mid");
const def = document.getElementById("pl-def");

var messageBox = document.getElementById("output");
var messageBox2 = document.getElementById("outputTeamA");
var messageBox3 = document.getElementById("outputTeamB");

function insertPlayers() {
  player.push({
    선수명: name.value,
    공격력: atk.value,
    미드필드능력: mid.value,
    수비력: def.value
  });
  printPlayers();
}

function printPlayers() {
  name.value = "";
  atk.value = "";
  mid.value = "";
  def.value = "";

  messageBox.innerHTML = JSON.stringify(player) + "<br>";
}

function pickPlayers() {
  teamA = [];

  for (var i = 0; i < player.length; i++) {
    var randomPlayer = player[Math.floor(Math.random() * player.length)];
    if (teamA.indexOf(randomPlayer) == -1) {
      teamA.push(randomPlayer);
      player.splice(player.indexOf(randomPlayer), 1);
      if (teamA.length == 6) {
        break;
      }
    }
  }
  messageBox2.innerHTML = "teamA : " + JSON.stringify(teamA) + "<br>";
  messageBox3.innerHTML = "teamB : " + JSON.stringify(player) + "<br>";
}
