let chessContainer = document.getElementById("chessContainer");

for (i = 1; i < 9; i++) {
  let box1 = document.createElement("div"); // create div boxes in chess board

  if (i % 2 == 0) {
    //adding colors for alternative boxes
    box1.style.backgroundColor = "black";
  } else {
    box1.style.backgroundColor = "white";
  }
  //appending 1st column to the chesscontainer
  chessContainer.appendChild(box1);
}
for (i = 1; i < 9; i++) {
  let box2 = document.createElement("div");

  if (i % 2 == 0) {
    box2.style.backgroundColor = "white";
  } else {
    box2.style.backgroundColor = "black";
  }

  //appending 2st column to the chesscontainer
  chessContainer.appendChild(box2);
}

for (i = 1; i < 9; i++) {
  let box3 = document.createElement("div");

  if (i % 2 == 0) {
    box3.style.backgroundColor = "black";
  } else {
    box3.style.backgroundColor = "white";
  }

  //appending 3rd column to the chesscontainer
  chessContainer.appendChild(box3);
}

for (i = 1; i < 9; i++) {
  let box4 = document.createElement("div");

  if (i % 2 == 0) {
    box4.style.backgroundColor = "white";
  } else {
    box4.style.backgroundColor = "black";
  }
  //appending 4rth column to the chesscontainer
  chessContainer.appendChild(box4);
}

for (i = 1; i < 9; i++) {
  let box5 = document.createElement("div");

  if (i % 2 == 0) {
    box5.style.backgroundColor = "black";
  } else {
    box5.style.backgroundColor = "white";
  }
  //appending 5th column to the chesscontainer
  chessContainer.appendChild(box5);
}

for (i = 1; i < 9; i++) {
  let box6 = document.createElement("div");

  if (i % 2 == 0) {
    box6.style.backgroundColor = "white";
  } else {
    box6.style.backgroundColor = "black";
  }
  //appending 6th column to the chesscontainer
  chessContainer.appendChild(box6);
}

for (i = 1; i < 9; i++) {
  let box7 = document.createElement("div");

  if (i % 2 == 0) {
    box7.style.backgroundColor = "black";
  } else {
    box7.style.backgroundColor = "white";
  }
  //appending 7th column to the chesscontainer
  chessContainer.appendChild(box7);
}

for (i = 1; i < 9; i++) {
  let box8 = document.createElement("div");

  if (i % 2 == 0) {
    box8.style.backgroundColor = "white";
  } else {
    box8.style.backgroundColor = "black";
  }
  //appending 8th column to the chesscontainer
  chessContainer.appendChild(box8);
}
