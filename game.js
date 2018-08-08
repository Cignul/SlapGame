

var health = 100;
var hits = 0;
function updateView() {
  document.getElementById('health').innerText = health.toString()
  document.getElementById('hits').innerText = hits.toString()


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

  function heart() {
    health += 100;
    updateView()
  }
  function apple() {
    health += 10;
    updateView()


    // }
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

    //didn't get to this
    function gameOver() {
      health = 0;
    }
  }
}
// resetButton.removeClass("invisible")
// gameButtons.addClass("invisible")



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
   //healing stuff - trying to fix into an array, need to encapsulate starfox
  //wasn't able to implement items this way because of my lack of starfox object
  // var items = {
  //   fire: { name: 'fire', modifier: 2, description: 'IT BURNS!' },
  //   heart: { name: 'heart', modifier: 100, description: 'your health is restored' },
  //   strawbery: { name: 'strawberry', modifier: 50, description: 'you feel slightly better' },
  //   apple: { name: 'apple', modifier: 25, description: 'you feel better' }
  // }
  // //iterate over item array to allow user choices
  // function addMods() {
  //attempted jquery
  // let resetButton = $('#reset-button');
  // let gameButtons = $('#slap-button,#kick-button,#smash-button,#apple-button,#heart-button,#strawberry-button');
  //attacks
  // }