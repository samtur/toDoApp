const domFunc = () => {
  const bodyContent = document.querySelector("#bodyContent");

  // NavBar
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  bodyContent.appendChild(navbar);
  const menuBtn = document.createElement("div");
  menuBtn.classList.add("menuBtn");
  navbar.appendChild(menuBtn);
  const menuImg = document.createElement("img");
  menuImg.classList.add("menuImg");
  menuImg.src = "src/menubtn.svg";
  menuBtn.appendChild(menuImg);
  const homeBtn = document.createElement("div");
  homeBtn.classList.add("homeBtn");
  navbar.appendChild(homeBtn);
};

export { domFunc };
