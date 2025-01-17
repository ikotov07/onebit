$(document).ready(function(){
  $('[type="tel"]').mask('+38(000)-000-00-00');
  $('#demo').hideShowPassword({
    innerToggle: true
  });
})



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

