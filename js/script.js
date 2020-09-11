// Variables
const mailForm = document.getElementById('mail-form'),
      sendBtn = document.getElementById('send'),
      resetBtn = document.getElementById('reset');
      







// Event linstners
addEventListener();
function addEventListener(){
  document.addEventListener('DOMContentLoaded', appInIt);

  sendBtn.addEventListener('click', show);
}





// Functions
function appInIt(){
  sendBtn.style.backgroundColor = 'grey';
};


function show(){
  sendBtn.style.color = 'blue';
  sendBtn.style.backgroundColor = 'green';
}
