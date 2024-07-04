/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

/* Menu show */
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

/* Menu hidden */
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button"),
  loginClose = document.getElementById("login-close"),
  loginContent = document.getElementById("login-content"),
  signupLink = document.querySelector(".login__signup a");

/* Show Login */
if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}

/* Hide Login */
if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}

/*=============== SIGNUP ===============*/
const signupButton = document.querySelector(".login__signup a"),
  signupClose = document.getElementById("signup-close"),
  signUpContent = document.getElementById("signup-content"),
  loginLink = document.querySelector(".signup__login a");

/* Show SignUp */
if (signupButton) {
  signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    loginContent.classList.remove("show-login");
    signUpContent.classList.add("show-signup");
  });
}

/* Hide SignUp */
if (signupClose) {
  signupClose.addEventListener("click", () => {
    signUpContent.classList.remove("show-signup");
  });
}

/* Show Login from SignUp */
if (loginLink) {
  loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    signUpContent.classList.remove("show-signup");
    loginContent.classList.add("show-login");
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/
const swiperHome = new Swiper(".home__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      slidesPerView: 3,
      spaceBetween: -10,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/
const swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/
const swiperNew = new Swiper(".new__swiper", {
  loop: true,
  slidesPerView: "auto",
  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/
const swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    reverseDirection: false,
  },
  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
});

// Add some custom CSS for pagination styling
const style = document.createElement("style");
style.innerHTML = `
  .swiper-pagination-bullet {
    background-color: transparent;
    width: 15px;
    height:15px;
    opacity: 1;
    padding: 1rem 0 1.25rem 0;
    transition: background-color 0.3s;
  }
  .swiper-pagination-bullet-active {
    color:blue;
    border-bottom:1px solid blue;
    border-radius:0;
  }
`;
document.head.appendChild(style);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset:true,
});
sr.reveal(".home__data,.featured__container,.new__container,.join__data,.testimonial__container,.footer");
sr.reveal(".home__images", { delay: 600 });
sr.reveal(".services__card", { interval: 100 });
sr.reveal(".discount__data", { origin: "right" });
sr.reveal(".discount__images", { origin: "left" });
sr.reveal(".banner__item,.products__card,.contact__container", {
  interval: 100,
});
