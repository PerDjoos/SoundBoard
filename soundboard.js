var babylaugh = new Audio('babylaugh2.mp3')
var bai = new Audio('bai2.mp3')
var bigburp = new Audio('bigburp2.mp3')
var boing = new Audio('boing2.mp3')
var demon = new Audio('demon2.mp3')
var fart = new Audio('fart2.mp3')
var hai = new Audio('hai2.mp3')
var moo = new Audio('moo2.mp3')
var okay = new Audio('okay2.mp3')
var ooeeaa = new Audio('ooeeaa2.mp3')
var oof = new Audio('oof2.mp3')
var piggy = new Audio('piggy2.mp3')
var quack = new Audio('quack2.mp3')
var slurp = new Audio('slurp2.mp3')
var what = new Audio('what.mp3')
var tvstatic = new Audio('tv-static.mp3')

function playSound(sound){
    sound.play();
}

async function getRandomColor() {
  const response = await fetch("https://api.gofakeit.com/funcs/hexcolor");
  return await response.text();
}


// hover effect and color change function
function colorChangeWithHover(button, color) {
  button.style.backgroundColor = color;
  button.style.borderColor = color;
}


// reset to default
function resetHover(button) {
  button.style.backgroundColor = "";
  button.style.borderColor = "";
}


// hover function
$("button").on("mouseenter", async function () {


  const button = this;
  const color = await getRandomColor();


  // only apply if still hovering
  if (button.matches(":hover")) {
     colorChangeWithHover(button, color);
  }


});


$("button").on("mouseleave", function () {
  resetHover(this);
});