const onClick = () => {
  const color = [];
  color.push("red");
  color.push("green");
  color.push("blue");

  const randomColoredPicker = Math.floor(Math.random() * color.length);

  let coloredRandom = color[randomColoredPicker];

  if (coloredRandom == "red") {
    document.body.style.backgroundColor = "red";
  }

  if (coloredRandom == "green") {
    document.body.style.backgroundColor = "green";
  }

  if (coloredRandom == "blue") {
    document.body.style.backgroundColor = "blue";
  }
};

const RED = document.getElementById("RED");
const GREEN = document.getElementById("GREEN");
const BLUE = document.getElementById("BLUE");
RED.addEventListener("click", onClick);
GREEN.addEventListener("click", onClick);
BLUEaddEventListener("click", onClick);
