var thisWeekPlayer = [];
var Ascore = 0;
var Bscore = 0;

var messageBox = document.getElementById("output");
var messageBox2 = document.getElementById("outputTeamA");
var messageBox3 = document.getElementById("outputTeamB");

function insertFirstPlayers() {
  var grid = document.getElementById("players");
  var checkBoxes = grid.getElementsByTagName("INPUT");

  for (var i = 0; i < checkBoxes.length; i++) {
    if(checkBoxes[i].checked==true) {
      var data = checkBoxes[i].parentNode.parentNode;
      var playerName = data.cells[1].innerHTML
      var playerScore = parseFloat(data.cells[2].innerHTML);

      thisWeekPlayer.push([playerName, playerScore]);
    }
  }
  messageBox.innerHTML = "{"+ thisWeekPlayer + "}" + "<br>";
}

function insertPlayers() {
  var name = document.getElementById("name").value;
  var score = parseFloat(document.getElementById("score").value);

  thisWeekPlayer.push([
    name,
    score
  ]);
  printPlayers();
}

function printPlayers() {
  messageBox.innerHTML = "{"+ thisWeekPlayer + "}" + "<br>";
}

function pickPlayers() {
  var flag = true;
  while (flag) {
    flag = false;
    selectMembers();
    if ((Ascore - Bscore >= 2) || (Bscore - Ascore >= 2)) {
      flag = true;
    }
  }
}

function selectMembers() {
  teamA = [];
  var totalNum = thisWeekPlayer.length;

  for (var i = 0; i < thisWeekPlayer.length; i++) {
    var randomPlayer = thisWeekPlayer[Math.floor(Math.random() * thisWeekPlayer.length)];
    if (teamA.indexOf(randomPlayer) == -1) {
      teamA.push(randomPlayer);
      Ascore += randomPlayer[1];
      thisWeekPlayer.splice(thisWeekPlayer.indexOf(randomPlayer), 1);
      if (teamA.length >= totalNum/2) {
        for(var i = 0; i < thisWeekPlayer.length; i++) {
          Bscore += thisWeekPlayer[i][1];
        }
      break;
      }
    }
  }
  messageBox2.innerHTML = "teamA : " + teamA + "<br>";
  messageBox3.innerHTML = "teamB : " + thisWeekPlayer + "<br>";
}
