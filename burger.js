let i = document.querySelector(".burger")
let titl = document.querySelector(".burg-titl")


i.addEventListener("click",()=>{
    titl.classList.toggle("show")
    i.classList.toggle("padd")
})