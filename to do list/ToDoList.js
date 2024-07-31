let newTask=document.querySelector(".get-task");
let tasks=document.querySelector(".tasks");
let addTask=document.querySelector(".add-task");

function addNewTask(){
    if(newTask.value=="")
        alert("nothing is entered");
    else{
        let list=document.createElement("li");
        list.innerText=newTask.value;
        // console.log(newTask.value);
        tasks.appendChild(list);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(span);
    }
    newTask.value="";
    saveData();
}

addTask.addEventListener("click",()=>{
    addNewTask();
})
tasks.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        console.log("list");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        console.log("span");
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",tasks.innerHTML);
}
function showTask(){
    tasks.innerHTML=localStorage.getItem("data");
}
showTask();