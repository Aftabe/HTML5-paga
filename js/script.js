// Variables
const mailForm = document.getElementById('mail-form'),
      sendBtn = document.getElementById('send'),
      resetBtn = document.getElementById('reset');
      







// Event linstners
eventListners();
function eventListners() {
  // App init
  document.addEventListener('DOMContentLoaded', appInit)
}





// Functions

function appInit() {
  sendBtn.disabled = true;
}

