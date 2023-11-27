const inputBox = document.querySelector(".js-input-box");

const button = document.querySelector(".js-button");

const qrCode = document.getElementById("js-qrcode");


button.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Please enter any text or url");
  }
  else {
    clearQrCode();
    generateQrCode(inputBox.value);
  }
})

function generateQrCode(url) {
  const qr = new QRCode(qrCode, {
    text: url,
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "transparent",
    correctLevel: QRCode.CorrectLevel.H
  });
}; //generates QRCODE

function clearQrCode() {
  qrCode.innerHTML = "";
} //Clears previous QRCODE

