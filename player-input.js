var thisWeekPlayer = [];

var messageBox = document.getElementById("output");
var messageBox2 = document.getElementById("outputTeamA");
var messageBox3 = document.getElementById("outputTeamB");

function insertFirstPlayers() {
  var tdArr = [];
  var grid = document.getElementById("players");
  var checkBoxes = grid.getElementsByTagName("INPUT");

  for (var i = 0; i < checkBoxes.length; i++) {
    if(checkBoxes[i].checked==true) {
      var data = checkBoxes[i].parentNode.parentNode;
      var data_rd = data.childNodes[1];

      thisWeekPlayer.push(data.textContent);
      tdArr.push(name);
    }
  }
  messageBox.innerHTML = thisWeekPlayer + "<br>";
}

/*function insertPlayers() {
  player.push({
    선수명: name.value,
    공격력: atk.value,
  });
  printPlayers();
}*/

/*function printPlayers() {
  name.value = "";
  atk.value = "";

  messageBox.innerHTML = JSON.stringify(player) + "<br>";
}*/

function pickPlayers() {
  teamA = [];

  for (var i = 0; i < thisWeekPlayer.length; i++) {
    var randomPlayer = thisWeekPlayer[Math.floor(Math.random() * thisWeekPlayer.length)];
    if (teamA.indexOf(randomPlayer) == -1) {
      teamA.push(randomPlayer);
      thisWeekPlayer.splice(thisWeekPlayer.indexOf(randomPlayer), 1);
      if (teamA.length == 6) {
        break;
      }
    }
  }
  messageBox2.innerHTML = "teamA : " + teamA + "<br>";
  messageBox3.innerHTML = "teamB : " + thisWeekPlayer + "<br>";
}
