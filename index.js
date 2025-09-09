
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let sel1 = document.querySelector(".sel1")
let sel2 = document.querySelector(".sel2")


function convert() {
    let val = inp1.value;
    let first = sel1.value;
    let second = sel2.value;


    if (!val) {
        inp2.value = "";
        return;
    }

    if (first === second) {
        inp2.value = val;
    }else if(first === "NON" || second === "NON"){
inp2.value = ""
    } else if (first === "USD" && second === "AZN") {
        inp2.value = val * 1.7;
    } else if (first === "USD" && second === "EUR") {
        inp2.value = val * 0.85757;
    } else if (first === "USD" && second === "RUB") {
        inp2.value = val * 80.5532;
    } else if (first === "USD" && second === "JPY") {
        inp2.value = val * 148.195;
    } else if (first === "USD" && second === "TRY") {
        inp2.value = val * 41.1415;
    } else if (first === "USD" && second === "GBP") {
        inp2.value = val * 0.74441;
    } else if (first === "USD" && second === "AED") {
        inp2.value = val * 3.67231;
    }  else if (first === "USD" && second === "ARS") {
        inp2.value = val * 1370.16;
    } else if (first === "USD" && second === "BYN") {
        inp2.value = val * 3.36964;
    } else if (first === "USD" && second === "CHF") {
        inp2.value = val * 0.80334;
    } else if (first === "USD" && second === "CNY") {
        inp2.value = val * 7.13756;
    } else if (first === "USD" && second === "ILS") {
        inp2.value = val * 3.37549;
    }  else if (first === "USD" && second === "KRW") {
        inp2.value = val * 1393.47;
    } else if (first === "USD" && second === "KZT") {
        inp2.value = val * 538.031;
    } else if (first === "USD" && second === "UAH") {
        inp2.value = val * 41.2257;
    } else if (first === "USD" && second === "UZS") {
        inp2.value = val * 12435;
    } 
    

      else if (first === "EUR" && second === "AZN") {
   inp2.value = val / 0.85757 * 1.7;
    } else if (first === "EUR" && second === "USD") {
   inp2.value = val / 0.85757;
    } else if (first === "EUR" && second === "RUB") {
   inp2.value = val / 0.85757 * 80.5532;
    } else if (first === "EUR" && second === "JPY") {
   inp2.value = val / 0.85757 * 148.195;
    } else if (first === "EUR" && second === "TRY") {
   inp2.value = val / 0.85757 * 41.1415;
    } else if (first === "EUR" && second === "GBP") {
   inp2.value = val / 0.85757 * 0.74441;
    } else if (first === "EUR" && second === "AED") {
   inp2.value = val / 0.85757 * 3.67231;
    }  else if (first === "EUR" && second === "ARS") {
   inp2.value = val / 0.85757 * 1370.16;
    } else if (first === "EUR" && second === "BYN") {
   inp2.value = val / 0.85757 * 3.36964;
    } else if (first === "EUR" && second === "CHF") {
   inp2.value = val / 0.85757 * 0.80334;
    } else if (first === "EUR" && second === "CNY") {
   inp2.value = val / 0.85757 * 7.13756;
    } else if (first === "EUR" && second === "ILS") {
   inp2.value = val / 0.85757 * 3.37549;
    }  else if (first === "EUR" && second === "KRW") {
   inp2.value = val / 0.85757 * 1393.47;
    } else if (first === "EUR" && second === "KZT") {
   inp2.value = val / 0.85757 * 538.031;
    } else if (first === "EUR" && second === "UAH") {
   inp2.value = val / 0.85757 * 41.2257;
    } else if (first === "EUR" && second === "UZS") {
   inp2.value = val / 0.85757 * 12435;
    }


    else if (first === "AZN" && second === "EUR") {
   inp2.value = val / 1.7 * 0.85757;
    } else if (first === "AZN" && second === "USD") {
   inp2.value = val / 1.7;
    } else if (first === "AZN" && second === "RUB") {
   inp2.value = val / 1.7 * 80.5532;
    } else if (first === "AZN" && second === "JPY") {
   inp2.value = val / 1.7 * 148.195;
    } else if (first === "AZN" && second === "TRY") {
   inp2.value = val / 1.7 * 41.1415;
    } else if (first === "AZN" && second === "GBP") {
   inp2.value = val / 1.7 * 0.74441;
    } else if (first === "AZN" && second === "AED") {
   inp2.value = val / 1.7 * 3.67231;
    } else if (first === "AZN" && second === "ARS") {
   inp2.value = val / 1.7 * 1370.16;
    } else if (first === "AZN" && second === "BYN") {
   inp2.value = val / 1.7 * 3.36964;
    } else if (first === "AZN" && second === "CHF") {
   inp2.value = val / 1.7 * 0.80334;
    } else if (first === "AZN" && second === "CNY") {
   inp2.value = val / 1.7 * 7.13756;
    } else if (first === "AZN" && second === "ILS") {
   inp2.value = val / 1.7 * 3.37549;
    } else if (first === "AZN" && second === "KRW") {
   inp2.value = val / 1.7 * 1393.47;
    } else if (first === "AZN" && second === "KZT") {
   inp2.value = val / 1.7 * 538.031;
    } else if (first === "AZN" && second === "UAH") {
   inp2.value = val / 1.7 * 41.2257;
    } else if (first === "AZN" && second === "UZS") {
   inp2.value = val / 1.7 * 12435;
    }


    else if (first === "RUB" && second === "EUR") {
   inp2.value = val / 80.5532 * 0.85757;
    } else if (first === "RUB" && second === "USD") {
   inp2.value = val / 80.5532;
    } else if (first === "RUB" && second === "AZN") {
   inp2.value = val / 80.5532 * 1.7;
    } else if (first === "RUB" && second === "JPY") {
   inp2.value = val / 80.5532 * 148.195;
    } else if (first === "RUB" && second === "TRY") {
   inp2.value = val / 80.5532 * 41.1415;
    } else if (first === "RUB" && second === "GBP") {
   inp2.value = val / 80.5532 * 0.74441;
    } else if (first === "RUB" && second === "AED") {
   inp2.value = val / 80.5532 * 3.67231;
    } else if (first === "RUB" && second === "ARS") {
   inp2.value = val / 80.5532 * 1370.16;
    } else if (first === "RUB" && second === "BYN") {
   inp2.value = val / 80.5532 * 3.36964;
    } else if (first === "RUB" && second === "CHF") {
   inp2.value = val / 80.5532 * 0.80334;
    } else if (first === "RUB" && second === "CNY") {
   inp2.value = val / 80.5532 * 7.13756;
    } else if (first === "RUB" && second === "ILS") {
   inp2.value = val / 80.5532 * 3.37549;
    } else if (first === "RUB" && second === "KRW") {
   inp2.value = val / 80.5532 * 1393.47;
    } else if (first === "RUB" && second === "KZT") {
   inp2.value = val / 80.5532 * 538.031;
    } else if (first === "RUB" && second === "UAH") {
   inp2.value = val / 80.5532 * 41.2257;
    } else if (first === "RUB" && second === "UZS") {
   inp2.value = val / 80.5532 * 12435;
}


else if (first === "JPY" && second === "EUR") {
   inp2.value = val / 148.195 * 0.85757;
    } else if (first === "JPY" && second === "USD") {
   inp2.value = val / 148.195;
    } else if (first === "JPY" && second === "AZN") {
   inp2.value = val / 148.195 * 1.7;
    } else if (first === "JPY" && second === "RUB") {
   inp2.value = val / 148.195 * 80.5532;
    } else if (first === "JPY" && second === "TRY") {
   inp2.value = val / 148.195 * 41.1415;
    } else if (first === "JPY" && second === "GBP") {
   inp2.value = val / 148.195 * 0.74441;
    } else if (first === "JPY" && second === "AED") {
   inp2.value = val / 148.195 * 3.67231;
    } else if (first === "JPY" && second === "ARS") {
   inp2.value = val / 148.195 * 1370.16;
    } else if (first === "JPY" && second === "BYN") {
   inp2.value = val / 148.195 * 3.36964;
    } else if (first === "JPY" && second === "CHF") {
   inp2.value = val / 148.195 * 0.80334;
    } else if (first === "JPY" && second === "CNY") {
   inp2.value = val / 148.195 * 7.13756;
    } else if (first === "JPY" && second === "ILS") {
   inp2.value = val / 148.195 * 3.37549;
    } else if (first === "JPY" && second === "KRW") {
   inp2.value = val / 148.195 * 1393.47;
    } else if (first === "JPY" && second === "KZT") {
   inp2.value = val / 148.195 * 538.031;
    } else if (first === "JPY" && second === "UAH") {
   inp2.value = val / 148.195 * 41.2257;
    } else if (first === "JPY" && second === "UZS") {
   inp2.value = val / 148.195 * 12435;
}


else if (first === "TRY" && second === "EUR") {
   inp2.value = val / 41.1415 * 0.85757;
    } else if (first === "TRY" && second === "USD") {
   inp2.value = val / 41.1415;
    } else if (first === "TRY" && second === "AZN") {
   inp2.value = val / 41.1415 * 1.7;
    } else if (first === "TRY" && second === "RUB") {
   inp2.value = val / 41.1415 * 80.5532;
    } else if (first === "TRY" && second === "JPY") {
   inp2.value = val / 41.1415 * 148.195;
    } else if (first === "TRY" && second === "GBP") {
   inp2.value = val / 41.1415 * 0.74441;
    } else if (first === "TRY" && second === "AED") {
   inp2.value = val / 41.1415 * 3.67231;
    } else if (first === "TRY" && second === "ARS") {
   inp2.value = val / 41.1415 * 1370.16;
    } else if (first === "TRY" && second === "BYN") {
   inp2.value = val / 41.1415 * 3.36964;
    } else if (first === "TRY" && second === "CHF") {
   inp2.value = val / 41.1415 * 0.80334;
    } else if (first === "TRY" && second === "CNY") {
   inp2.value = val / 41.1415 * 7.13756;
    } else if (first === "TRY" && second === "ILS") {
   inp2.value = val / 41.1415 * 3.37549;
    } else if (first === "TRY" && second === "KRW") {
   inp2.value = val / 41.1415 * 1393.47;
    } else if (first === "TRY" && second === "KZT") {
   inp2.value = val / 41.1415 * 538.031;
    } else if (first === "TRY" && second === "UAH") {
   inp2.value = val / 41.1415 * 41.2257;
    } else if (first === "TRY" && second === "UZS") {
   inp2.value = val / 41.1415 * 12435;
}


else if (first === "GBP" && second === "EUR") {
   inp2.value = val / 0.74441 * 0.85757;
    } else if (first === "GBP" && second === "USD") {
   inp2.value = val / 0.74441;
    } else if (first === "GBP" && second === "AZN") {
   inp2.value = val / 0.74441 * 1.7;
    } else if (first === "GBP" && second === "RUB") {
   inp2.value = val / 0.74441 * 80.5532;
    } else if (first === "GBP" && second === "JPY") {
   inp2.value = val / 0.74441 * 148.195;
    } else if (first === "GBP" && second === "TRY") {
   inp2.value = val / 0.74441 * 41.1415;
    } else if (first === "GBP" && second === "AED") {
   inp2.value = val / 0.74441 * 3.67231;
    } else if (first === "GBP" && second === "ARS") {
   inp2.value = val / 0.74441 * 1370.16;
    } else if (first === "GBP" && second === "BYN") {
   inp2.value = val / 0.74441 * 3.36964;
    } else if (first === "GBP" && second === "CHF") {
   inp2.value = val / 0.74441 * 0.80334;
    } else if (first === "GBP" && second === "CNY") {
   inp2.value = val / 0.74441 * 7.13756;
    } else if (first === "GBP" && second === "ILS") {
   inp2.value = val / 0.74441 * 3.37549;
    } else if (first === "GBP" && second === "KRW") {
   inp2.value = val / 0.74441 * 1393.47;
    } else if (first === "GBP" && second === "KZT") {
   inp2.value = val / 0.74441 * 538.031;
    } else if (first === "GBP" && second === "UAH") {
   inp2.value = val / 0.74441 * 41.2257;
    } else if (first === "GBP" && second === "UZS") {
   inp2.value = val / 0.74441 * 12435;
}


else if (first === "AED" && second === "EUR") {
   inp2.value = val / 3.67231 * 0.85757;
    } else if (first === "AED" && second === "USD") {
   inp2.value = val / 3.67231;
    } else if (first === "AED" && second === "AZN") {
   inp2.value = val / 3.67231 * 1.7;
    } else if (first === "AED" && second === "RUB") {
   inp2.value = val / 3.67231 * 80.5532;
    } else if (first === "AED" && second === "JPY") {
   inp2.value = val / 3.67231 * 148.195;
    } else if (first === "AED" && second === "TRY") {
   inp2.value = val / 3.67231 * 41.1415;
    } else if (first === "AED" && second === "GBP") {
   inp2.value = val / 3.67231 * 0.74441;
    } else if (first === "AED" && second === "ARS") {
   inp2.value = val / 3.67231 * 1370.16;
    } else if (first === "AED" && second === "BYN") {
   inp2.value = val / 3.67231 * 3.36964;
    } else if (first === "AED" && second === "CHF") {
   inp2.value = val / 3.67231 * 0.80334;
    } else if (first === "AED" && second === "CNY") {
   inp2.value = val / 3.67231 * 7.13756;
    } else if (first === "AED" && second === "ILS") {
   inp2.value = val / 3.67231 * 3.37549;
    } else if (first === "AED" && second === "KRW") {
   inp2.value = val / 3.67231 * 1393.47;
    } else if (first === "AED" && second === "KZT") {
   inp2.value = val / 3.67231 * 538.031;
    } else if (first === "AED" && second === "UAH") {
   inp2.value = val / 3.67231 * 41.2257;
    } else if (first === "AED" && second === "UZS") {
   inp2.value = val / 3.67231 * 12435;
}


else if (first === "ARS" && second === "EUR") {
   inp2.value = val / 1370.16 * 0.85757;
    } else if (first === "ARS" && second === "USD") {
   inp2.value = val / 1370.16;
    } else if (first === "ARS" && second === "AZN") {
   inp2.value = val / 1370.16 * 1.7;
    } else if (first === "ARS" && second === "RUB") {
   inp2.value = val / 1370.16 * 80.5532;
    } else if (first === "ARS" && second === "JPY") {
   inp2.value = val / 1370.16 * 148.195;
    } else if (first === "ARS" && second === "TRY") {
   inp2.value = val / 1370.16 * 41.1415;
    } else if (first === "ARS" && second === "GBP") {
   inp2.value = val / 1370.16 * 0.74441;
    } else if (first === "ARS" && second === "AED") {
   inp2.value = val / 1370.16 * 3.67231;
    } else if (first === "ARS" && second === "BYN") {
   inp2.value = val / 1370.16 * 3.36964;
    } else if (first === "ARS" && second === "CHF") {
   inp2.value = val / 1370.16 * 0.80334;
    } else if (first === "ARS" && second === "CNY") {
   inp2.value = val / 1370.16 * 7.13756;
    } else if (first === "ARS" && second === "ILS") {
   inp2.value = val / 1370.16 * 3.37549;
    } else if (first === "ARS" && second === "KRW") {
   inp2.value = val / 1370.16 * 1393.47;
    } else if (first === "ARS" && second === "KZT") {
   inp2.value = val / 1370.16 * 538.031;
    } else if (first === "ARS" && second === "UAH") {
   inp2.value = val / 1370.16 * 41.2257;
    } else if (first === "ARS" && second === "UZS") {
   inp2.value = val / 1370.16 * 12435;
}


else if (first === "BYN" && second === "EUR") {
   inp2.value = val / 3.36964 * 0.85757;
    } else if (first === "BYN" && second === "USD") {
   inp2.value = val / 3.36964;
    } else if (first === "BYN" && second === "AZN") {
   inp2.value = val / 3.36964 * 1.7;
    } else if (first === "BYN" && second === "RUB") {
   inp2.value = val / 3.36964 * 80.5532;
    } else if (first === "BYN" && second === "JPY") {
   inp2.value = val / 3.36964 * 148.195;
    } else if (first === "BYN" && second === "TRY") {
   inp2.value = val / 3.36964 * 41.1415;
    } else if (first === "BYN" && second === "GBP") {
   inp2.value = val / 3.36964 * 0.74441;
    } else if (first === "BYN" && second === "AED") {
   inp2.value = val / 3.36964 * 3.67231;
    } else if (first === "BYN" && second === "ARS") {
   inp2.value = val / 3.36964 * 1370.16;
    } else if (first === "BYN" && second === "CHF") {
   inp2.value = val / 3.36964 * 0.80334;
    } else if (first === "BYN" && second === "CNY") {
   inp2.value = val / 3.36964 * 7.13756;
    } else if (first === "BYN" && second === "ILS") {
   inp2.value = val / 3.36964 * 3.37549;
    } else if (first === "BYN" && second === "KRW") {
   inp2.value = val / 3.36964 * 1393.47;
    } else if (first === "BYN" && second === "KZT") {
   inp2.value = val / 3.36964 * 538.031;
    } else if (first === "BYN" && second === "UAH") {
   inp2.value = val / 3.36964 * 41.2257;
    } else if (first === "BYN" && second === "UZS") {
   inp2.value = val / 3.36964 * 12435;
}


else if (first === "CHF" && second === "EUR") {
   inp2.value = val / 0.80334 * 0.85757;
    } else if (first === "CHF" && second === "USD") {
   inp2.value = val / 0.80334;
    } else if (first === "CHF" && second === "AZN") {
   inp2.value = val / 0.80334 * 1.7;
    } else if (first === "CHF" && second === "RUB") {
   inp2.value = val / 0.80334 * 80.5532;
    } else if (first === "CHF" && second === "JPY") {
   inp2.value = val / 0.80334 * 148.195;
    } else if (first === "CHF" && second === "TRY") {
   inp2.value = val / 0.80334 * 41.1415;
    } else if (first === "CHF" && second === "GBP") {
   inp2.value = val / 0.80334 * 0.74441;
    } else if (first === "CHF" && second === "AED") {
   inp2.value = val / 0.80334 * 3.67231;
    } else if (first === "CHF" && second === "ARS") {
   inp2.value = val / 0.80334 * 1370.16;
    } else if (first === "CHF" && second === "BYN") {
   inp2.value = val / 0.80334 * 3.36964;
    } else if (first === "CHF" && second === "CNY") {
   inp2.value = val / 0.80334 * 7.13756;
    } else if (first === "CHF" && second === "ILS") {
   inp2.value = val / 0.80334 * 3.37549;
    } else if (first === "CHF" && second === "KRW") {
   inp2.value = val / 0.80334 * 1393.47;
    } else if (first === "CHF" && second === "KZT") {
   inp2.value = val / 0.80334 * 538.031;
    } else if (first === "CHF" && second === "UAH") {
   inp2.value = val / 0.80334 * 41.2257;
    } else if (first === "CHF" && second === "UZS") {
   inp2.value = val / 0.80334 * 12435;
}


else if (first === "CNY" && second === "EUR") {
   inp2.value = val / 7.13756 * 0.85757;
    } else if (first === "CNY" && second === "USD") {
   inp2.value = val / 7.13756;
    } else if (first === "CNY" && second === "AZN") {
   inp2.value = val / 7.13756 * 1.7;
    } else if (first === "CNY" && second === "RUB") {
   inp2.value = val / 7.13756 * 80.5532;
    } else if (first === "CNY" && second === "JPY") {
   inp2.value = val / 7.13756 * 148.195;
    } else if (first === "CNY" && second === "TRY") {
   inp2.value = val / 7.13756 * 41.1415;
    } else if (first === "CNY" && second === "GBP") {
   inp2.value = val / 7.13756 * 0.74441;
    } else if (first === "CNY" && second === "AED") {
   inp2.value = val / 7.13756 * 3.67231;
    } else if (first === "CNY" && second === "ARS") {
   inp2.value = val / 7.13756 * 1370.16;
    } else if (first === "CNY" && second === "BYN") {
   inp2.value = val / 7.13756 * 3.36964;
    } else if (first === "CNY" && second === "CHF") {
   inp2.value = val / 7.13756 * 0.80334;
    } else if (first === "CNY" && second === "ILS") {
   inp2.value = val / 7.13756 * 3.37549;
    } else if (first === "CNY" && second === "KRW") {
   inp2.value = val / 7.13756 * 1393.47;
    } else if (first === "CNY" && second === "KZT") {
   inp2.value = val / 7.13756 * 538.031;
    } else if (first === "CNY" && second === "UAH") {
   inp2.value = val / 7.13756 * 41.2257;
    } else if (first === "CNY" && second === "UZS") {
   inp2.value = val / 7.13756 * 12435;
}


else if (first === "ILS" && second === "EUR") {
   inp2.value = val / 3.37549 * 0.85757;
    } else if (first === "ILS" && second === "USD") {
   inp2.value = val / 3.37549;
    } else if (first === "ILS" && second === "AZN") {
   inp2.value = val / 3.37549 * 1.7;
    } else if (first === "ILS" && second === "RUB") {
   inp2.value = val / 3.37549 * 80.5532;
    } else if (first === "ILS" && second === "JPY") {
   inp2.value = val / 3.37549 * 148.195;
    } else if (first === "ILS" && second === "TRY") {
   inp2.value = val / 3.37549 * 41.1415;
    } else if (first === "ILS" && second === "GBP") {
   inp2.value = val / 3.37549 * 0.74441;
    } else if (first === "ILS" && second === "AED") {
   inp2.value = val / 3.37549 * 3.67231;
    } else if (first === "ILS" && second === "ARS") {
   inp2.value = val / 3.37549 * 1370.16;
    } else if (first === "ILS" && second === "BYN") {
   inp2.value = val / 3.37549 * 3.36964;
    } else if (first === "ILS" && second === "CHF") {
   inp2.value = val / 3.37549 * 0.80334;
    } else if (first === "ILS" && second === "CNY") {
   inp2.value = val / 3.37549 * 7.13756;
    } else if (first === "ILS" && second === "KRW") {
   inp2.value = val / 3.37549 * 1393.47;
    } else if (first === "ILS" && second === "KZT") {
   inp2.value = val / 3.37549 * 538.031;
    } else if (first === "ILS" && second === "UAH") {
   inp2.value = val / 3.37549 * 41.2257;
    } else if (first === "ILS" && second === "UZS") {
   inp2.value = val / 3.37549 * 123.37549
}


else if (first === "KRW" && second === "EUR") {
   inp2.value = val / 1393.47 * 0.85757;
    } else if (first === "KRW" && second === "USD") {
   inp2.value = val / 1393.47;
    } else if (first === "KRW" && second === "AZN") {
   inp2.value = val / 1393.47 * 1.7;
    } else if (first === "KRW" && second === "RUB") {
   inp2.value = val / 1393.47 * 80.5532;
    } else if (first === "KRW" && second === "JPY") {
   inp2.value = val / 1393.47 * 148.195;
    } else if (first === "KRW" && second === "TRY") {
   inp2.value = val / 1393.47 * 41.1415;
    } else if (first === "KRW" && second === "GBP") {
   inp2.value = val / 1393.47 * 0.74441;
    } else if (first === "KRW" && second === "AED") {
   inp2.value = val / 1393.47 * 3.67231;
    } else if (first === "KRW" && second === "ARS") {
   inp2.value = val / 1393.47 * 1370.16;
    } else if (first === "KRW" && second === "BYN") {
   inp2.value = val / 1393.47 * 3.36964;
    } else if (first === "KRW" && second === "CHF") {
   inp2.value = val / 1393.47 * 0.80334;
    } else if (first === "KRW" && second === "CNY") {
   inp2.value = val / 1393.47 * 7.13756;
    } else if (first === "KRW" && second === "ILS") {
   inp2.value = val / 1393.47 * 3.37549;
    } else if (first === "KRW" && second === "KZT") {
   inp2.value = val / 1393.47 * 538.031;
    } else if (first === "KRW" && second === "UAH") {
   inp2.value = val / 1393.47 * 41.2257;
    } else if (first === "KRW" && second === "UZS") {
   inp2.value = val / 1393.47 * 123.37549
}


else if (first === "KZT" && second === "EUR") {
   inp2.value = val / 538.031 * 0.85757;
    } else if (first === "KZT" && second === "USD") {
   inp2.value = val / 538.031;
    } else if (first === "KZT" && second === "AZN") {
   inp2.value = val / 538.031 * 1.7;
    } else if (first === "KZT" && second === "RUB") {
   inp2.value = val / 538.031 * 80.5532;
    } else if (first === "KZT" && second === "JPY") {
   inp2.value = val / 538.031 * 148.195;
    } else if (first === "KZT" && second === "TRY") {
   inp2.value = val / 538.031 * 41.1415;
    } else if (first === "KZT" && second === "GBP") {
   inp2.value = val / 538.031 * 0.74441;
    } else if (first === "KZT" && second === "AED") {
   inp2.value = val / 538.031 * 3.67231;
    } else if (first === "KZT" && second === "ARS") {
   inp2.value = val / 538.031 * 1370.16;
    } else if (first === "KZT" && second === "BYN") {
   inp2.value = val / 538.031 * 3.36964;
    } else if (first === "KZT" && second === "CHF") {
   inp2.value = val / 538.031 * 0.80334;
    } else if (first === "KZT" && second === "CNY") {
   inp2.value = val / 538.031 * 7.13756;
    } else if (first === "KZT" && second === "ILS") {
   inp2.value = val / 538.031 * 3.37549;
    } else if (first === "KZT" && second === "KRW") {
   inp2.value = val / 538.031 * 1393.47;
    } else if (first === "KZT" && second === "UAH") {
   inp2.value = val / 538.031 * 41.2257;
    } else if (first === "KZT" && second === "UZS") {
   inp2.value = val / 538.031 * 123.37549
}


else if (first === "UAH" && second === "EUR") {
   inp2.value = val / 41.2257 * 0.85757;
    } else if (first === "UAH" && second === "USD") {
   inp2.value = val / 41.2257;
    } else if (first === "UAH" && second === "AZN") {
   inp2.value = val / 41.2257 * 1.7;
    } else if (first === "UAH" && second === "RUB") {
   inp2.value = val / 41.2257 * 80.5532;
    } else if (first === "UAH" && second === "JPY") {
   inp2.value = val / 41.2257 * 148.195;
    } else if (first === "UAH" && second === "TRY") {
   inp2.value = val / 41.2257 * 41.1415;
    } else if (first === "UAH" && second === "GBP") {
   inp2.value = val / 41.2257 * 0.74441;
    } else if (first === "UAH" && second === "AED") {
   inp2.value = val / 41.2257 * 3.67231;
    } else if (first === "UAH" && second === "ARS") {
   inp2.value = val / 41.2257 * 1370.16;
    } else if (first === "UAH" && second === "BYN") {
   inp2.value = val / 41.2257 * 3.36964;
    } else if (first === "UAH" && second === "CHF") {
   inp2.value = val / 41.2257 * 0.80334;
    } else if (first === "UAH" && second === "CNY") {
   inp2.value = val / 41.2257 * 7.13756;
    } else if (first === "UAH" && second === "ILS") {
   inp2.value = val / 41.2257 * 3.37549;
    } else if (first === "UAH" && second === "KRW") {
   inp2.value = val / 41.2257 * 1393.47;
    } else if (first === "UAH" && second === "KZT") {
   inp2.value = val / 41.2257 * 538.031;
    } else if (first === "UAH" && second === "UZS") {
   inp2.value = val / 41.2257 * 123.37549
}


else if (first === "UZS" && second === "EUR") {
   inp2.value = val / 123.37549 * 0.85757;
    } else if (first === "UZS" && second === "USD") {
   inp2.value = val / 123.37549;
    } else if (first === "UZS" && second === "AZN") {
   inp2.value = val / 123.37549 * 1.7;
    } else if (first === "UZS" && second === "RUB") {
   inp2.value = val / 123.37549 * 80.5532;
    } else if (first === "UZS" && second === "JPY") {
   inp2.value = val / 123.37549 * 148.195;
    } else if (first === "UZS" && second === "TRY") {
   inp2.value = val / 123.37549 * 41.1415;
    } else if (first === "UZS" && second === "GBP") {
   inp2.value = val / 123.37549 * 0.74441;
    } else if (first === "UZS" && second === "AED") {
   inp2.value = val / 123.37549 * 3.67231;
    } else if (first === "UZS" && second === "ARS") {
   inp2.value = val / 123.37549 * 1370.16;
    } else if (first === "UZS" && second === "BYN") {
   inp2.value = val / 123.37549 * 3.36964;
    } else if (first === "UZS" && second === "CHF") {
   inp2.value = val / 123.37549 * 0.80334;
    } else if (first === "UZS" && second === "CNY") {
   inp2.value = val / 123.37549 * 7.13756;
    } else if (first === "UZS" && second === "ILS") {
   inp2.value = val / 123.37549 * 3.37549;
    } else if (first === "UZS" && second === "KRW") {
   inp2.value = val / 123.37549 * 1393.47;
    } else if (first === "UZS" && second === "KZT") {
   inp2.value = val / 123.37549 * 538.031;
    } else if (first === "UZS" && second === "UAH") {
   inp2.value = val / 123.37549 * 41.2257
}









else if (first === "DEG" && second === "MOA") {
   inp2.value = val * 60;
    } else if (first === "DEG" && second === "GRD") {
   inp2.value = val * 1.111;
    } else if (first === "DEG" && second === "SOA") {
   inp2.value = val * 3600;
    }else if (first === "DEG" && second === "RAD") {
   inp2.value = val * 0.01745;
    }


    else if (first === "MOA" && second === "DEG") {
   inp2.value = val / 60 ;
    } else if (first === "MOA" && second === "GRD") {
   inp2.value = val / 60 * 1.111;
    } else if (first === "MOA" && second === "SOA") {
   inp2.value = val / 60 * 3600;
    }else if (first === "MOA" && second === "RAD") {
   inp2.value = val / 60 * 0.01745;
    }


    else if (first === "GRD" && second === "DEG") {
   inp2.value = val / 1.111 ;
    } else if (first === "GRD" && second === "MOA") {
   inp2.value = val / 1.111 * 60;
    } else if (first === "GRD" && second === "SOA") {
   inp2.value = val / 1.111 * 3600;
    }else if (first === "GRD" && second === "RAD") {
   inp2.value = val / 1.111 * 0.01745;
    }


     else if (first === "SOA" && second === "DEG") {
   inp2.value = val / 3600 ;
    } else if (first === "SOA" && second === "MOA") {
   inp2.value = val / 3600 * 60;
    } else if (first === "SOA" && second === "GRD") {
   inp2.value = val / 3600 * 1.111;
    }else if (first === "SOA" && second === "RAD") {
   inp2.value = val / 3600 * 0.01745;
    }


     else if (first === "RAD" && second === "DEG") {
   inp2.value = val / 0.01745 ;
    } else if (first === "RAD" && second === "MOA") {
   inp2.value = val / 0.01745 * 60;
    } else if (first === "RAD" && second === "GRD") {
   inp2.value = val / 0.01745 * 1.111;
    }else if (first === "RAD" && second === "SOA") {
   inp2.value = val / 0.01745 * 3600;
    }








    else if (first === "BI" && second === "BA") {
   inp2.value = val * 0.125 ;
    } else if (first === "BI" && second === "KB") {
   inp2.value = val * 0.00012207 ;
    } else if (first === "BI" && second === "MB") {
   inp2.value = val * 0.0000001192 ;
    }else if (first === "BI" && second === "GB") {
   inp2.value = val * 0.0000000001164 ;
    }else if (first === "BI" && second === "TB") {
   inp2.value = val * 0.0000000000001136;
    }


     else if (first === "BA" && second === "BI") {
   inp2.value = val / 0.125 ;
    } else if (first === "BA" && second === "KB") {
   inp2.value = val / 0.125 * 0.00012207 ;
    } else if (first === "BA" && second === "MB") {
   inp2.value = val / 0.125 * 0.0000001192 ;
    }else if (first === "BA" && second === "GB") {
   inp2.value = val / 0.125 * 0.0000000001164 ;
    }else if (first === "BA" && second === "TB") {
   inp2.value = val / 0.125 * 0.0000000000001136;
    }
    
    
    else if (first === "KB" && second === "BI") {
   inp2.value = val / 0.00012207 ;
    } else if (first === "KB" && second === "BA") {
   inp2.value = val / 0.00012207 * 0.125 ;
    } else if (first === "KB" && second === "MB") {
   inp2.value = val / 0.00012207 * 0.0000001192 ;
    }else if (first === "KB" && second === "GB") {
   inp2.value = val / 0.00012207 * 0.0000000001164 ;
    }else if (first === "KB" && second === "TB") {
   inp2.value = val / 0.00012207 * 0.0000000000001136;
    } 

     else if (first === "MB" && second === "BI") {
   inp2.value = val / 0.0000001192 ;
    } else if (first === "MB" && second === "BA") {
   inp2.value = val / 0.0000001192 * 0.125 ;
    } else if (first === "MB" && second === "KB") {
   inp2.value = val / 0.0000001192 * 0.00012207 ;
    }else if (first === "MB" && second === "GB") {
   inp2.value = val / 0.0000001192 * 0.0000000001164 ;
    }else if (first === "MB" && second === "TB") {
   inp2.value = val / 0.0000001192 * 0.0000000000001136;
    } 


      else if (first === "GB" && second === "BI") {
   inp2.value = val / 0.0000000001164 ;
    } else if (first === "GB" && second === "BA") {
   inp2.value = val / 0.0000000001164 * 0.125 ;
    } else if (first === "GB" && second === "KB") {
   inp2.value = val / 0.0000000001164 * 0.00012207 ;
    }else if (first === "GB" && second === "MB") {
   inp2.value = val / 0.0000000001164 * 0.0000001192 ;
    }else if (first === "GB" && second === "TB") {
   inp2.value = val / 0.0000000001164 * 0.0000000000001136;
    } 


     else if (first === "TB" && second === "BI") {
   inp2.value = val / 0.0000000000001136 ;
    } else if (first === "TB" && second === "BA") {
   inp2.value = val / 0.0000000000001136 * 0.125 ;
    } else if (first === "TB" && second === "KB") {
   inp2.value = val / 0.0000000000001136 * 0.00012207 ;
    }else if (first === "TB" && second === "MB") {
   inp2.value = val / 0.0000000000001136 * 0.0000001192 ;
    }else if (first === "TB" && second === "GB") {
   inp2.value = val / 0.0000000000001136 * 0.0000000001164;
    } 










     else if (first === "M" && second === "CM") {
   inp2.value = val * 100 ;
    } else if (first === "M" && second === "MM") {
   inp2.value = val * 1000 ;
    } else if (first === "M" && second === "KM") {
   inp2.value = val * 0.001 ;
    }else if (first === "M" && second === "IN") {
   inp2.value = val * 39.3701 ;
    } else if (first === "M" && second === "FT") {
   inp2.value = val * 3.28084 ;
    } else if (first === "M" && second === "YD") {
   inp2.value = val * 1.09361 ;
    } else if (first === "M" && second === "MI") {
   inp2.value = val * 0.000621 ;
    }else if (first === "M" && second === "LY") {
   inp2.value = val * 0.0000000000000001057 ;
    }


    else if (first === "CM" && second === "M") {
   inp2.value = val / 100 ;
    } else if (first === "CM" && second === "MM") {
   inp2.value = val / 100 * 1000 ;
    } else if (first === "CM" && second === "KM") {
   inp2.value = val / 100 * 0.001 ;
    }else if (first === "CM" && second === "IN") {
   inp2.value = val / 100 * 39.3701 ;
    } else if (first === "CM" && second === "FT") {
   inp2.value = val / 100 * 3.28084 ;
    } else if (first === "CM" && second === "YD") {
   inp2.value = val / 100 * 1.09361 ;
    } else if (first === "CM" && second === "MI") {
   inp2.value = val / 100 * 0.000621 ;
    }else if (first === "CM" && second === "LY") {
   inp2.value = val / 100 * 0.0000000000000001057 ;
    }


    else if (first === "MM" && second === "M") {
   inp2.value = val / 1000 ;
    } else if (first === "MM" && second === "CM") {
   inp2.value = val / 1000 * 100 ;
    } else if (first === "MM" && second === "KM") {
   inp2.value = val / 1000 * 0.001 ;
    }else if (first === "MM" && second === "IN") {
   inp2.value = val / 1000 * 39.3701 ;
    } else if (first === "MM" && second === "FT") {
   inp2.value = val / 1000 * 3.28084 ;
    } else if (first === "MM" && second === "YD") {
   inp2.value = val / 1000 * 1.09361 ;
    } else if (first === "MM" && second === "MI") {
   inp2.value = val / 1000 * 0.000621 ;
    }else if (first === "MM" && second === "LY") {
   inp2.value = val / 1000 * 0.0000000000000001057 ;
    }


    else if (first === "KM" && second === "M") {
   inp2.value = val / 0.001 ;
    } else if (first === "KM" && second === "CM") {
   inp2.value = val / 0.001 * 100 ;
    } else if (first === "KM" && second === "MM") {
   inp2.value = val / 0.001 * 1000 ;
    }else if (first === "KM" && second === "IN") {
   inp2.value = val / 0.001 * 39.3701 ;
    } else if (first === "KM" && second === "FT") {
   inp2.value = val / 0.001 * 3.28084 ;
    } else if (first === "KM" && second === "YD") {
   inp2.value = val / 0.001 * 1.09361 ;
    } else if (first === "KM" && second === "MI") {
   inp2.value = val / 0.001 * 0.000621 ;
    }else if (first === "KM" && second === "LY") {
   inp2.value = val / 0.001 * 0.0000000000000001057 ;
    }


    else if (first === "IN" && second === "M") {
   inp2.value = val / 39.3701 ;
    } else if (first === "IN" && second === "CM") {
   inp2.value = val / 39.3701 * 100 ;
    } else if (first === "IN" && second === "MM") {
   inp2.value = val / 39.3701 * 1000 ;
    }else if (first === "IN" && second === "KM") {
   inp2.value = val / 39.3701 * 0.001 ;
    } else if (first === "IN" && second === "FT") {
   inp2.value = val / 39.3701 * 3.28084 ;
    } else if (first === "IN" && second === "YD") {
   inp2.value = val / 39.3701 * 1.09361 ;
    } else if (first === "IN" && second === "MI") {
   inp2.value = val / 39.3701 * 0.000621 ;
    }else if (first === "IN" && second === "LY") {
   inp2.value = val / 39.3701 * 0.0000000000000001057 ;
    }


    else if (first === "FT" && second === "M") {
   inp2.value = val / 3.28084 ;
    } else if (first === "FT" && second === "CM") {
   inp2.value = val / 3.28084 * 100 ;
    } else if (first === "FT" && second === "MM") {
   inp2.value = val / 3.28084 * 1000 ;
    }else if (first === "FT" && second === "KM") {
   inp2.value = val / 3.28084 * 0.001 ;
    } else if (first === "FT" && second === "IN") {
   inp2.value = val / 3.28084 * 39.3701 ;
    } else if (first === "FT" && second === "YD") {
   inp2.value = val / 3.28084 * 1.09361 ;
    } else if (first === "FT" && second === "MI") {
   inp2.value = val / 3.28084 * 0.000621 ;
    }else if (first === "FT" && second === "LY") {
   inp2.value = val / 3.28084 * 0.0000000000000001057 ;
    }


    else if (first === "YD" && second === "M") {
   inp2.value = val / 1.09361 ;
    } else if (first === "YD" && second === "CM") {
   inp2.value = val / 1.09361 * 100 ;
    } else if (first === "YD" && second === "MM") {
   inp2.value = val / 1.09361 * 1000 ;
    }else if (first === "YD" && second === "KM") {
   inp2.value = val / 1.09361 * 0.001 ;
    } else if (first === "YD" && second === "IN") {
   inp2.value = val / 1.09361 * 39.3701 ;
    } else if (first === "YD" && second === "FT") {
   inp2.value = val / 1.09361 * 3.28084 ;
    } else if (first === "YD" && second === "MI") {
   inp2.value = val / 1.09361 * 0.000621 ;
    }else if (first === "YD" && second === "LY") {
   inp2.value = val / 1.09361 * 0.0000000000000001057 ;
    }


    else if (first === "MI" && second === "M") {
   inp2.value = val / 0.000621 ;
    } else if (first === "MI" && second === "CM") {
   inp2.value = val / 0.000621 * 100 ;
    } else if (first === "MI" && second === "MM") {
   inp2.value = val / 0.000621 * 1000 ;
    }else if (first === "MI" && second === "KM") {
   inp2.value = val / 0.000621 * 0.001 ;
    } else if (first === "MI" && second === "IN") {
   inp2.value = val / 0.000621 * 39.3701 ;
    } else if (first === "MI" && second === "FT") {
   inp2.value = val / 0.000621 * 3.28084 ;
    } else if (first === "MI" && second === "YD") {
   inp2.value = val / 0.000621 * 1.09361 ;
    }else if (first === "MI" && second === "LY") {
   inp2.value = val / 0.000621 * 0.0000000000000001057 ;
    }


     else if (first === "LY" && second === "M") {
   inp2.value = val / 0.0000000000000001057 ;
    } else if (first === "LY" && second === "CM") {
   inp2.value = val / 0.0000000000000001057 * 100 ;
    } else if (first === "LY" && second === "MM") {
   inp2.value = val / 0.0000000000000001057 * 1000 ;
    }else if (first === "LY" && second === "KM") {
   inp2.value = val / 0.0000000000000001057 * 0.001 ;
    } else if (first === "LY" && second === "IN") {
   inp2.value = val / 0.0000000000000001057 * 39.3701 ;
    } else if (first === "LY" && second === "FT") {
   inp2.value = val / 0.0000000000000001057 * 3.28084 ;
    } else if (first === "LY" && second === "YD") {
   inp2.value = val / 0.0000000000000001057 * 1.09361 ;
    }else if (first === "LY" && second === "MI") {
   inp2.value = val / 0.0000000000000001057 * 0.000621 ;
    }











    else if (first === "KG" && second === "G") {
   inp2.value = val *  1000;
    } else if (first === "KG" && second === "MG") {
   inp2.value = val *  1000000;
    } else if (first === "KG" && second === "T") {
   inp2.value = val *  0.001;
    }else if (first === "KG" && second === "OZ") {
   inp2.value = val *  35.274;
    } else if (first === "KG" && second === "LB") {
   inp2.value = val *  2.20462;
    } else if (first === "KG" && second === "ST") {
   inp2.value = val *  0.15747;
    } 


    else if (first === "G" && second === "KG") {
   inp2.value = val / 1000;
    } else if (first === "G" && second === "MG") {
   inp2.value = val / 1000 *  1000000;
    } else if (first === "G" && second === "T") {
   inp2.value = val / 1000 *  0.001;
    }else if (first === "G" && second === "OZ") {
   inp2.value = val / 1000 *  35.274;
    } else if (first === "G" && second === "LB") {
   inp2.value = val / 1000 *  2.20462;
    } else if (first === "G" && second === "ST") {
   inp2.value = val / 1000 *  0.15747;
    }  


    
    else if (first === "MG" && second === "KG") {
   inp2.value = val / 1000000;
    } else if (first === "MG" && second === "G") {
   inp2.value = val / 1000000 *  1000;
    } else if (first === "MG" && second === "T") {
   inp2.value = val / 1000000 *  0.001;
    }else if (first === "MG" && second === "OZ") {
   inp2.value = val / 1000000 *  35.274;
    } else if (first === "MG" && second === "LB") {
   inp2.value = val / 1000000 *  2.20462;
    } else if (first === "MG" && second === "ST") {
   inp2.value = val / 1000000 *  0.15747;
    }  


     else if (first === "T" && second === "KG") {
   inp2.value = val / 0.001;
    } else if (first === "T" && second === "G") {
   inp2.value = val / 0.001 *  1000;
    } else if (first === "T" && second === "MG") {
   inp2.value = val / 0.001 *  1000000;
    }else if (first === "T" && second === "OZ") {
   inp2.value = val / 0.001 *  35.274;
    } else if (first === "T" && second === "LB") {
   inp2.value = val / 0.001 *  2.20462;
    } else if (first === "T" && second === "ST") {
   inp2.value = val / 0.001 *  0.15747;
    }  


    else if (first === "OZ" && second === "KG") {
   inp2.value = val / 35.274;
    } else if (first === "OZ" && second === "G") {
   inp2.value = val / 35.274 *  1000;
    } else if (first === "OZ" && second === "MG") {
   inp2.value = val / 35.274 *  1000000;
    }else if (first === "OZ" && second === "T") {
   inp2.value = val / 35.274 *  0.001;
    } else if (first === "OZ" && second === "LB") {
   inp2.value = val / 35.274 *  2.20462;
    } else if (first === "OZ" && second === "ST") {
   inp2.value = val / 35.274 *  0.15747;
    } 


    else if (first === "LB" && second === "KG") {
   inp2.value = val / 2.20462;
    } else if (first === "LB" && second === "G") {
   inp2.value = val / 2.20462 *  1000;
    } else if (first === "LB" && second === "MG") {
   inp2.value = val / 2.20462 *  1000000;
    }else if (first === "LB" && second === "T") {
   inp2.value = val / 2.20462 *  0.001;
    } else if (first === "LB" && second === "OZ") {
   inp2.value = val / 2.20462 *   35.274 ;
    } else if (first === "LB" && second === "ST") {
   inp2.value = val / 2.20462 *  0.15747;
    } 


    else if (first === "ST" && second === "KG") {
   inp2.value = val / 0.15747;
    } else if (first === "ST" && second === "G") {
   inp2.value = val / 0.15747 *  1000;
    } else if (first === "ST" && second === "MG") {
   inp2.value = val / 0.15747 *  1000000;
    }else if (first === "ST" && second === "T") {
   inp2.value = val / 0.15747 *  0.001;
    } else if (first === "ST" && second === "OZ") {
   inp2.value = val / 0.15747 *   35.274 ;
    } else if (first === "ST" && second === "LB") {
   inp2.value = val / 0.15747 *  2.20462 ;
    } 














    else if (first === "W" && second === "KW") {
   inp2.value = val * 0.001;
    } else if (first === "W" && second === "MW") {
   inp2.value = val *  0.000001;
    } else if (first === "W" && second === "HP") {
   inp2.value = val *  0.00136;
    }else if (first === "W" && second === "KK") {
   inp2.value = val * 0.8598 ;
    } else if (first === "W" && second === "ERG") {
   inp2.value = val *  10000000 ;
    } 


    else if (first === "KW" && second === "W") {
   inp2.value = val / 0.001;
    } else if (first === "KW" && second === "MW") {
   inp2.value = val / 0.001 *  0.000001;
    } else if (first === "KW" && second === "HP") {
   inp2.value = val / 0.001 *  0.00136;
    }else if (first === "KW" && second === "KK") {
   inp2.value = val / 0.001 * 0.8598 ;
    } else if (first === "KW" && second === "ERG") {
   inp2.value = val / 0.001 *  10000000 ;
    } 


    else if (first === "MW" && second === "W") {
   inp2.value = val / 0.000001;
    } else if (first === "MW" && second === "KW") {
   inp2.value = val / 0.000001 *  0.001;
    } else if (first === "MW" && second === "HP") {
   inp2.value = val / 0.000001 *  0.00136;
    }else if (first === "MW" && second === "KK") {
   inp2.value = val / 0.000001 * 0.8598 ;
    } else if (first === "MW" && second === "ERG") {
   inp2.value = val / 0.000001 *  10000000 ;
    } 


    else if (first === "HP" && second === "W") {
   inp2.value = val / 0.00136;
    } else if (first === "HP" && second === "KW") {
   inp2.value = val / 0.00136 *  0.001;
    } else if (first === "HP" && second === "MW") {
   inp2.value = val / 0.00136 *  0.000001;
    }else if (first === "HP" && second === "KK") {
   inp2.value = val / 0.00136 * 0.8598 ;
    } else if (first === "HP" && second === "ERG") {
   inp2.value = val / 0.00136 *  10000000 ;
    } 


    else if (first === "KK" && second === "W") {
   inp2.value = val / 0.8598;
    } else if (first === "KK" && second === "KW") {
   inp2.value = val / 0.8598 *  0.001;
    } else if (first === "KK" && second === "MW") {
   inp2.value = val / 0.8598 *  0.000001;
    }else if (first === "KK" && second === "HP") {
   inp2.value = val / 0.8598 * 0.00136 ;
    } else if (first === "KK" && second === "ERG") {
   inp2.value = val / 0.8598 *  10000000 ;
    } 


    else if (first === "ERG" && second === "W") {
   inp2.value = val / 10000000;
    } else if (first === "ERG" && second === "KW") {
   inp2.value = val / 10000000 *  0.001;
    } else if (first === "ERG" && second === "MW") {
   inp2.value = val / 10000000 *  0.000001;
    }else if (first === "ERG" && second === "HP") {
   inp2.value = val / 10000000 * 0.00136 ;
    } else if (first === "ERG" && second === "KK") {
   inp2.value = val / 10000000 *  0.8598 ;
    } 














    else if (first === "C" && second === "F") {
   inp2.value = (val * 9 / 5) + 32;
    } else if (first === "C" && second === "K") {
   inp2.value = Number(val) + 273.15 ;
    } else if (first === "C" && second === "R") {
   inp2.value = (Number(val) + 273.15) * 9 / 5 ;
    }


    else if (first === "F" && second === "C") {
   inp2.value = (val - 32) / 9 * 5 ; 
    } else if (first === "F" && second === "K") {
   inp2.value = (Number(val) - 32) / 9 * 5 + 273.15 ;
    } else if (first === "F" && second === "R") {
   inp2.value = ((Number(val) - 32) / 9 * 5 + 273.15) * 9 / 5 ;
    }


    else if (first === "K" && second === "C") {
   inp2.value = Number(val) - 273.15 ; 
    } else if (first === "K" && second === "F") {
   inp2.value = ((Number(val) - 273.15) * 9 / 5) + 32 ;
    } else if (first === "K" && second === "R") {
   inp2.value = ((Number(val) - 273.15) + 273.15) * 9 / 5 ;
    }


    else if (first === "R" && second === "C") {
   inp2.value = (Number(val) / 9 * 5) - 273.15 ; 
    } else if (first === "R" && second === "F") {
   inp2.value = (((Number(val) / 9 * 5) - 273.15) * 9 / 5) + 32 ;
    } else if (first === "R" && second === "K") {
   inp2.value = ((Number(val) / 9 * 5) - 273.15) + 273.15;
    }














    else if (first === "D" && second === "MS") {
   inp2.value = val * 86400000;
    } else if (first === "D" && second === "S") {
   inp2.value = val  * 86400 ;
    } else if (first === "D" && second === "MIN") {
   inp2.value = val  *  1440;
    }else if (first === "D" && second === "H") {
   inp2.value = val  *  24;
    } else if (first === "D" && second === "WK") {
   inp2.value = val  *   0.142857 ;
    } else if (first === "D" && second === "MO") {
   inp2.value = val  *  0.0328767 ;
    } else if (first === "D" && second === "YR") {
   inp2.value = val  *  0.0027379;
    } else if (first === "D" && second === "CEN") {
   inp2.value = val  *   0.000027379 ;
    } else if (first === "D" && second === "MIL") {
   inp2.value = val  *  0.0000027379 ;
    } 


    else if (first === "MS" && second === "D") {
   inp2.value = val / 86400000 ;
    } else if (first === "MS" && second === "S") {
   inp2.value = val / 86400000  * 86400 ;
    } else if (first === "MS" && second === "MIN") {
   inp2.value = val / 86400000  *  1440;
    }else if (first === "MS" && second === "H") {
   inp2.value = val / 86400000  *  24;
    } else if (first === "MS" && second === "WK") {
   inp2.value = val / 86400000  *   0.142857 ;
    } else if (first === "MS" && second === "MO") {
   inp2.value = val / 86400000  *  0.0328767 ;
    } else if (first === "MS" && second === "YR") {
   inp2.value = val / 86400000  *  0.0027379;
    } else if (first === "MS" && second === "CEN") {
   inp2.value = val / 86400000  *   0.000027379 ;
    } else if (first === "MS" && second === "MIL") {
   inp2.value = val / 86400000  *  0.0000027379 ;
    } 


    else if (first === "S" && second === "D") {
   inp2.value = val / 86400 ;
    } else if (first === "S" && second === "MS") {
   inp2.value = val / 86400  * 86400000 ;
    } else if (first === "S" && second === "MIN") {
   inp2.value = val / 86400  *  1440;
    }else if (first === "S" && second === "H") {
   inp2.value = val / 86400  *  24;
    } else if (first === "S" && second === "WK") {
   inp2.value = val / 86400  *   0.142857 ;
    } else if (first === "S" && second === "MO") {
   inp2.value = val / 86400  *  0.0328767 ;
    } else if (first === "S" && second === "YR") {
   inp2.value = val / 86400  *  0.0027379;
    } else if (first === "S" && second === "CEN") {
   inp2.value = val / 86400  *   0.000027379 ;
    } else if (first === "S" && second === "MIL") {
   inp2.value = val / 86400  *  0.0000027379 ;
    } 


    else if (first === "MIN" && second === "D") {
   inp2.value = val / 1440 ;
    } else if (first === "MIN" && second === "MS") {
   inp2.value = val / 1440  * 86400000 ;
    } else if (first === "MIN" && second === "S") {
   inp2.value = val / 1440  *  86400;
    }else if (first === "MIN" && second === "H") {
   inp2.value = val / 1440  *  24;
    } else if (first === "MIN" && second === "WK") {
   inp2.value = val / 1440  *   0.142857 ;
    } else if (first === "MIN" && second === "MO") {
   inp2.value = val / 1440  *  0.0328767 ;
    } else if (first === "MIN" && second === "YR") {
   inp2.value = val / 1440  *  0.0027379;
    } else if (first === "MIN" && second === "CEN") {
   inp2.value = val / 1440  *   0.000027379 ;
    } else if (first === "MIN" && second === "MIL") {
   inp2.value = val / 1440  *  0.0000027379 ;
    } 


    else if (first === "H" && second === "D") {
   inp2.value = val / 24 ;
    } else if (first === "H" && second === "MS") {
   inp2.value = val / 24  * 86400000 ;
    } else if (first === "H" && second === "S") {
   inp2.value = val / 24  *  86400;
    }else if (first === "H" && second === "MIN") {
   inp2.value = val / 24  *  1400;
    } else if (first === "H" && second === "WK") {
   inp2.value = val / 24  *   0.142857 ;
    } else if (first === "H" && second === "MO") {
   inp2.value = val / 24  *  0.0328767 ;
    } else if (first === "H" && second === "YR") {
   inp2.value = val / 24  *  0.0027379;
    } else if (first === "H" && second === "CEN") {
   inp2.value = val / 24  *   0.000027379 ;
    } else if (first === "H" && second === "MIL") {
   inp2.value = val / 24  *  0.0000027379 ;
    } 


    else if (first === "WK" && second === "D") {
   inp2.value = val / 0.142857 ;
    } else if (first === "WK" && second === "MS") {
   inp2.value = val / 0.142857  * 86400000 ;
    } else if (first === "WK" && second === "S") {
   inp2.value = val / 0.142857  *  86400;
    }else if (first === "WK" && second === "MIN") {
   inp2.value = val / 0.142857  *  1400;
    } else if (first === "WK" && second === "H") {
   inp2.value = val / 0.142857  *   24 ;
    } else if (first === "WK" && second === "MO") {
   inp2.value = val / 0.142857  *  0.0328767 ;
    } else if (first === "WK" && second === "YR") {
   inp2.value = val / 0.142857  *  0.0027379;
    } else if (first === "WK" && second === "CEN") {
   inp2.value = val / 0.142857  *   0.000027379 ;
    } else if (first === "WK" && second === "MIL") {
   inp2.value = val / 0.142857  *  0.0000027379 ;
    } 


     else if (first === "MO" && second === "D") {
   inp2.value = val / 0.0328767 ;
    } else if (first === "MO" && second === "MS") {
   inp2.value = val / 0.0328767  * 86400000 ;
    } else if (first === "MO" && second === "S") {
   inp2.value = val / 0.0328767  *  86400;
    }else if (first === "MO" && second === "MIN") {
   inp2.value = val / 0.0328767  *  1400;
    } else if (first === "MO" && second === "H") {
   inp2.value = val / 0.0328767  *   24 ;
    } else if (first === "MO" && second === "WK") {
   inp2.value = val / 0.0328767  *  0.142857 ;
    } else if (first === "MO" && second === "YR") {
   inp2.value = val / 0.0328767  *  0.0027379;
    } else if (first === "MO" && second === "CEN") {
   inp2.value = val / 0.0328767  *   0.000027379 ;
    } else if (first === "MO" && second === "MIL") {
   inp2.value = val / 0.0328767  *  0.0000027379 ;
    } 



else if (first === "YR" && second === "D") {
    inp2.value = val / 0.0027379 ;
} else if (first === "YR" && second === "MS") {
    inp2.value = val / 0.0027379  * 86400000 ;
} else if (first === "YR" && second === "S") {
        inp2.value = val / 0.0027379  *  86400;
    }else if (first === "YR" && second === "MIN") {
   inp2.value = val / 0.0027379  *  1400;
    } else if (first === "YR" && second === "H") {
   inp2.value = val / 0.0027379  *   24 ;
    } else if (first === "YR" && second === "WK") {
   inp2.value = val / 0.0027379  *  0.142857 ;
    } else if (first === "YR" && second === "MO") {
   inp2.value = val / 0.0027379  *  0.0328767;
    } else if (first === "YR" && second === "CEN") {
   inp2.value = val / 0.0027379  *   0.000027379 ;
    } else if (first === "YR" && second === "MIL") {
   inp2.value = val / 0.0027379  *  0.0000027379 ;
    } 


    else if (first === "CEN" && second === "D") {
    inp2.value = val / 0.000027379 ;
} else if (first === "CEN" && second === "MS") {
    inp2.value = val / 0.000027379  * 86400000 ;
} else if (first === "CEN" && second === "S") {
        inp2.value = val / 0.000027379  *  86400;
    }else if (first === "CEN" && second === "MIN") {
   inp2.value = val / 0.000027379  *  1400;
    } else if (first === "CEN" && second === "H") {
   inp2.value = val / 0.000027379  *   24 ;
    } else if (first === "CEN" && second === "WK") {
   inp2.value = val / 0.000027379  *  0.142857 ;
    } else if (first === "CEN" && second === "MO") {
   inp2.value = val / 0.000027379  *  0.0328767;
    } else if (first === "CEN" && second === "YR") {
   inp2.value = val / 0.000027379  *   0.0027379 ;
    } else if (first === "CEN" && second === "MIL") {
   inp2.value = val / 0.000027379  *  0.0000027379 ;
    } 


     else if (first === "MIL" && second === "D") {
    inp2.value = val / 0.0000027379 ;
} else if (first === "MIL" && second === "MS") {
    inp2.value = val / 0.0000027379  * 86400000 ;
} else if (first === "MIL" && second === "S") {
        inp2.value = val / 0.0000027379  *  86400;
    }else if (first === "MIL" && second === "MIN") {
   inp2.value = val / 0.0000027379  *  1400;
    } else if (first === "MIL" && second === "H") {
   inp2.value = val / 0.0000027379  *   24 ;
    } else if (first === "MIL" && second === "WK") {
   inp2.value = val / 0.0000027379  *  0.142857 ;
    } else if (first === "MIL" && second === "MO") {
   inp2.value = val / 0.0000027379  *  0.0328767;
    } else if (first === "MIL" && second === "YR") {
   inp2.value = val / 0.0000027379  *   0.0027379 ;
    } else if (first === "MIL" && second === "CEN") {
   inp2.value = val / 0.0000027379  *  0.000027379 ;
    } 


















    else if (first === "L" && second === "ML") {
   inp2.value = val * 1000;
    } else if (first === "L" && second === "CUM") {
   inp2.value = val  * 0.001 ;
    } else if (first === "L" && second === "GAL") {
   inp2.value = val  *  0.264172;
    }else if (first === "L" && second === "GT") {
   inp2.value = val  *  1.05669;
    } else if (first === "L" && second === "FLOZ") {
   inp2.value = val  *   33.814 ;
    } else if (first === "L" && second === "TSP") {
   inp2.value = val  *  61.024 ;
    } else if (first === "L" && second === "TBSP") {
   inp2.value = val  *  33.814;
    } 


    else if (first === "ML" && second === "L") {
   inp2.value = val / 1000;
    } else if (first === "ML" && second === "CUM") {
   inp2.value = val / 1000 * 0.001 ;
    } else if (first === "ML" && second === "GAL") {
   inp2.value = val / 1000 *  0.264172;
    }else if (first === "ML" && second === "GT") {
   inp2.value = val / 1000 *  1.05669;
    } else if (first === "ML" && second === "FLOZ") {
   inp2.value = val / 1000 *   33.814 ;
    } else if (first === "ML" && second === "TSP") {
   inp2.value = val / 1000 *  61.024 ;
    } else if (first === "ML" && second === "TBSP") {
   inp2.value = val / 1000 *  33.814;
    } 


    else if (first === "CUM" && second === "L") {
   inp2.value = val / 0.001;
    } else if (first === "CUM" && second === "ML") {
   inp2.value = val / 0.001 * 1000 ;
    } else if (first === "CUM" && second === "GAL") {
   inp2.value = val / 0.001 *  0.264172;
    }else if (first === "CUM" && second === "GT") {
   inp2.value = val / 0.001 *  1.05669;
    } else if (first === "CUM" && second === "FLOZ") {
   inp2.value = val / 0.001 *   33.814 ;
    } else if (first === "CUM" && second === "TSP") {
   inp2.value = val / 0.001 *  61.024 ;
    } else if (first === "CUM" && second === "TBSP") {
   inp2.value = val / 0.001 *  33.814;
    } 


    else if (first === "GAL" && second === "L") {
   inp2.value = val / 0.264172;
    } else if (first === "GAL" && second === "ML") {
   inp2.value = val / 0.264172 * 1000 ;
    } else if (first === "GAL" && second === "CUM") {
   inp2.value = val / 0.264172 *  0.001;
    }else if (first === "GAL" && second === "GT") {
   inp2.value = val / 0.264172 *  1.05669;
    } else if (first === "GAL" && second === "FLOZ") {
   inp2.value = val / 0.264172 *   33.814 ;
    } else if (first === "GAL" && second === "TSP") {
   inp2.value = val / 0.264172 *  61.024 ;
    } else if (first === "GAL" && second === "TBSP") {
   inp2.value = val / 0.264172 *  33.814;
    } 


    else if (first === "GT" && second === "L") {
   inp2.value = val / 1.05669;
    } else if (first === "GT" && second === "ML") {
   inp2.value = val / 1.05669 * 1000 ;
    } else if (first === "GT" && second === "CUM") {
   inp2.value = val / 1.05669 *  0.001;
    }else if (first === "GT" && second === "GAL") {
   inp2.value = val / 1.05669 * 0.264172  ;
    } else if (first === "GT" && second === "FLOZ") {
   inp2.value = val / 1.05669 *   33.814 ;
    } else if (first === "GT" && second === "TSP") {
   inp2.value = val / 1.05669 *  61.024 ;
    } else if (first === "GT" && second === "TBSP") {
   inp2.value = val / 1.05669 *  33.814;
    } 


     else if (first === "FLOZ" && second === "L") {
   inp2.value = val / 33.814;
    } else if (first === "FLOZ" && second === "ML") {
   inp2.value = val / 33.814 * 1000 ;
    } else if (first === "FLOZ" && second === "CUM") {
   inp2.value = val / 33.814 *  0.001;
    }else if (first === "FLOZ" && second === "GAL") {
   inp2.value = val / 33.814 * 0.264172  ;
    } else if (first === "FLOZ" && second === "GT") {
   inp2.value = val / 33.814 *   1.05669 ;
    } else if (first === "FLOZ" && second === "TSP") {
   inp2.value = val / 33.814 *  61.024 ;
    } else if (first === "FLOZ" && second === "TBSP") {
   inp2.value = val / 33.814 *  33.814;
    } 


    else if (first === "TSP" && second === "L") {
   inp2.value = val / 61.024;
    } else if (first === "TSP" && second === "ML") {
   inp2.value = val / 61.024 * 1000 ;
    } else if (first === "TSP" && second === "CUM") {
   inp2.value = val / 61.024 *  0.001;
    }else if (first === "TSP" && second === "GAL") {
   inp2.value = val / 61.024 * 0.264172  ;
    } else if (first === "TSP" && second === "GT") {
   inp2.value = val / 61.024 *   1.05669 ;
    } else if (first === "TSP" && second === "FLOZ") {
   inp2.value = val / 61.024 *  33.814 ;
    } else if (first === "TSP" && second === "TBSP") {
   inp2.value = val / 61.024 *  33.814;
    } 



     else if (first === "TBSP" && second === "L") {
   inp2.value = val / 33.814;
    } else if (first === "TBSP" && second === "ML") {
   inp2.value = val / 33.814 * 1000 ;
    } else if (first === "TBSP" && second === "CUM") {
   inp2.value = val / 33.814 *  0.001;
    }else if (first === "TBSP" && second === "GAL") {
   inp2.value = val / 33.814 * 0.264172  ;
    } else if (first === "TBSP" && second === "GT") {
   inp2.value = val / 33.814 *   1.05669 ;
    } else if (first === "TBSP" && second === "FLOZ") {
   inp2.value = val / 33.814 *  33.814 ;
    } else if (first === "TBSP" && second === "TSP") {
   inp2.value = val / 33.814 *  61.024;
    } 


    











}
inp1.addEventListener("keyup", convert);
sel1.addEventListener("change", convert);
sel2.addEventListener("change", convert);

