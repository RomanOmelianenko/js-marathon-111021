const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["топор", "нож", "боуи"],
  attack: function () {
    console.log($player1.name + " " + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["нагината", "разоранг", "серп"],
  attack: function () {
    console.log(player2.name + " " + "Fight...");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(playerObj) {
  const $player1 = createElement("div", "player" + playerObj.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = document.createElement("img");

  $life.style.width = playerObj.hp + "%";
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player1;
}

function changeHp(player) {
  const $playerLife = document.querySelector(
    " .player" + player.player + " .life"
  );

  let randomHp = Math.ceil(Math.random() * 20);

  player.hp -= randomHp;

  // if (player.hp <= 0) {
  //   $arenas.appendChild(playerLose(player.name));
  //   player.hp = 0;
  //   randomHp = 0;
  //   $randomButton.style.display = "none";
  // }

  if (player1.hp > 0 && player2.hp < 0) {
    $arenas.appendChild(playerWin(player1.name));
    player.hp = 0;
    $randomButton.style.display = "none";
  } else if (player2.hp > 0 && player1.hp < 0) {
    $arenas.appendChild(playerWin(player2.name));
    player.hp = 0;
    $randomButton.style.display = "none";
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerDraw());
    player.hp = 0;
    $randomButton.style.display = "none";
  }

  $playerLife.style.width = player.hp + "%";
}

// function playerLose(name) {
//   const $loseTitle = createElement("div", "loseTitle");
//   $loseTitle.innerText = name + " lose";

//   return $loseTitle;
// }

function playerDraw() {
  const $drawTitle = createElement("div", "drawTitle");
  $drawTitle.innerText = "draw";

  return $drawTitle;
}

function playerWin(name) {
  const $winTitle = createElement("div", "winTitle");
  $winTitle.innerText = name + " win";

  return $winTitle;
}

$randomButton.addEventListener("click", function () {
  changeHp(player1);
  changeHp(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
