const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dio-tools.png") {
    myImage.setAttribute("src", "images/sending-ressources.png");
  } else {
    myImage.setAttribute("src", "images/dio-tools.png");
  }
});

