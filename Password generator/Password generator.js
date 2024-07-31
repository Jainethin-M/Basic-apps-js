// console.log("hello");
const passwordBox=document.querySelector("#password");
let len=16;
const copyBtn=document.querySelector(".copy-btn");
const generatePassword=document.querySelector(".generate")

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$_";
const startLetter=upperCase+"_"+lowerCase+"_";
const allLetter=upperCase+lowerCase+numbers+symbols;

function createPassword(){
    let password="";
    password+= startLetter[Math.floor(Math.random()*startLetter.length)];
    while(len>password.length){
        password+= allLetter[Math.floor(Math.random()*allLetter.length)];
        
    }
    passwordBox.value=password;
}
generatePassword.addEventListener("click",createPassword,false);

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

}