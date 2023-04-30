const year = document.querySelector('.year').textContent = new Date().getFullYear();
let happy = document.querySelector(".happy"),
      sad = document.querySelector(".sad"),
      mad = document.querySelector(".mad"),
      tired = document.querySelector(".tired"),
      hungry = document.querySelector(".hungry"),
      sick = document.querySelector(".sick");
happy.addEventListener("click", () => alert(`I'm ${happy.textContent}`));
sad.addEventListener("click", () => alert(`I'm ${sad.textContent}`));
mad.addEventListener("click", () => alert(`I'm ${mad.textContent}`));
tired.addEventListener("click", () => alert(`I'm ${tired.textContent}`));
hungry.addEventListener("click", () => alert(`I'm ${hungry.textContent}`));
sick.addEventListener("click", () => alert(`I'm ${sick.textContent}`));
