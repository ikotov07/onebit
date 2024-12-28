$(document).ready(function(){
  $('[type="tel"]').mask('+38(000)-000-00-00');
  $('#demo').hideShowPassword({
    innerToggle: true
  });
})

const btnHistoryBack = document.querySelector('#history-back');

btnHistoryBack.addEventListener('click', ()=> {
  window.history.back();
  })