let createButton=document.querySelector(".create-note");
let container=document.querySelector(".container");
let notes=document.querySelectorAll(".note-container");

createButton.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    inputBox.className="note-container";
    inputBox.setAttribute("contenteditable","true");
    container.append(inputBox);

    let del=document.createElement("img");
    del.className="delete-icon";
    del.setAttribute("alt","x");
    del.innerText="x";
    inputBox.append(del);
    saveData();
})
container.addEventListener("click",(e)=>{
    
    if(e.target.tagName=="IMG"){
        console.log("img");
        e.target.parentElement.remove()
        saveData();
    }
    else if(e.target.tagName=="P"){
        notes=document.querySelectorAll(".note-container");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                saveData();
            }
        })
    }
})
function saveData(){
    localStorage.setItem("notes",container.innerHTML);
}
function getData(){
    container.innerHTML=localStorage.getItem("notes");
}
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
getData();