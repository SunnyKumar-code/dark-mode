let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let togle = document.querySelector(".toggle");
let circle = document.querySelector(".cir");

let count = 0;
togle.addEventListener("click", function(){

    
        if(count%2==0){
            circle.style.marginLeft="0";
             count++;
             body.style.backgroundColor = "white";
             h1.style.filter="invert(0)";
         }else{
             circle.style.marginLeft="70px";
             count++;
             body.style.backgroundColor = "black";
             h1.style.filter="invert(1)";
         }
   
   
   
})