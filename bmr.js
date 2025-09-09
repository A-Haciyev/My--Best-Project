let bmr1 = document.querySelector(".bmr1")
let bmr2 = document.querySelector(".bmr2")
let bmr3 = document.querySelector(".bmr3")
let bmr4 = document.querySelector(".bmr4")
let sbmr = document.querySelector(".bmr-sel")




function calculate() {

let weight = bmr1.value.trim();
let height = bmr2.value.trim();
let age = bmr3.value.trim();
let gen = sbmr.value;



if (!weight || !height || !age || !gen) {
    bmr4.value = "";
        return;
}else if(gen === "NON"){
bmr4.value = "";
}else if(gen === "MAN") {
     bmr4.value = 88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))
}else if(gen === "WOM"){
bmr4.value = 447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))
}
}



bmr1.addEventListener("keyup", calculate);
bmr2.addEventListener("keyup", calculate);
bmr3.addEventListener("keyup", calculate);
sbmr.addEventListener("change",calculate);