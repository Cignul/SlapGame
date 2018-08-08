

var health = 100;
var hits = 0;
//attempted jquery
// let resetButton = $('#reset-button');
// let gameButtons = $('#slap-button,#kick-button,#smash-button,#apple-button,#heart-button,#strawberry-button');
//attacks
function slap() {
  health -= 10;
  hits += 1;
  updateView()
  // return alert(health)
}
function kick() {
  health -= 5;
  hits += 1;
  updateView()

  // return alert(health)
}
function smash() {
  health -= 10;
  hits += 1;
  updateView()

  // return alert(health)
}
//healing stuff
function heart() {
  health += 100;
  updateView()
}
// function apple() {
//   health += 10;
//   updateView()


// }
function strawberry() {
  health += 20;
  updateView()
}
//trying to impliment modifier similar to the example, not working because
// i used functions for items not an array of vars craap
// var apple = {
//   name: 'apple',
//   modifier: 2,
//   description: 'reduced damage'
// }
// function addMod() {
//   +2
// }
//didnt get to implement reset button, had it in logic at first but removed
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

//didn't get to this
function gameOver() {
  health = 0;
  // resetButton.removeClass("invisible")
  // gameButtons.addClass("invisible")


}
function updateView() {
  document.getElementById('health').innerText = health.toString()
  document.getElementById('hits').innerText = hits.toString()
  // $("hits").text(hits)//was trying with jquery didn't work out
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