setTimeout(function() {
  document.querySelector('.splash').style.display = 'none';
  document.querySelector('.main').style.display = 'grid';
}, 2000);
const happy = document.querySelector(".happy"),
      sad = document.querySelector(".sad"),
      mad = document.querySelector(".mad"),
      tired = document.querySelector(".tired"),
      hungry = document.querySelector(".hungry"),
      sick = document.querySelector(".sick");
happy.addEventListener("click", () => alert("I'm " + happy.innerHTML));
sad.addEventListener("click", () => alert("I'm " + sad.innerHTML));
mad.addEventListener("click", () => alert("I'm " + mad.innerHTML));
tired.addEventListener("click", () => alert("I'm " + tired.innerHTML));
hungry.addEventListener("click", () => alert("I'm " + hungry.innerHTML));
sick.addEventListener("click", () => alert("I'm " + sick.innerHTML));
