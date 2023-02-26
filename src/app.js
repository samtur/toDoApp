const appFunc = () => {
  const addBtn = document.querySelector(".openForm");
  const closeBtn = document.querySelector(".closeBtn");
  const formContainer = document.querySelector(".taskFormContainer");
  const submitBtn = document.querySelector(".submitBtn");

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
