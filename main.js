// KF Panda Search

document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", themeChange);

function themeChange() {
  let theme = document.getElementById("theme-in").value;
  console.log(theme);
  if ((theme === "dark") | (theme === "black")) {
    document.getElementById(
      "body"
    ).style.backgroundColor = `rgba(0, 0, 0, 0.7)`;
    document.getElementById("h1").style.color = `white`;
    document.getElementById("char-name").style.color = `white`;
  } else if ((theme === "light") | (theme === "white")) {
    document.getElementById(
      "body"
    ).style.backgroundColor = `rgba(255,255,255, 0.7)`;
    document.getElementById("h1").style.color = `black`;
  } else if (theme === "random") {
    let rand1 = Math.random() * 250;
    rand1 = Math.floor(rand1);
    let rand2 = Math.random() * 250;
    rand1 = Math.floor(rand2);
    let rand3 = Math.random() * 200;
    rand1 = Math.floor(rand3);
    document.getElementById(
      "body"
    ).style.backgroundColor = `rgba(${rand1}, ${rand2}, ${rand3}, 0.7)`;
  }
}

function btnClicked() {
  let name = document.getElementById("char-search").value.toLowerCase();

  if (name === "po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML =
      "Your only weakness is allowing your mind to convince you you're weak.";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML =
      "“We cannot give up hope. Po would want us to remain strong!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "boss wolf") {
    document.getElementById("char-name").innerHTML = "Boss wolf";
    document.getElementById("char-quote").innerHTML =
      "I'll tell you what's gonna be yours, my fist in your plush!";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML = "Wings of Justice!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "master croc") {
    document.getElementById("char-name").innerHTML = "Master Croc";
    document.getElementById("char-quote").innerHTML =
      "The only hero in this town is a dead one!";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "There will be no one left to remember your name.";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr ping") {
    document.getElementById("char-name").innerHTML = "Mr Ping";
    document.getElementById("char-quote").innerHTML =
      "The secret ingrediant to make the secret ingredient in my secret ingredient soup!";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "master oogway") {
    document.getElementById("char-name").innerHTML = "Master Oogway";
    document.getElementById("char-quote").innerHTML =
      "One often meets his destiny on the road he takes to avoid it.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "Then China will know to bow before me!";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "master shifu") {
    document.getElementById("char-name").innerHTML = "Master Shifu";
    document.getElementById("char-quote").innerHTML =
      "If you only do what you can do, you'll never be better than what you are.";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    document.getElementById("char-name").innerHTML = "Soothsayer";
    document.getElementById("char-quote").innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are.";
    document.getElementById("char-img").src = "img/Soothsayer.png";
  } else if (name === "storming ox") {
    document.getElementById("char-name").innerHTML = "Storming Ox";
    document.getElementById("char-quote").innerHTML = "Kung fu is dead!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai-lung") {
    document.getElementById("char-name").innerHTML = "Tai-Lung";
    document.getElementById("char-quote").innerHTML =
      "Who denied me my destiny?";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (name === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML = "Sorry,Po its just me.";
    document.getElementById("char-img").src = "img/monkey.png";
  } else {
    document.getElementById("char-name").innerHTML = "???????";
    document.getElementById("char-quote").innerHTML = "----------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
