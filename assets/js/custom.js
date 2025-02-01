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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // slidesPerView: 2,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});


const btnHistoryBack = document.querySelector('#history-back');

btnHistoryBack.addEventListener('click', ()=> {
  window.history.back();
  })

