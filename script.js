new Swiper(".swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: false,
  });
  
  let buttonShowAll = document.querySelector(".button-showAll"),
    buttonHideAll = document.querySelector(".button-hideAll"),
    brandsWrapper = document.querySelector(".container-brands-wrapper");
  
  buttonShowAll.addEventListener("click", function () {
    brandsWrapper.style = "height: 100%";
    buttonHideAll.classList.add("show");
    buttonShowAll.classList.add("hide");
  });
  
  buttonHideAll.addEventListener("click", function () {
    brandsWrapper.style = "height: 170px";
    buttonHideAll.classList.remove("show");
    buttonShowAll.classList.remove("hide");
  }); 