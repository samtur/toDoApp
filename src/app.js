const appFunc = () => {
  const addBtn = document.querySelector(".openForm");
  const closeBtn = document.querySelector(".closeBtn");
  const formContainer = document.querySelector(".taskFormContainer");
  const submitBtn = document.querySelector(".submitBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const sideBar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");

  menuBtn.addEventListener("click", function () {
    if (sideBar.classList.contains("hidden")) {
      sideBar.classList.remove("hidden");
      content.classList.remove("contentWide");
    } else {
      sideBar.classList.add("hidden");
      content.classList.add("contentWide");
    }
  });

  addBtn.addEventListener("click", function () {
    addBtn.classList.add("hidden");
    formContainer.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", function () {
    addBtn.classList.remove("hidden");
    formContainer.classList.add("hidden");
  });
};

export { appFunc };
