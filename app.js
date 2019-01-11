function emo1() { alert("I'm Happy!"); }
function emo2() { alert("I'm Sad!"); }
function emo3() { alert("I'm Mad!"); }
function emo4() { alert("I'm Tired!"); }
function emo5() { alert("I'm Hungry and Thirsty!"); }
function emo6() { alert("I'm Sick!"); }

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