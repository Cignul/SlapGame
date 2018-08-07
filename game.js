
var health = 100;
var hits = 0;
// let resetButton = $('#reset-button');
// let gameButtons = $('#slap-button,#kick-button,#smash-button,#apple-button,#heart-button,#strawberry-button');
//attacks
function slap() {
  health -= 10;
  updateView()
  // return alert(health)
}
function kick() {
  health -= 5;
  updateView()

  // return alert(health)
}
function smash() {
  health -= 10;
  updateView()

  // return alert(health)
}
//healing stuff
function heart() {
  health += 100;
  updateView()
}
function apple() {
  health += 10;
  updateView()


}
function strawberry() {
  health += 20;
  updateView()


}
function reset(attack) {
  if (health < 100) {
    health = 100;
  }
  if (health == 0) {
    gameOver()
  }
  if (attack === true) {
    hits++;
  };
}

function gameOver() {
  health = 0;
  // resetButton.removeClass("invisible")
  // gameButtons.addClass("invisible")

  //
  //
}
function updateView() {
  document.getElementById('health').innerText = health.toString()
  // $("hits").text(hits)
  // if (health > 75) {
  //   //first photo
  //   $('img[src]').attr("src", "starfox.jpg")

  // } if (health < 75 && health > 25) {
  //   //second photo
  //   $('img[src]').attr("src", "starfoxdmged.jpg")
  // }
  // else {
  //   //most damaged photo
  // }
}

updateView();