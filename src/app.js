const appFunc = () => {
  const addbtn = document.querySelector(".contentTxt");
  addbtn.addEventListener("click", function () {
    const formContainer = document.querySelector(".taskFormContainer");
    addbtn.classList.add("hidden");
    formContainer.classList.remove("hidden");
  });
};

export { appFunc };
