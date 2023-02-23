const appFunc = () => {
  const addbtn = document.querySelector(".contentTxt");
  addbtn.addEventListener("click", function () {
    console.log("hit button");
  });
};

export { appFunc };
