const avatar = document.querySelector(".profile-avatar");
const pic = document.querySelector("#avatar");
const line = document.querySelector("#line-load");
const icons = document.getElementsByClassName("fa");
const name = document.getElementsByClassName("name");
document.onreadystatechange = function () {
  // document.classList.add("darktheme");
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
        name[j].classList.add("text-fade");
      }
    }, 2000);
  }
};

pic.onclick = () => {
  document.body.classList.toggle("darktheme");
};
