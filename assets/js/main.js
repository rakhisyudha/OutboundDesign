//Main Js
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
    swiper: swiper,
},
    loop: true,
    autoplay: {
    delay: 10000,
    disableOnInteraction: false,
},
});

//Nav Effect
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Menu Toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

//Nav Scroll hover effect
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav-items a[href*=" + id + "]").classList.add(("active"));
    }
    else{
      document.querySelector(".nav-items a[href*=" + id + "]").classList.remove(("active"));
    }
  });
});