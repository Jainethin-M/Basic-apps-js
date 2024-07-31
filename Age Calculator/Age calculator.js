let DOB=document.querySelector("#date");
let calculate=document.querySelector(".submit");
let container=document.querySelector(".container");
let delP=document.querySelector(".delete");

DOB.max=new Date().toISOString().split("T")[0];

let d3,m3,y3;
calculate.addEventListener("click",()=>{
    let birth=new Date(DOB.value);
    let d1=birth.getDate();
    let m1=birth.getMonth()+1;
    let y1=birth.getFullYear();
    
    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    y3 = y2 - y1;
    if(m2>=m1)m3=m2-m1;
    else {
        y3--;m3=m2-m1+12;
    }

    if(d2>=d1)d3=d2-d1;
    else{
        m3--;
        d3=getDaysInMonth(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3=11;y3--;
    }
    function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate();
    }

    // console.log(y3,m3,d3);
    disp();
})
function delelement(){
    let del=document.querySelectorAll(".container .display");
    del.forEach(element =>{
        element.remove();
    })
}
function disp(){
    delelement();
    let display=document.createElement("p");
    
    display.innerHTML=`YEAR:${y3} <br> MONTH:${m3} <br> DAYS:${d3}`;
    display.className="display";
    container.appendChild(display);

}
