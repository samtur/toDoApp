// navbar icons
import menu from "./menu.svg";
import home from "./home.svg";

// links icons
import inbox from "./inbox.svg";
import today from "./today.svg";
import week from "./week.svg";
import folder from "./folder.svg";
import add from "./add.svg";

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
  menuImg.src = menu;
  menuBtn.appendChild(menuImg);
  const homeBtn = document.createElement("div");
  homeBtn.classList.add("homeBtn");
  navbar.appendChild(homeBtn);
  const homeImg = document.createElement("img");
  homeImg.classList.add("homeImg");
  homeImg.src = home;
  homeBtn.appendChild(homeImg);

  // Sidebar
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  bodyContent.appendChild(sidebar);
  const linklist = document.createElement("ul");
  linklist.classList.add("linklist");
  sidebar.appendChild(linklist);
  const linkText = ["Inbox", "Today", "This Week", "Projects", "Add Projects"];
  for (let i = 0; i < linkText.length; i += 1) {
    const link = document.createElement("li");
    link.classList.add("links");
    link.innerHTML = linkText[i];
    link.id = `link${i}`;
    linklist.appendChild(link);
  }
  const linkImg = [inbox, today, week, folder, add];
  for (let i = 0; i < linkImg.length; i += 1) {
    const img = document.createElement("img");
    img.classList.add("sideIcon");
    img.src = linkImg[i];
    const link = document.querySelector(`#link${i}`);
    link.appendChild(img);
  }

  // Content
  // This element will need functionality everytime another element is clicked
  const content = document.createElement("div");
  content.classList.add("content");
  bodyContent.appendChild(content);
  const contentTitle = document.createElement("h1");
  contentTitle.classList.add("contentTitle");
  contentTitle.innerHTML = "Inbox";
  content.appendChild(contentTitle);
  const contentTxt = document.createElement("div");
  contentTxt.classList.add("contentTxt");
  content.appendChild(contentTxt);
  contentTxt.innerHTML = "Add Task";
  const addImg = document.createElement("img");
  addImg.classList.add("addImg");
  addImg.src = add;
  contentTxt.appendChild(addImg);

  // Footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = "Developed by Sam Turland";
  bodyContent.appendChild(footer);
};

export { domFunc };
