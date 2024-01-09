let imgBox = document.querySelector("#img__box");
let qrImage = document.querySelector("#qr__image");
let qrText = document.querySelector("#qr__text");

const generateQR = () => {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

