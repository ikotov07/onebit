$(document).ready(function(){
  $('[type="tel"]').mask('+38(000)-000-00-00');
  $('#demo').hideShowPassword({
    innerToggle: true
  });
})

const time = 0
let greeting;

if (time < 4) {
    greeting = "Good night";
} else if (time < 12) {
    greeting = "Good morning";
} else if (time < 16) {
    greeting = "Good day";
} else if (time < 24) {
    greeting = "Good evening";
} 

console.log(greeting);


window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > header.offsetTop) {
      header.classList.add("fixed");
  } else {
      header.classList.remove("fixed");
  }
});


const btnHistoryBack = document.querySelector('#history-back');

btnHistoryBack.addEventListener('click', ()=> {
  window.history.back();
  })

