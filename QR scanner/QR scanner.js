let input=document.querySelector("#input");
let qrCode=document.querySelector(".qrcode");
let qrText=document.querySelector(".qrtext");
let container=document.querySelector(".container");
let generate=document.querySelector(".generate");

generate.addEventListener("click",generateQR);

function generateQR(){
    qrCode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    // console.log(input.value);
    qrText.innerHTML=input.value;

}
