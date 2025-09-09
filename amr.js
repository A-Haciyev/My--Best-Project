let bmr1 = document.querySelector(".bmr1")
let bmr2 = document.querySelector(".bmr2")
let bmr3 = document.querySelector(".bmr3")
let bmr4 = document.querySelector(".bmr4")
let gbmr = document.querySelector(".bmr-sel1")
let lbmr = document.querySelector(".bmr-sel2")





function calculate() {

let weight = bmr1.value.trim();
let height = bmr2.value.trim();
let age = bmr3.value.trim();
let gen = gbmr.value;
let lif = lbmr.value;



if (!weight || !height || !age || !gen || !lif) {
    bmr4.value = "";
        return;
} else if(gen === "NON" || lif === "SELE"){
bmr4.value = "";
}else if(gen === "MAN" && lif === "SEDE") {
     bmr4.value = (88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))) * 1.2
} else if(gen === "MAN" && lif === "LIGH") {
     bmr4.value = (88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))) * 1.375
} else if(gen === "MAN" && lif === "MODE") {
     bmr4.value = (88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))) * 1.55
} else if(gen === "MAN" && lif === "VERY") {
     bmr4.value = (88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))) * 1.725
} else if(gen === "MAN" && lif === "EXT") {
     bmr4.value = (88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))) * 1.9
}


else if(gen === "WOM" && lif === "SEDE") {
     bmr4.value = (447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))) * 1.2
} else if(gen === "WOM" && lif === "LIGH") {
     bmr4.value = (447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))) * 1.375
} else if(gen === "WOM" && lif === "MODE") {
     bmr4.value = (447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))) * 1.55
} else if(gen === "WOM" && lif === "VERY") {
     bmr4.value = (447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))) * 1.725
} else if(gen === "WOM" && lif === "EXT") {
     bmr4.value = (447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))) * 1.9
}






}



bmr1.addEventListener("keyup", calculate);
bmr2.addEventListener("keyup", calculate);
bmr3.addEventListener("keyup", calculate);
gbmr.addEventListener("change",calculate);
lbmr.addEventListener("change",calculate);