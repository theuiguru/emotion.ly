setTimeout(function() {
  document.querySelector('.splash').style.display = 'none';
}, 2000);
const year = document.querySelector('.year').textContent = new Date().getFullYear();
const happy = document.querySelector(".happy"),
      sad = document.querySelector(".sad"),
      mad = document.querySelector(".mad"),
      tired = document.querySelector(".tired"),
      hungry = document.querySelector(".hungry"),
      sick = document.querySelector(".sick");
happy.addEventListener("click", () => alert("I'm " + happy.innerText));
sad.addEventListener("click", () => alert("I'm " + sad.innerText));
mad.addEventListener("click", () => alert("I'm " + mad.innerText));
tired.addEventListener("click", () => alert("I'm " + tired.innerText));
hungry.addEventListener("click", () => alert("I'm " + hungry.innerText));
sick.addEventListener("click", () => alert("I'm " + sick.innerText));
