const $player1 = {
  name: "Subzero",
  hp: 60,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["топор", "нож", "боуи"],
  attack: function () {
    console.log($player1.name + " " + "Fight...");
  },
};

const $player2 = {
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["нагината", "разоранг", "серп"],
  attack: function () {
    console.log($player2.name + " " + "Fight...");
  },
};

function createPlayer(player, obj) {
  // console.log(obj);

  const $player1 = document.createElement("div");
  const $progressbar = document.createElement("div");
  const $character = document.createElement("div");
  const $life = document.createElement("div");
  const $name = document.createElement("div");
  const $img = document.createElement("img");
  const $arenas = document.querySelector(".arenas");

  $player1.classList.add(player);
  $progressbar.classList.add("progressbar");
  $character.classList.add("character");
  $life.classList.add("life");
  $life.style.width = obj.hp + "px";
  $name.classList.add("name");
  $name.innerText = obj.name;
  $img.src = obj.img;
  $character.appendChild($img);

  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $arenas.appendChild($player1);
}

// createPlayer("player1", "SUB-ZERO", 50);
// createPlayer("player2", "Kitana", 80);

createPlayer("player1", $player1);
createPlayer("player2", $player2);
