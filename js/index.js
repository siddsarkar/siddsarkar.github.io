const avatar = document.querySelector(".profile-avatar");
const line = document.querySelector("#line-load");
const icons = document.getElementsByClassName("fa");
const name = document.getElementsByClassName("name");

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    setTimeout(() => {
      const ele = document.getElementById("root");
      ele.classList.remove("loading-screen");
      line.classList.add("line");
      avatar.setAttribute("style", "animation: apearcer 1s ease-in-out");
      for (let i = 0; i < icons.length; i++) {
        icons[i].setAttribute("style", "animation: apearcer2 1s ease-in-out");
      }
      for (let j = 0; j < name.length; j++) {
        name[i].setAttribute("style", "animation: apearcer3 1s ease-in-out");
      }
    }, 1000);
  }
};
