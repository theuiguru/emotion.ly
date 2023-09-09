const year = document.querySelector('.year').textContent = new Date().getFullYear();
const dialogTriggers = document.querySelectorAll('.emotion');
const dialog = document.getElementById('emotion');

// Add click event listeners to all the <a> tags
dialogTriggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.classList.add('open');
    const emotion = trigger.classList[1];
    dialog.innerHTML = `<button onclick="dialog.close();" class="closeModal">
      <svg xmlns="http://www.w3.org/2000/svg" class="closeModalX" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L11.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 0-1.414z"/>
      </svg>
    </button> I'm ${emotion}`;
    const backgroundColor = getComputedStyle(trigger).backgroundColor;
    dialog.style.backgroundColor = backgroundColor;
    dialog.showModal();
  });
});
// Close dialog when clicking outside modal
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) { dialog.close(); }
});
