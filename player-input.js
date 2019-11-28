var player = [];

const name = document.getElementById("pl-name");
const atk = document.getElementById("pl-atk");
const mid = document.getElementById("pl-mid");
const def = document.getElementById("pl-def");

var messageBox = document.getElementById("output");

function insertPlayers() {
  player.push({
    선수명: name.value,
    공격력: atk.value,
    미드필드능력: mid.value,
    수비력: def.value
  });
  printPlayers();
  //printPlayers();//
}

function printPlayers() {
  name.value = "";
  atk.value = "";
  mid.value = "";
  def.value = "";

  messageBox.innerHTML = JSON.stringify(player) + "<br>";
}

/*var player = [];

const name = document.getElementById("pl-name");
const atk = document.getElementById("pl-atk");
const mid = document.getElementById("pl-mid");
const def = document.getElementById("pl-def");

var messageBox = document.getElementById("output");

function insertPlayers() {
  player.push(name.value, atk.value, mid.value, def.value);
  printPlayers();
}

function printPlayers() {
  name.value = "";
  atk.value = "";
  mid.value = "";
  def.value = "";

  messageBox.innerHTML = "";
  messageBox.innerHTML = "선수명 : " + player.join("<br/>");
}

/*var player;

function inputPlayers() {
  const name = document.getElementById("pl-name").value;
  const atk = document.getElementById("pl-atk").value;
  const mid = document.getElementById("pl-mid").value;
  const def = document.getElementById("pl-def").value;
  let player = [name, atk, mid, def];
  printPlayers(player);
}

function printPlayers(player) {
  document.getElementById("output").value = player;
}*/
