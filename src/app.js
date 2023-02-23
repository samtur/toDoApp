const appFunc = () => {
  const addbtn = document.querySelector(".contentTxt");
  addbtn.addEventListener("click", function () {
    const formContainer = document.querySelector(".taskFormContainer");
    if (formContainer.classList.contains("hidden")) {
      formContainer.classList.remove("hidden");
    } else {
      formContainer.classList.add("hidden");
    }
  });
};

export { appFunc };
