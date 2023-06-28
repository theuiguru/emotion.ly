const year = document.querySelector('.year').textContent = new Date().getFullYear();
const dialogTriggers = document.querySelectorAll('.emotion');
const dialog = document.getElementById('emotion');

// Add click event listeners to all the <a> tags
dialogTriggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();

    dialog.classList.add('open');

    const emotion = trigger.classList[1];

    dialog.innerHTML = `I'm ${emotion} <br><button onclick="dialog.close();">Close</button>`;

    const backgroundColor = getComputedStyle(trigger).backgroundColor;
    dialog.style.backgroundColor = backgroundColor;
    
    dialog.showModal();
  });
});