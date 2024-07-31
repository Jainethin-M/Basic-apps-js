let container=document.querySelector(".container");
let gridWidth=document.querySelector("#width-range");
let gridHeight=document.querySelector("#height-range");
let gridCreate=document.querySelector("#create-grid");
let gridClear=document.querySelector("#clear-grid");
let drawErase=document.querySelector("#erase-btn");
let drawPaint=document.querySelector("#paint-btn");
let drawColor=document.querySelector("#color-input");
// let color=document.querySelector(':root');
var pixel;
gridWidth.value=0;
gridHeight.value=0;
let draw;
let clicked;
let moving;
// console.log(drawColor.value);



// getting WIDTH
gridWidth.addEventListener("change",()=>{
    if(gridWidth.value<10)    
        document.querySelector("#width-value").innerHTML="0"+gridWidth.value;
    else
    document.querySelector("#width-value").innerHTML=gridWidth.value;
console.log("width="+gridWidth.value);
})
// getting HEIGHT
gridHeight.addEventListener("change",()=>{
    if(gridHeight.value<10)    
        document.querySelector("#height-value").innerHTML="0"+gridHeight.value;
    else
    document.querySelector("#height-value").innerHTML=gridHeight.value;
console.log("height="+gridHeight.value);
})
// container creation
container.style.gridTemplate="repeat("+gridHeight.value+",1fr/repeat("+gridWidth.value+",1fr)";
// container.style.cursor="pointer";
// container.style.cursor= ;
// creating grid area to draw
gridCreate.addEventListener("click",()=>{
    del();
    
    container.style.display="grid";
    let col=gridWidth.value;
    let row=gridHeight.value;
    pixel=gridWidth.value*gridHeight.value;
    console.log("create");
    
    for(let i=1;i<=row;i++){
        for(let j=1;j<=col;j++){
            let boxcol=document.createElement("div");
            boxcol.classList="boxcol";
            // boxcol.innerText=`${i}${j}`;
            boxcol.style.gridArea=`${i}/${j}/${i+1}/${j+1}`;
            container.appendChild(boxcol);

            // painting
            boxcol.addEventListener("mousemove",()=>{
            

                if(draw&&clicked)
                    boxcol.style.backgroundColor=drawColor.value;
                else if(!draw&&clicked)
                boxcol.style.backgroundColor="transparent";
            
            })
            
        }
    }
    
    
}) 

gridClear.addEventListener("click",()=>{
    container.style.display="none";
    
});



function del(){
    for(let i=0;i<pixel;i++){
        
        var del=document.querySelector(".container div");
        document.getElementsByClassName("container")[0].removeChild(del);
    }
}


drawPaint.addEventListener("click",()=>{
    draw=true;
 
})

drawErase.addEventListener("click",()=>{

    draw=false;
    // color.style.setProperty('--paint','transparent');

})
document.addEventListener('mousedown',(e)=>{
    // e.preventDefault();
    clicked=true;
    console.log("down");
})
document.addEventListener('mouseup',(e)=>{
    e.preventDefault();
    clicked=false;
    console.log("up");
})
// document.addEventListener('mousemove',(e)=>{
    
// })



