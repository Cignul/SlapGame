var health = 100;
var hits = 0;
//attacks
function slap() {
  health -= 1;
  // return alert(health)
}
function kick() {
  health -= 5;
  // return alert(health)
}
function smash() {
  health -= 10;
  // return alert(health)
}
//healing stuff
function heart() {
  health += 10;
}
function apple() {
  health += 100;

}
function strawberry() {
  health += 20;

}
function update(attack) {
  if (health < 100) {
    health = 100;
  }
  if (health >= 0) {
    //endgame
  }
  if (attack == true) {
    hits++
  }
}
function gameOver() {
  health = 100;
  //
  //
}
function updateView() {
  //jquery stuff
}

slap
kick
smash
heart
apple