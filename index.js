console.log("hi");

const btnMenu = document.querySelector(".btn-nav-mobile");
const headerSection = document.querySelector(".navigation");
const mainNav = document.querySelector(".main-nav");

btnMenu.addEventListener("click", () =>
  headerSection.classList.toggle("open-nav")
);

mainNav.addEventListener("click", () =>
  headerSection.classList.remove("open-nav")
);

document.addEventListener("scroll", () =>
  headerSection.classList.remove("open-nav")
);
