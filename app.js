var happy = document.querySelector(".happy");
var sad = document.querySelector(".sad");
var mad = document.querySelector(".mad");
var tired = document.querySelector(".tired");
var hungry = document.querySelector(".hungry");
var sick = document.querySelector(".sick");
happy.addEventListener("click", () => alert("I'm " + happy.innerHTML));
sad.addEventListener("click", () => alert("I'm " + sad.innerHTML));
mad.addEventListener("click", () => alert("I'm " + mad.innerHTML));
tired.addEventListener("click", () => alert("I'm " + tired.innerHTML));
hungry.addEventListener("click", () => alert("I'm " + hungry.innerHTML));
sick.addEventListener("click", () => alert("I'm " + sick.innerHTML));

if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./service-worker.js', { scope: './' })
		.then(function(registration) {
			console.log("Service Worker Registered");
		})
		.catch(function(err) {
			console.log("Service Worker Failed to Register", err);
		})
}