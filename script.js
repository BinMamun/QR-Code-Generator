const inputBox = document.querySelector(".js-input-box");
const button = document.querySelector(".js-button");
const qrCode = document.getElementById("js-qrcode");


button.addEventListener("click", () => {
  if (inputBox.value === "") {
    clearQrCode();
    inputBox.classList.add("error-shake");
    setTimeout(() => {
      inputBox.classList.remove("error-shake");
    }, 1000);
  }
  else {
    clearQrCode();
    generateQrCode(inputBox.value);
    setTimeout(() => {
      qrCode.classList.remove("add-animation");
    }, 1000);
  }
})

function generateQrCode(url) {
  new QRCode(qrCode, {
    text: url,
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "transparent",
  });
  qrCode.classList.add("add-animation");
}; //generates QRCODE

function clearQrCode() {
  qrCode.innerHTML = "";
} //Clears previous QRCODE


inputBox.addEventListener("click", () => {
  inputBox.select();
})
inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (inputBox.value === "") {
      clearQrCode();
      inputBox.classList.add("error-shake");
      setTimeout(() => {
        inputBox.classList.remove("error-shake");
      }, 1000);
    }
    else {
      clearQrCode();
      generateQrCode(inputBox.value);
      setTimeout(() => {
        qrCode.classList.remove("add-animation");
      }, 1000);
    }
  }
})