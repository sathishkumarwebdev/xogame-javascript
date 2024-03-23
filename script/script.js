const div = document.querySelector("div > h1");
const allevent = document.querySelectorAll("#xo-box > div > div");
const p = document.querySelectorAll("#xo-box > div > div > h1");
const player = document.querySelector("#player > span");
const px = document.getElementById("xwin");
const po = document.getElementById("owin");

let xWin = 0,
  oWin = 0;
let count = 0;
let Res = [];
let draw = 0;
function reset() {
  for (let j = 0; j < p.length; j++) {
    p[j].innerText = "";
    Res = [];
    draw = 0;
  }
}

function xwinmessage() {
  alert("X win");
  xWin++;
  px.innerText = xWin;
  reset();
}
function owinmessage() {
  alert("O win");
  oWin++;
  po.innerText = oWin;
  reset();
}
function cobinationX() {
  if (Res[0] === "X" && Res[1] === "X" && Res[2] === "X") {
    xwinmessage();
  } else if (Res[3] === "X" && Res[4] === "X" && Res[5] === "X") {
    xwinmessage();
  } else if (Res[6] === "X" && Res[7] === "X" && Res[8] === "X") {
    xwinmessage();
  } else if (Res[0] === "X" && Res[3] === "X" && Res[6] === "X") {
    xwinmessage();
  } else if (Res[1] === "X" && Res[4] === "X" && Res[7] === "X") {
    xwinmessage();
  } else if (Res[2] === "X" && Res[5] === "X" && Res[8] === "X") {
    xwinmessage();
  } else if (Res[0] === "X" && Res[4] === "X" && Res[8] === "X") {
    xwinmessage();
  } else if (Res[2] === "X" && Res[4] === "X" && Res[6] === "X") {
    xwinmessage();
  } else if (draw == 9) {
    alert("Match draw");
    reset();
  }
}
function cobinationO() {
  if (Res[0] === "O" && Res[1] === "O" && Res[2] === "O") {
    owinmessage();
  } else if (Res[3] === "O" && Res[4] === "O" && Res[5] === "O") {
    owinmessage();
  } else if (Res[6] === "O" && Res[7] === "O" && Res[8] === "O") {
    owinmessage();
  } else if (Res[0] === "O" && Res[3] === "O" && Res[6] === "O") {
    owinmessage();
  } else if (Res[1] === "O" && Res[4] === "O" && Res[7] === "O") {
    owinmessage();
  } else if (Res[2] === "O" && Res[5] === "O" && Res[8] === "O") {
    owinmessage();
  } else if (Res[0] === "O" && Res[4] === "O" && Res[8] === "O") {
    owinmessage();
  } else if (Res[2] === "O" && Res[4] === "O" && Res[6] === "O") {
    owinmessage();
  } else if (draw == 9) {
    alert("Match draw");
    reset();
  }
}

for (let i = 0; i < allevent.length; i++) {
  allevent[i].addEventListener("click", function () {
    if (count === 0) {
      p[i].innerText = "X";
      console.log(p[i]);
      draw++;
      p[i].style.color = "red";
      player.innerText = " O ";
      player.style.color = "blue";
      count++;
      Res[i] = "X";
      cobinationX();
    } else if (count == 1) {
      p[i].innerText = "O";
      draw++;
      p[i].style.color = "blue";
      count--;
      player.innerText = " X ";
      player.style.color = "red";
      Res[i] = "O";
      cobinationO();
    }
  });
}

function btnReset() {
  for (let j = 0; j < p.length; j++) {
    p[j].innerText = "";
    Res = [];
    xWin = 0;
    oWin = 0;
  }
}
