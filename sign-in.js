let btn=document.querySelector("#mode");
let body=document.querySelector("body");
let mode="light";
let b1=document.querySelector(".box-1");

btn.addEventListener("click",()=>{
    if(mode=="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});
