const mobileMenu = document.querySelector(".header__mobile");
const hamburguerIcon = document.querySelector(".header__mobile-menu");
const closeIcon = document.querySelector("#close-icon");

hamburguerIcon.addEventListener('click' ,function() {  
  if(mobileMenu.classList.contains("hidden")){
    mobileMenu.classList.remove("hidden");
  }
});

closeIcon.addEventListener('click', function (){
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }
});