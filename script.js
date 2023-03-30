var navbar = document.querySelector("nav");
var hamburger = document.querySelector(".hamburger");
var span1 = document.querySelector(".span-1");
var span2 = document.querySelector(".span-2");
var span3 = document.querySelector(".span-3");
var comname = document.querySelector(".company-name");





span1.addEventListener("click" ,() =>{
    span1.classList.add("active");
    span2.classList.remove("active");
    span3.classList.remove("active");
    comname.innerHTML = "Josh Phillips";
})

span2.addEventListener("click" ,() =>{
    span2.classList.add("active");
    span1.classList.remove("active");
    span3.classList.remove("active");
    comname.innerHTML = "Gabriella Spring";
})

span3.addEventListener("click" ,() =>{
    span3.classList.add("active");
    span1.classList.remove("active");
    span2.classList.remove("active");
    comname.innerHTML = "Louise Maxwell";
})


window.addEventListener("scroll" , ()=>{

    if(scrollY > 100){
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }

})
hamburger.addEventListener("click" , ()=>{
    navbar.classList.toggle("active-bar");
})