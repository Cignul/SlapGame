
var health = 100;
var hits = 0;
let resetButton = $('#reset-button');
let gameButtons = $('#slap-button,#kick-button,#smash-button,#apple-button,#heart-button,#strawberry-button');
//attacks
function slap() {
  health -= 1;
  update();
  // return alert(health)
}
function kick() {
  health -= 5;
  update();
  // return alert(health)
}
function smash() {
  health -= 10;
  update();
  // return alert(health)
}
//healing stuff
function heart() {
  health += 10;
  update();
}
function apple() {
  health += 100;
  update();

}
function strawberry() {
  health += 20;
  update();

}
function update(attack) {
  if (health < 100) {
    health = 100;
  }
  if (health >= 0) {
    //gameOver
  }
  if (attack == true) {
    hits++;
    updateView();
  }

}
function gameOver() {
  health = 0;
  resetButton.removeClass("invisible")
  gameButtons.addClass("invisible")

  //
  //
}
function updateView() {
  $("health").text(health)
  $("hits").text(hits)
  if (health > 75) {
    //first phoot
    $('img[src]').attr("src", "starfox.jpg")

  } if (health < 75 && health > 25) {
    //second photo
    $('img[src]').attr("src", "starfoxdmged.jpg")
  }
  else {
    //most damaged photo
  }
}

slap
kick
smash
heart
apple