window.addEventListener("load", function () {
  const homeElements = document.querySelectorAll(".home h1, .home p, .home button");
  const loadingAnimation = document.querySelector(".loading");

  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  loadingAnimation.classList.add("loading-hide");

  homeElements.forEach(function (e, i) {
    setTimeout(function () {
      e.classList.add("home-pop");
    }, 300 * (i + 1));
  });
});

window.addEventListener("scroll", function () {
  // Start Variable Declaration

  const wScroll = this.scrollY;
  // console.log(wScroll);

  // Home
  const homeH1 = document.querySelector(".home h1");
  const homeP = document.querySelector(".home p");
  const homeButton = document.querySelector(".home button");

  // About
  const sectionAbout = document.querySelector(".about");
  const aboutHeader = document.querySelector(".about .about-header");
  const aboutP = document.querySelectorAll(".about p");
  const findMe = document.querySelector(".about .find-me");

  // Services
  const sectionServices = document.querySelector(".services");
  const servicesHeader = document.querySelector(".services .services-header");
  const servicesThumbnail = document.querySelectorAll(".services .thumbnail");
  const servicesFigure = document.querySelector(".services figure");

  // Footer
  const sectionFooter = document.querySelector(".footer");
  // End Variable Declaration

  // Start Logic

  homeH1.style.transform = `translateY(${wScroll / 2}px)`;
  homeP.style.transform = `translateY(${wScroll / 2.2}px)`;
  homeButton.style.transform = `translateY(${wScroll / 2.4}px)`;

  if (wScroll >= sectionAbout.offsetTop - 400) {
    homeH1.classList.remove("home-pop");
    homeP.classList.remove("home-pop");
    homeButton.classList.remove("home-pop");
  } else {
    homeH1.classList.add("home-pop");
    homeP.classList.add("home-pop");
    homeButton.classList.add("home-pop");
  }

  if (wScroll >= aboutHeader.offsetTop - 450) {
    aboutHeader.classList.add("about-pop");
  }

  if (wScroll >= aboutP[0].offsetTop - 450) {
    aboutP[0].classList.add("about-pop");
  }

  if (wScroll >= aboutP[1].offsetTop - 500) {
    aboutP[1].classList.add("about-pop");
  }

  if (wScroll >= findMe.offsetTop - 400) {
    findMe.classList.add("about-pop");
  }

  if (wScroll <= sectionAbout.offsetTop - 600) {
    aboutHeader.classList.remove("about-pop");
    aboutP[0].classList.remove("about-pop");
    aboutP[1].classList.remove("about-pop");
    findMe.classList.remove("about-pop");
  }

  if (wScroll >= sectionServices.offsetTop - 600) {
    aboutHeader.classList.remove("about-pop");
  }

  if (wScroll >= sectionServices.offsetTop - 500) {
    aboutP[0].classList.remove("about-pop");
  }

  if (wScroll >= sectionServices.offsetTop - 150) {
    aboutP[1].classList.remove("about-pop");
    findMe.classList.remove("about-pop");
  }

  if (wScroll >= sectionServices.offsetTop - 500) {
    servicesHeader.classList.add("services-pop");
  }

  if (wScroll >= sectionServices.offsetTop - 400) {
    servicesThumbnail.forEach(function (e, i) {
      setTimeout(function () {
        e.classList.add("services-pop");
      }, 200 * i);
    });
  }

  if (wScroll >= sectionServices.offsetTop - 200) {
    servicesFigure.classList.add("services-pop");
  }

  if (wScroll <= sectionServices.offsetTop - 700) {
    servicesHeader.classList.remove("services-pop");
    servicesThumbnail.forEach(function (e) {
      e.classList.remove("services-pop");
    });
    servicesFigure.classList.remove("services-pop");
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();

    let hrefId = e.target.getAttribute("href");

    let hrefDestination = document.querySelector(hrefId);
    let screen$768px = window.matchMedia("(max-width: 768px)");
    if (screen$768px.matches) {
      window.scrollTo(0, hrefDestination.offsetTop - 120);
    } else {
      window.scrollTo(0, hrefDestination.offsetTop);
    }
  }
});
