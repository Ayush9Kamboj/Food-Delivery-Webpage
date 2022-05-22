// function choleBhatureAdd1(){
//     localStorage.setItem('choleBhature1', '1');
// }

// function choleBhatureDlt1(){
//     localStorage.setItem('choleBhature1', '0');
// }

// var choleBhature1_1 =  localStorage.getItem('choleBhature1');
// if(choleBhature1_1 == '1'){
//     const food1 = document.createElement("div");
//     food1.innerHTML = "This food is added succesfully";
//     document.getElementById('basket').appendChild(food1);
// }
// else if(choleBhature1_1 == '0'){
    
// }




// function choleBhatureAdd1(){
//     localStorage.setItem('choleBhature1', '1');
// }

// function choleBhatureDlt1(){
//     localStorage.setItem('choleBhature1', '0');
// }

// var choleBhature1_1 =  localStorage.getItem('choleBhature1');
// if(choleBhature1_1 == '1'){
    // const food1 = document.createElement("div");
    // food1.innerHTML = "This food is added succesfully";
    // document.getElementById('basket').appendChild(food1);
// }
// else if(choleBhature1_1 == '0'){
    
// }

// if(document.getElementById('basket').innerHTML == '' || document.getElementById('basket').innerHTML == '<h1 class="text-center" style="font-size: 3rem;">Your Baske Is empty</h1>'){
//     document.getElementById('basket').innerHTM = '<h1 class="text-center" style="font-size: 3rem;">Your Baske Is empty</h1>';
// }


// Chole bhature 1
var choleeee1 = 0;
var choleeee2 = 0;
var choleeee3 = 0;
var choleeee4 = 0;
var paranthe1 = 0;
var paranthe2 = 0;
var paranthe3 = 0;
var paranthe4 = 0;
var dalMakhni1 = 0;
var dalMakhni2 = 0;
var dalMakhni3 = 0;
var dalMakhni4 = 0;
var naan1 = 0;
var naan2 = 0;
var naan3 = 0;
var naan4 = 0;
var roganJosh1 = 0;
var roganJosh2 = 0;
var roganJosh3 = 0;
var roganJosh4 = 0;
var biryani1 = 0;
var biryani2 = 0;
var biryani3 = 0;
var biryani4 = 0;
var tandooriChicken1 = 0;
var tandooriChicken2 = 0;
var tandooriChicken3 = 0;
var tandooriChicken4 = 0;
var muttonKorma1 = 0;
var muttonKorma2 = 0;
var muttonKorma3 = 0;
var muttonKorma4 = 0;
var risoto1 = 0;
var risoto2 = 0;
var pizza1 = 0;
var pizza2 = 0;
var pesto1 = 0;
var pesto2 = 0;
var spagiti1 = 0;
var spagiti2 = 0;
var tofu1 = 0;
var tofu2 = 0;
var manchurian1 = 0;
var manchurian2 = 0;
var masalaDosa1 = 0;
var masalaDosa2 = 0;
var idli1 = 0;
var idli2 = 0;
var fish1 = 0;
var fish2 = 0;
var chetti1 = 0;
var chetti2 = 0;
var food1;
var food2;
var food3;
var food4;

function choleBhatureAdd1(){
    choleeee1 = localStorage.getItem('noOfCholeBhature1');
    choleeee1++;
    localStorage.setItem('noOfCholeBhature1', choleeee1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function choleBhatureAdd2(){
    choleeee2 = localStorage.getItem('noOfCholeBhature2');
    choleeee2++;
    localStorage.setItem('noOfCholeBhature2', choleeee2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function choleBhatureAdd3(){
    choleeee3 = localStorage.getItem('noOfCholeBhature3');
    choleeee3++;
    localStorage.setItem('noOfCholeBhature3', choleeee3);

    let x = document.getElementById('ab3');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab3').innerHTML = 'Add to Basket';
    }, 2000)
}
function choleBhatureAdd4(){
    choleeee4 = localStorage.getItem('noOfCholeBhature4');
    choleeee4++;
    localStorage.setItem('noOfCholeBhature4', choleeee4);


    let x = document.getElementById('ab4');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab4').innerHTML = 'Add to Basket';
    }, 2000)
}
function parantheAdd1(){
    paranthe1 = localStorage.getItem('noOfParanthe1');
    paranthe1++;
    localStorage.setItem('noOfParanthe1', paranthe1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function parantheAdd2(){
    paranthe2 = localStorage.getItem('noOfParanthe2');
    paranthe2++;
    localStorage.setItem('noOfParanthe2', paranthe2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function parantheAdd3(){
    paranthe3 = localStorage.getItem('noOfParanthe3');
    paranthe3++;
    localStorage.setItem('noOfParanthe3', paranthe3);

    let x = document.getElementById('ab3');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab3').innerHTML = 'Add to Basket';
    }, 2000)
}
function parantheAdd4(){
    paranthe4 = localStorage.getItem('noOfParanthe4');
    paranthe4++;
    localStorage.setItem('noOfParanthe4', paranthe4);


    let x = document.getElementById('ab4');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab4').innerHTML = 'Add to Basket';
    }, 2000)
}
function dalMakhniAdd1(){
    dalMakhni1 = localStorage.getItem('noOfDalMakhni1');
    dalMakhni1++;
    localStorage.setItem('noOfDalMakhni1', dalMakhni1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function dalMakhniAdd2(){
    dalMakhni2 = localStorage.getItem('noOfDalMakhni2');
    dalMakhni2++;
    localStorage.setItem('noOfDalMakhni2', dalMakhni2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function dalMakhniAdd3(){
    dalMakhni3 = localStorage.getItem('noOfDalMakhni3');
    dalMakhni3++;
    localStorage.setItem('noOfDalMakhni3', dalMakhni3);

    let x = document.getElementById('ab3');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab3').innerHTML = 'Add to Basket';
    }, 2000)
}
function dalMakhniAdd4(){
    dalMakhni4 = localStorage.getItem('noOfDalMakhni4');
    dalMakhni4++;
    localStorage.setItem('noOfDalMakhni4', dalMakhni4);


    let x = document.getElementById('ab4');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab4').innerHTML = 'Add to Basket';
    }, 2000)
}
function naanAdd1(){
    naan1 = localStorage.getItem('noOfNaan1');
    naan1++;
    localStorage.setItem('noOfNaan1', naan1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function naanAdd2(){
    naan2 = localStorage.getItem('noOfNaan2');
    naan2++;
    localStorage.setItem('noOfNaan2', naan2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function naanAdd3(){
    naan3 = localStorage.getItem('noOfNaan3');
    naan3++;
    localStorage.setItem('noOfNaan3', naan3);

    let x = document.getElementById('ab3');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab3').innerHTML = 'Add to Basket';
    }, 2000)
}
function naanAdd4(){
    naan4 = localStorage.getItem('noOfNaan4');
    naan4++;
    localStorage.setItem('noOfNaan4', naan4);


    let x = document.getElementById('ab4');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab4').innerHTML = 'Add to Basket';
    }, 2000)
}
function roganJoshAdd1(){
    roganJosh1 = localStorage.getItem('noOfRoganJosh1');
    roganJosh1++;
    localStorage.setItem('noOfRoganJosh1', roganJosh1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function roganJoshAdd2(){
    roganJosh2 = localStorage.getItem('noOfRoganJosh2');
    roganJosh2++;
    localStorage.setItem('noOfRoganJosh2', roganJosh2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function roganJoshAdd3(){
    roganJosh3 = localStorage.getItem('noOfRoganJosh3');
    roganJosh3++;
    localStorage.setItem('noOfRoganJosh3', roganJosh3);

    let x = document.getElementById('ab3');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab3').innerHTML = 'Add to Basket';
    }, 2000)
}
function roganJoshAdd4(){
    roganJosh4 = localStorage.getItem('noOfRoganJosh4');
    roganJosh4++;
    localStorage.setItem('noOfRoganJosh4', roganJosh4);


    let x = document.getElementById('ab4');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab4').innerHTML = 'Add to Basket';
    }, 2000)
}
function biryaniAdd1(){
    biryani1 = localStorage.getItem('noOfBiryani1');
    biryani1++;
    localStorage.setItem('noOfBiryani1', biryani1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function biryaniAdd2(){
    biryani2 = localStorage.getItem('noOfBiryani2');
    biryani2++;
    localStorage.setItem('noOfBiryani2', biryani2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function biryaniAdd3(){
    biryani3 = localStorage.getItem('noOfBiryani3');
    biryani3++;
    localStorage.setItem('noOfBiryani3', biryani3);

    let x = document.getElementById('ab3');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab3').innerHTML = 'Add to Basket';
    }, 2000)
}
function biryaniAdd4(){
    biryani4 = localStorage.getItem('noOfBiryani4');
    biryani4++;
    localStorage.setItem('noOfBiryani4', biryani4);


    let x = document.getElementById('ab4');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab4').innerHTML = 'Add to Basket';
    }, 2000)
}
function tandooriChickenAdd1(){
    tandooriChicken1 = localStorage.getItem('noOfTandooriChicken1');
    tandooriChicken1++;
    localStorage.setItem('noOfTandooriChicken1', tandooriChicken1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function tandooriChickenAdd2(){
    tandooriChicken2 = localStorage.getItem('noOfTandooriChicken2');
    tandooriChicken2++;
    localStorage.setItem('noOfTandooriChicken2', tandooriChicken2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function tandooriChickenAdd3(){
    tandooriChicken3 = localStorage.getItem('noOfTandooriChicken3');
    tandooriChicken3++;
    localStorage.setItem('noOfTandooriChicken3', tandooriChicken3);

    let x = document.getElementById('ab3');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab3').innerHTML = 'Add to Basket';
    }, 2000)
}
function tandooriChickenAdd4(){
    tandooriChicken4 = localStorage.getItem('noOfTandooriChicken4');
    tandooriChicken4++;
    localStorage.setItem('noOfTandooriChicken4', tandooriChicken4);


    let x = document.getElementById('ab4');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab4').innerHTML = 'Add to Basket';
    }, 2000)
}
function muttonKormaAdd1(){
    muttonKorma1 = localStorage.getItem('noOfMuttonKorma1');
    muttonKorma1++;
    localStorage.setItem('noOfMuttonKorma1', muttonKorma1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function muttonKormaAdd2(){
    muttonKorma2 = localStorage.getItem('noOfMuttonKorma2');
    muttonKorma2++;
    localStorage.setItem('noOfMuttonKorma2', muttonKorma2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function muttonKormaAdd3(){
    muttonKorma3 = localStorage.getItem('noOfMuttonKorma3');
    muttonKorma3++;
    localStorage.setItem('noOfMuttonKorma3', muttonKorma3);

    let x = document.getElementById('ab3');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab3').innerHTML = 'Add to Basket';
    }, 2000)
}
function muttonKormaAdd4(){
    muttonKorma4 = localStorage.getItem('noOfMuttonKorma4');
    muttonKorma4++;
    localStorage.setItem('noOfMuttonKorma4', muttonKorma4);


    let x = document.getElementById('ab4');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab4').innerHTML = 'Add to Basket';
    }, 2000)
}
function risotoAdd1(){
    risoto1 = localStorage.getItem('noOfRisoto1');
    risoto1++;
    localStorage.setItem('noOfRisoto1', risoto1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function risotoAdd2(){
    risoto2 = localStorage.getItem('noOfRisoto2');
    risoto2++;
    localStorage.setItem('noOfRisoto2', risoto2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function pizzaAdd1(){
    pizza1 = localStorage.getItem('noOfPizza1');
    pizza1++;
    localStorage.setItem('noOfPizza1', pizza1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function pizzaAdd2(){
    pizza2 = localStorage.getItem('noOfPizza2');
    pizza2++;
    localStorage.setItem('noOfPizza2', pizza2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function pestoAdd1(){
    pesto1 = localStorage.getItem('noOfPesto1');
    pesto1++;
    localStorage.setItem('noOfPesto1', pesto1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function pestoAdd2(){
    pesto2 = localStorage.getItem('noOfPesto2');
    pesto2++;
    localStorage.setItem('noOfPesto2', pesto2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function spagitiAdd1(){
    spagiti1 = localStorage.getItem('noOfSpagiti1');
    spagiti1++;
    localStorage.setItem('noOfSpagiti1', spagiti1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function spagitiAdd2(){
    spagiti2 = localStorage.getItem('noOfSpagiti2');
    spagiti2++;
    localStorage.setItem('noOfSpagiti2', spagiti2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function tofuAdd1(){
    tofu1 = localStorage.getItem('noOfTofu1');
    tofu1++;
    localStorage.setItem('noOfTofu1', tofu1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function tofuAdd2(){
    tofu2 = localStorage.getItem('noOfTofu2');
    tofu2++;
    localStorage.setItem('noOfTofu2', tofu2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function manchurianAdd1(){
    manchurian1 = localStorage.getItem('noOfManchurian1');
    manchurian1++;
    localStorage.setItem('noOfManchurian1', manchurian1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function manchurianAdd2(){
    manchurian2 = localStorage.getItem('noOfManchurian2');
    manchurian2++;
    localStorage.setItem('noOfManchurian2', manchurian2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function masalaDosaAdd1(){
    masalaDosa1 = localStorage.getItem('noOfMasalaDosa1');
    masalaDosa1++;
    localStorage.setItem('noOfMasalaDosa1', masalaDosa1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function masalaDosaAdd2(){
    masalaDosa2 = localStorage.getItem('noOfMasalaDosa2');
    masalaDosa2++;
    localStorage.setItem('noOfMasalaDosa2', masalaDosa2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function idliAdd1(){
    idli1 = localStorage.getItem('noOfIdli1');
    idli1++;
    localStorage.setItem('noOfIdli1', idli1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function idliAdd2(){
    idli2 = localStorage.getItem('noOfIdli2');
    idli2++;
    localStorage.setItem('noOfIdli2', idli2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function fishAdd1(){
    fish1 = localStorage.getItem('noOfFish1');
    fish1++;
    localStorage.setItem('noOfFish1', fish1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function fishAdd2(){
    fish2 = localStorage.getItem('noOfFish2');
    fish2++;
    localStorage.setItem('noOfFish2', fish2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}
function chettiAdd1(){
    chetti1 = localStorage.getItem('noOfChetti1');
    chetti1++;
    localStorage.setItem('noOfChetti1', chetti1);

    let x = document.getElementById('ab1');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab1').innerHTML = 'Add to Basket';
    }, 2000)
    totalMoney = totalMoney + 120;
}
function chettiAdd2(){
    chetti2 = localStorage.getItem('noOfChetti2');
    chetti2++;
    localStorage.setItem('noOfChetti2', chetti2);

    let x = document.getElementById('ab2');
    x.innerHTML = 'Added';
    window.setTimeout(function(){
        document.getElementById('ab2').innerHTML = 'Add to Basket';
    }, 2000)
}






function choleBhatureDlt1(){
    choleeee1 = localStorage.getItem('noOfCholeBhature1');
    choleeee1--;
    localStorage.setItem('noOfCholeBhature1', choleeee1);
}
function choleBhatureDlt2(){
    choleeee2 = localStorage.getItem('noOfCholeBhature2');
    choleeee2--;
    localStorage.setItem('noOfCholeBhature2', choleeee2);
}
function choleBhatureDlt3(){
    choleeee3 = localStorage.getItem('noOfCholeBhature3');
    choleeee3--;
    localStorage.setItem('noOfCholeBhature3', choleeee3);
}
function choleBhatureDlt4(){
    choleeee4 = localStorage.getItem('noOfCholeBhature4');
    choleeee4--;
    localStorage.setItem('noOfCholeBhature4', choleeee4);
}
function parantheDlt1(){
    paranthe1 = localStorage.getItem('noOfParanthe1');
    paranthe1--;
    localStorage.setItem('noOfParanthe1', paranthe1);
}
function parantheDlt2(){
    paranthe2 = localStorage.getItem('noOfParanthe2');
    paranthe2--;
    localStorage.setItem('noOfParanthe2', paranthe2);
}
function parantheDlt3(){
    paranthe3 = localStorage.getItem('noOfParanthe3');
    paranthe3--;
    localStorage.setItem('noOfParanthe3', paranthe3);
}
function parantheDlt4(){
    paranthe4 = localStorage.getItem('noOfParanthe4');
    paranthe4--;
    localStorage.setItem('noOfParanthe4', paranthe4);
}
function dalMakhniDlt1(){
    dalMakhni1 = localStorage.getItem('noOfDalMakhni1');
    dalMakhni1--;
    localStorage.setItem('noOfDalMakhni1', dalMakhni1);
}
function dalMakhniDlt2(){
    dalMakhni2 = localStorage.getItem('noOfDalMakhni2');
    dalMakhni2--;
    localStorage.setItem('noOfDalMakhni2', dalMakhni2);
}
function dalMakhniDlt3(){
    dalMakhni3 = localStorage.getItem('noOfDalMakhni3');
    dalMakhni3--;
    localStorage.setItem('noOfDalMakhni3', dalMakhni3);
}
function dalMakhniDlt4(){
    dalMakhni4 = localStorage.getItem('noOfDalMakhni4');
    dalMakhni4--;
    localStorage.setItem('noOfDalMakhni4', dalMakhni4);
}
function naanDlt1(){
    naan1 = localStorage.getItem('noOfNaan1');
    naan1--;
    localStorage.setItem('noOfNaan1', naan1);
}
function naanDlt2(){
    naan2 = localStorage.getItem('noOfNaan2');
    naan2--;
    localStorage.setItem('noOfNaan2', naan2);
}
function naanDlt3(){
    naan3 = localStorage.getItem('noOfNaan3');
    naan3--;
    localStorage.setItem('noOfNaan3', naan3);
}
function naanDlt4(){
    naan4 = localStorage.getItem('noOfNaan4');
    naan4--;
    localStorage.setItem('noOfNaan4', naan4);
}
function roganJoshDlt1(){
    roganJosh1 = localStorage.getItem('noOfRoganJosh1');
    roganJosh1--;
    localStorage.setItem('noOfRoganJosh1', roganJosh1);
}
function roganJoshDlt2(){
    roganJosh2 = localStorage.getItem('noOfRoganJosh2');
    roganJosh2--;
    localStorage.setItem('noOfRoganJosh2', roganJosh2);
}
function roganJoshDlt3(){
    roganJosh3 = localStorage.getItem('noOfRoganJosh3');
    roganJosh3--;
    localStorage.setItem('noOfRoganJosh3', roganJosh3);
}
function roganJoshDlt4(){
    roganJosh4 = localStorage.getItem('noOfRoganJosh4');
    roganJosh4--;
    localStorage.setItem('noOfRoganJosh4', roganJosh4);
}
function biryaniDlt1(){
    biryani1 = localStorage.getItem('noOfBiryani1');
    biryani1--;
    localStorage.setItem('noOfBiryani1', biryani1);
}
function biryaniDlt2(){
    biryani2 = localStorage.getItem('noOfBiryani2');
    biryani2--;
    localStorage.setItem('noOfBiryani2', biryani2);
}
function biryaniDlt3(){
    biryani3 = localStorage.getItem('noOfBiryani3');
    biryani3--;
    localStorage.setItem('noOfBiryani3', biryani3);
}
function biryaniDlt4(){
    biryani4 = localStorage.getItem('noOfBiryani4');
    biryani4--;
    localStorage.setItem('noOfBiryani4', biryani4);
}
function tandooriChickenDlt1(){
    tandooriChicken1 = localStorage.getItem('noOfTandooriChicken1');
    tandooriChicken1--;
    localStorage.setItem('noOfTandooriChicken1', tandooriChicken1);
}
function tandooriChickenDlt2(){
    tandooriChicken2 = localStorage.getItem('noOfTandooriChicken2');
    tandooriChicken2--;
    localStorage.setItem('noOfTandooriChicken2', tandooriChicken2);
}
function tandooriChickenDlt3(){
    tandooriChicken3 = localStorage.getItem('noOfTandooriChicken3');
    tandooriChicken3--;
    localStorage.setItem('noOfTandooriChicken3', tandooriChicken3);
}
function tandooriChickenDlt4(){
    tandooriChicken4 = localStorage.getItem('noOfTandooriChicken4');
    tandooriChicken4--;
    localStorage.setItem('noOfTandooriChicken4', tandooriChicken4);
}
function muttonKormaDlt1(){
    muttonKorma1 = localStorage.getItem('noOfMuttonKorma1');
    muttonKorma1--;
    localStorage.setItem('noOfMuttonKorma1', muttonKorma1);
}
function muttonKormaDlt2(){
    muttonKorma2 = localStorage.getItem('noOfMuttonKorma2');
    muttonKorma2--;
    localStorage.setItem('noOfMuttonKorma2', muttonKorma2);
}
function muttonKormaDlt3(){
    muttonKorma3 = localStorage.getItem('noOfMuttonKorma3');
    muttonKorma3--;
    localStorage.setItem('noOfMuttonKorma3', muttonKorma3);
}
function muttonKormaDlt4(){
    muttonKorma4 = localStorage.getItem('noOfMuttonKorma4');
    muttonKorma4--;
    localStorage.setItem('noOfMuttonKorma4', muttonKorma4);
}
function risotoDlt1(){
    risoto1 = localStorage.getItem('noOfRisoto1');
    risoto1--;
    localStorage.setItem('noOfRisoto1', risoto1);
}
function risotoDlt2(){
    risoto2 = localStorage.getItem('noOfRisoto2');
    risoto2--;
    localStorage.setItem('noOfRisoto2', risoto2);
}
function pizzaDlt1(){
    pizza1 = localStorage.getItem('noOfPizza1');
    pizza1--;
    localStorage.setItem('noOfPizza1', pizza1);
}
function pizzaDlt2(){
    pizza2 = localStorage.getItem('noOfPizza2');
    pizza2--;
    localStorage.setItem('noOfPizza2', pizza2);
}
function pestoDlt1(){
    pesto1 = localStorage.getItem('noOfPesto1');
    pesto1--;
    localStorage.setItem('noOfPesto1', pesto1);
}
function pestoDlt2(){
    pesto2 = localStorage.getItem('noOfPesto2');
    pesto2--;
    localStorage.setItem('noOfPesto2', pesto2);
}
function spagitiDlt1(){
    spagiti1 = localStorage.getItem('noOfSpagiti1');
    spagiti1--;
    localStorage.setItem('noOfSpagiti1', spagiti1);
}
function spagitiDlt2(){
    spagiti2 = localStorage.getItem('noOfSpagiti2');
    spagiti2--;
    localStorage.setItem('noOfSpagiti2', spagiti2);
}
function tofuDlt1(){
    tofu1 = localStorage.getItem('noOfTofu1');
    tofu1--;
    localStorage.setItem('noOfTofu1', tofu1);
}
function tofuDlt2(){
    tofu2 = localStorage.getItem('noOfTofu2');
    tofu2--;
    localStorage.setItem('noOfTofu2', tofu2);
}
function manchurianDlt1(){
    manchurian1 = localStorage.getItem('noOfManchurian1');
    manchurian1--;
    localStorage.setItem('noOfManchurian1', manchurian1);
}
function manchurianDlt2(){
    manchurian2 = localStorage.getItem('noOfManchurian2');
    manchurian2--;
    localStorage.setItem('noOfManchurian2', manchurian2);
}
function masalaDosaDlt1(){
    masalaDosa1 = localStorage.getItem('noOfMasalaDosa1');
    masalaDosa1--;
    localStorage.setItem('noOfMasalaDosa1', masalaDosa1);
}
function masalaDosaDlt2(){
    masalaDosa2 = localStorage.getItem('noOfMasalaDosa2');
    masalaDosa2--;
    localStorage.setItem('noOfMasalaDosa2', masalaDosa2);
}
function idliDlt1(){
    idli1 = localStorage.getItem('noOfIdli1');
    idli1--;
    localStorage.setItem('noOfIdli1', idli1);
}
function idliDlt2(){
    idli2 = localStorage.getItem('noOfIdli2');
    idli2--;
    localStorage.setItem('noOfIdli2', idli2);
}
function fishDlt1(){
    fish1 = localStorage.getItem('noOfFish1');
    fish1--;
    localStorage.setItem('noOfFish1', fish1);
}
function fishDlt2(){
    fish2 = localStorage.getItem('noOfFish2');
    fish2--;
    localStorage.setItem('noOfFish2', fish2);
}
function chettiDlt1(){
    chetti1 = localStorage.getItem('noOfChetti1');
    chetti1--;
    localStorage.setItem('noOfChetti1', chetti1);
}
function chettiDlt2(){
    chetti2 = localStorage.getItem('noOfChetti2');
    chetti2--;
    localStorage.setItem('noOfChetti2', chetti2);
}






var totalMoney = (localStorage.getItem('noOfCholeBhature1')*120) + (localStorage.getItem('noOfCholeBhature2')*100) + (localStorage.getItem('noOfCholeBhature3')*150) + (localStorage.getItem('noOfCholeBhature4')*80) + (localStorage.getItem('noOfParanthe1')*120) + (localStorage.getItem('noOfParanthe2')*100) + (localStorage.getItem('noOfParanthe3')*150) + (localStorage.getItem('noOfParanthe4')*80) + (localStorage.getItem('noOfDalMakhni1')*120) + (localStorage.getItem('noOfDalMakhni2')*100) + (localStorage.getItem('noOfDalMakhni3')*150) + (localStorage.getItem('noOfDalMakhni4')*80) + (localStorage.getItem('noOfNaan1')*120) + (localStorage.getItem('noOfNaan2')*100) + (localStorage.getItem('noOfNaan3')*150) + (localStorage.getItem('noOfNaan4')*80) + (localStorage.getItem('noOfRoganJosh1')*120) + (localStorage.getItem('noOfRoganJosh2')*100) + (localStorage.getItem('noOfRoganJosh3')*150) + (localStorage.getItem('noOfRoganJosh4')*80) + (localStorage.getItem('noOfBiryani1')*120) + (localStorage.getItem('noOfBiryani2')*100) + (localStorage.getItem('noOfBiryani3')*150) + (localStorage.getItem('noOfBiryani4')*80) + (localStorage.getItem('noOfTandooriChicken1')*120) + (localStorage.getItem('noOfTandooriChicken2')*100) + (localStorage.getItem('noOfTandooriChicken3')*150) + (localStorage.getItem('noOfTandooriChicken4')*80) + (localStorage.getItem('noOfMuttonKorma1')*120) + (localStorage.getItem('noOfMuttonKorma2')*100) + (localStorage.getItem('noOfMuttonKorma3')*150) + (localStorage.getItem('noOfMuttonKorma4')*80) + (localStorage.getItem('noOfRisoto1')*120) + (localStorage.getItem('noOfRisoto2')*100) + (localStorage.getItem('noOfPizza1')*120) + (localStorage.getItem('noOfPizza2')*100) + (localStorage.getItem('noOfPesto1')*120) + (localStorage.getItem('noOfPesto2')*100) + (localStorage.getItem('noOfSpagiti1')*120) + (localStorage.getItem('noOfSpagiti2')*100) + (localStorage.getItem('noOfTofu1')*120) + (localStorage.getItem('noOfTofu2')*100) + (localStorage.getItem('noOfManchurian1')*120) + (localStorage.getItem('noOfManchurian2')*100) + (localStorage.getItem('noOfMasalaDosa1')*120) + (localStorage.getItem('noOfMasalaDosa2')*100) + (localStorage.getItem('noOfIdli1')*120) + (localStorage.getItem('noOfIdli2')*100) + (localStorage.getItem('noOfFish1')*120) + (localStorage.getItem('noOfFish2')*100) + (localStorage.getItem('noOfChetti1')*120) + (localStorage.getItem('noOfChetti2')*100);

if(totalMoney>0){
    document.getElementById('paymentButton').innerHTML = "Proceed to Pay Rs:-"+totalMoney+"/-";
}
else if(totalMoney == 0){
    document.getElementById('paymentButton').style.opacity = 0;
}

if(localStorage.getItem('noOfCholeBhature1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Cholle Bhature</p><button id='noOfFoodItemCholeBhature1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='choleBhatureDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfCholeBhature2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Cholle Bhature</p><button id='noOfFoodItemCholeBhature2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='choleBhatureDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfCholeBhature3') > 0){
    food3 = document.createElement("div");
    
    food3.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 3</h1><h1 style='display: inline; margin-left: 3rem; '>150/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Cholle Bhature</p><button id='noOfFoodItemCholeBhature3' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='choleBhatureDlt3()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food3);
}
if(localStorage.getItem('noOfCholeBhature4') > 0){
    food4 = document.createElement("div");
    
    food4.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 4</h1><h1 style='display: inline; margin-left: 3rem; '>80/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Cholle Bhature</p><button id='noOfFoodItemCholeBhature4' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='choleBhatureDlt4()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food4);
}
if(localStorage.getItem('noOfParanthe1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Paranthe</p><button id='noOfFoodItemParanthe1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='parantheDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfParanthe2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Paranthe</p><button id='noOfFoodItemParanthe2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='parantheDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfParanthe3') > 0){
    food3 = document.createElement("div");
    
    food3.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 3</h1><h1 style='display: inline; margin-left: 3rem; '>150/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Paranthe</p><button id='noOfFoodItemParanthe3' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='parantheDlt3()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food3);
}
if(localStorage.getItem('noOfParanthe4') > 0){
    food4 = document.createElement("div");
    
    food4.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 4</h1><h1 style='display: inline; margin-left: 3rem; '>80/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Paranthe</p><button id='noOfFoodItemParanthe4' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='parantheDlt4()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food4);
}
if(localStorage.getItem('noOfDalMakhni1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Dal Makhni</p><button id='noOfFoodItemDalMakhni1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='dalMakhniDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfDalMakhni2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Dal Makhni</p><button id='noOfFoodItemDalMakhni2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='dalMakhniDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfDalMakhni3') > 0){
    food3 = document.createElement("div");
    
    food3.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 3</h1><h1 style='display: inline; margin-left: 3rem; '>150/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Dal Makhni</p><button id='noOfFoodItemDalMakhni3' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='dalMakhniDlt3()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food3);
}
if(localStorage.getItem('noOfDalMakhni4') > 0){
    food4 = document.createElement("div");
    
    food4.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 4</h1><h1 style='display: inline; margin-left: 3rem; '>80/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Dal Makhni</p><button id='noOfFoodItemDalMakhni4' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='dalMakhniDlt4()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food4);
}
if(localStorage.getItem('noOfNaan1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Naan</p><button id='noOfFoodItemNaan1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='naanDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfNaan2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Naan</p><button id='noOfFoodItemNaan2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='naanDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfNaan3') > 0){
    food3 = document.createElement("div");
    
    food3.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 3</h1><h1 style='display: inline; margin-left: 3rem; '>150/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Naan</p><button id='noOfFoodItemNaan3' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='naanDlt3()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food3);
}
if(localStorage.getItem('noOfNaan4') > 0){
    food4 = document.createElement("div");
    
    food4.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 4</h1><h1 style='display: inline; margin-left: 3rem; '>80/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Naan</p><button id='noOfFoodItemNaan4' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='naanDlt4()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food4);
}
if(localStorage.getItem('noOfRoganJosh1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Rogan Josh</p><button id='noOfFoodItemRoganJosh1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='roganJoshDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfRoganJosh2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Rogan Josh</p><button id='noOfFoodItemRoganJosh2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='roganJoshDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfRoganJosh3') > 0){
    food3 = document.createElement("div");
    
    food3.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 3</h1><h1 style='display: inline; margin-left: 3rem; '>150/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Rogan Josh</p><button id='noOfFoodItemRoganJosh3' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='roganJoshDlt3()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food3);
}
if(localStorage.getItem('noOfRoganJosh4') > 0){
    food4 = document.createElement("div");
    
    food4.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 4</h1><h1 style='display: inline; margin-left: 3rem; '>80/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Rogan Josh</p><button id='noOfFoodItemRoganJosh4' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='roganJoshDlt4()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food4);
}
if(localStorage.getItem('noOfBiryani1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Biryani</p><button id='noOfFoodItemBiryani1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='biryaniDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfBiryani2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Biryani</p><button id='noOfFoodItemBiryani2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='biryaniDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfBiryani3') > 0){
    food3 = document.createElement("div");
    
    food3.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 3</h1><h1 style='display: inline; margin-left: 3rem; '>150/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Biryani</p><button id='noOfFoodItemBiryani3' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='biryaniDlt3()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food3);
}
if(localStorage.getItem('noOfBiryani4') > 0){
    food4 = document.createElement("div");
    
    food4.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 4</h1><h1 style='display: inline; margin-left: 3rem; '>80/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Biryani</p><button id='noOfFoodItemBiryani4' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='biryaniDlt4()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food4);
}
if(localStorage.getItem('noOfTandooriChicken1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Tandoori Chicken</p><button id='noOfFoodItemTandooriChicken1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='tandooriChickenDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfTandooriChicken2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Tandoori Chicken</p><button id='noOfFoodItemTandooriChicken2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='tandooriChickenDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfTandooriChicken3') > 0){
    food3 = document.createElement("div");
    
    food3.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 3</h1><h1 style='display: inline; margin-left: 3rem; '>150/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Tandoori Chicken</p><button id='noOfFoodItemTandooriChicken3' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='tandooriChickenDlt3()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food3);
}
if(localStorage.getItem('noOfTandooriChicken4') > 0){
    food4 = document.createElement("div");
    
    food4.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 4</h1><h1 style='display: inline; margin-left: 3rem; '>80/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Tandoori Chicken</p><button id='noOfFoodItemTandooriChicken4' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='tandooriChickenDlt4()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food4);
}
if(localStorage.getItem('noOfMuttonKorma1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Mutton Korma</p><button id='noOfFoodItemMuttonKorma1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='muttonKormaDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfMuttonKorma2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Mutton Korma</p><button id='noOfFoodItemMuttonKorma2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='muttonKormaDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfMuttonKorma3') > 0){
    food3 = document.createElement("div");
    
    food3.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 3</h1><h1 style='display: inline; margin-left: 3rem; '>150/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Mutton Korma</p><button id='noOfFoodItemMuttonKorma3' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='muttonKormaDlt3()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food3);
}
if(localStorage.getItem('noOfMuttonKorma4') > 0){
    food4 = document.createElement("div");
    
    food4.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 4</h1><h1 style='display: inline; margin-left: 3rem; '>80/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Mutton Korma</p><button id='noOfFoodItemMuttonKorma4' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='muttonKormaDlt4()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food4);
}
if(localStorage.getItem('noOfRisoto1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Risoto</p><button id='noOfFoodItemRisoto1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='risotoDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfRisoto2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Risoto</p><button id='noOfFoodItemRisoto2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='risotoDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfPizza1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Pizza</p><button id='noOfFoodItemPizza1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='pizzaDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfPizza2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Pizza</p><button id='noOfFoodItemPizza2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='pizzaDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfPesto1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Pesto</p><button id='noOfFoodItemPesto1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='pestoDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfPesto2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Pesto</p><button id='noOfFoodItemPesto2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='pestoDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfSpagiti1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Spaghetti Bolognese</p><button id='noOfFoodItemSpagiti1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='spagitiDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfSpagiti2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Spaghetti Bolognese</p><button id='noOfFoodItemSpagiti2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='spagitiDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfTofu1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Tofu</p><button id='noOfFoodItemTofu1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='tofuDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfTofu2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Tofu</p><button id='noOfFoodItemTofu2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='tofuDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfManchurian1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Manchurian</p><button id='noOfFoodItemManchurian1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='manchurianDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfManchurian2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Manchurian</p><button id='noOfFoodItemManchurian2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='manchurianDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfMasalaDosa1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Masala Dosa</p><button id='noOfFoodItemMasalaDosa1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='masalaDosaDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfMasalaDosa2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Masala Dosa</p><button id='noOfFoodItemMasalaDosa2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='masalaDosaDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfIdli1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Idli Sambhar</p><button id='noOfFoodItemIdli1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='idliDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfIdli2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Idli Sambhar</p><button id='noOfFoodItemIdli2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='idliDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfFish1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Fish Molee</p><button id='noOfFoodItemFish1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='fishDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfFish2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Fish Molee</p><button id='noOfFoodItemFish2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='fishDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}
if(localStorage.getItem('noOfChetti1') > 0){
    food1 = document.createElement("div");
    
    food1.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 1</h1><h1 style='display: inline; margin-left: 3rem; '>120/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Chicken Chettinad</p><button id='noOfFoodItemChetti1' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='chettiDlt1()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food1);
}
if(localStorage.getItem('noOfChetti2') > 0){
    food2 = document.createElement("div");
    
    food2.innerHTML = "<div class='card mb-3'><div class='card-body'><h1 class='card-title' style='display: inline; font-size: 5rem;'>Restaurant 2</h1><h1 style='display: inline; margin-left: 3rem; '>100/-Rs</h1><p class='card-text' style='font-size: 2rem;'>Chicken Chettinad</p><button id='noOfFoodItemChetti2' class='btn btn-primary addButton'></button><a href='/myBasket'><button onclick='chettiDlt2()' class='btn btn-primary addButton'>Remove 1 from Basket</button></a></div></div>";
    document.getElementById('basket').appendChild(food2);
}





if(localStorage.getItem('noOfCholeBhature1') > 0){
    document.getElementById('noOfFoodItemCholeBhature1').innerHTML = localStorage.getItem('noOfCholeBhature1');
}
if(localStorage.getItem('noOfCholeBhature2') > 0){
    document.getElementById('noOfFoodItemCholeBhature2').innerHTML = localStorage.getItem('noOfCholeBhature2');
}
if(localStorage.getItem('noOfCholeBhature3') > 0){
    document.getElementById('noOfFoodItemCholeBhature3').innerHTML = localStorage.getItem('noOfCholeBhature3');
}
if(localStorage.getItem('noOfCholeBhature4') > 0){
    document.getElementById('noOfFoodItemCholeBhature4').innerHTML = localStorage.getItem('noOfCholeBhature4');
}
if(localStorage.getItem('noOfParanthe1') > 0){
    document.getElementById('noOfFoodItemParanthe1').innerHTML = localStorage.getItem('noOfParanthe1');
}
if(localStorage.getItem('noOfParanthe2') > 0){
    document.getElementById('noOfFoodItemParanthe2').innerHTML = localStorage.getItem('noOfParanthe2');
}
if(localStorage.getItem('noOfParanthe3') > 0){
    document.getElementById('noOfFoodItemParanthe3').innerHTML = localStorage.getItem('noOfParanthe3');
}
if(localStorage.getItem('noOfParanthe4') > 0){
    document.getElementById('noOfFoodItemParanthe4').innerHTML = localStorage.getItem('noOfParanthe4');
}
if(localStorage.getItem('noOfDalMakhni1') > 0){
    document.getElementById('noOfFoodItemDalMakhni1').innerHTML = localStorage.getItem('noOfDalMakhni1');
}
if(localStorage.getItem('noOfDalMakhni2') > 0){
    document.getElementById('noOfFoodItemDalMakhni2').innerHTML = localStorage.getItem('noOfDalMakhni2');
}
if(localStorage.getItem('noOfDalMakhni3') > 0){
    document.getElementById('noOfFoodItemDalMakhni3').innerHTML = localStorage.getItem('noOfDalMakhni3');
}
if(localStorage.getItem('noOfDalMakhni4') > 0){
    document.getElementById('noOfFoodItemDalMakhni4').innerHTML = localStorage.getItem('noOfDalMakhni4');
}
if(localStorage.getItem('noOfNaan1') > 0){
    document.getElementById('noOfFoodItemNaan1').innerHTML = localStorage.getItem('noOfNaan1');
}
if(localStorage.getItem('noOfNaan2') > 0){
    document.getElementById('noOfFoodItemNaan2').innerHTML = localStorage.getItem('noOfNaan2');
}
if(localStorage.getItem('noOfNaan3') > 0){
    document.getElementById('noOfFoodItemNaan3').innerHTML = localStorage.getItem('noOfNaan3');
}
if(localStorage.getItem('noOfNaan4') > 0){
    document.getElementById('noOfFoodItemNaan4').innerHTML = localStorage.getItem('noOfNaan4');
}
if(localStorage.getItem('noOfRoganJosh1') > 0){
    document.getElementById('noOfFoodItemRoganJosh1').innerHTML = localStorage.getItem('noOfRoganJosh1');
}
if(localStorage.getItem('noOfRoganJosh2') > 0){
    document.getElementById('noOfFoodItemRoganJosh2').innerHTML = localStorage.getItem('noOfRoganJosh2');
}
if(localStorage.getItem('noOfRoganJosh3') > 0){
    document.getElementById('noOfFoodItemRoganJosh3').innerHTML = localStorage.getItem('noOfRoganJosh3');
}
if(localStorage.getItem('noOfRoganJosh4') > 0){
    document.getElementById('noOfFoodItemRoganJosh4').innerHTML = localStorage.getItem('noOfRoganJosh4');
}
if(localStorage.getItem('noOfBiryani1') > 0){
    document.getElementById('noOfFoodItemBiryani1').innerHTML = localStorage.getItem('noOfParanthe1');
}
if(localStorage.getItem('noOfBiryani2') > 0){
    document.getElementById('noOfFoodItemBiryani2').innerHTML = localStorage.getItem('noOfBiryani2');
}
if(localStorage.getItem('noOfBiryani3') > 0){
    document.getElementById('noOfFoodItemBiryani3').innerHTML = localStorage.getItem('noOfParanthe3');
}
if(localStorage.getItem('noOfBiryani4') > 0){
    document.getElementById('noOfFoodItemBiryani4').innerHTML = localStorage.getItem('noOfParanthe4');
}
if(localStorage.getItem('noOfTandooriChicken1') > 0){
    document.getElementById('noOfFoodItemTandooriChicken1').innerHTML = localStorage.getItem('noOfTandooriChicken1');
}
if(localStorage.getItem('noOfTandooriChicken2') > 0){
    document.getElementById('noOfFoodItemTandooriChicken2').innerHTML = localStorage.getItem('noOfTandooriChicken2');
}
if(localStorage.getItem('noOfTandooriChicken3') > 0){
    document.getElementById('noOfFoodItemTandooriChicken3').innerHTML = localStorage.getItem('noOfTandooriChicken3');
}
if(localStorage.getItem('noOfTandooriChicken4') > 0){
    document.getElementById('noOfFoodItemTandooriChicken4').innerHTML = localStorage.getItem('noOfTandooriChicken4');
}
if(localStorage.getItem('noOfMuttonKorma1') > 0){
    document.getElementById('noOfFoodItemMuttonKorma1').innerHTML = localStorage.getItem('noOfMuttonKorma1');
}
if(localStorage.getItem('noOfMuttonKorma2') > 0){
    document.getElementById('noOfFoodItemMuttonKorma2').innerHTML = localStorage.getItem('noOfMuttonKorma2');
}
if(localStorage.getItem('noOfMuttonKorma3') > 0){
    document.getElementById('noOfFoodItemMuttonKorma3').innerHTML = localStorage.getItem('noOfMuttonKorma3');
}
if(localStorage.getItem('noOfMuttonKorma4') > 0){
    document.getElementById('noOfFoodItemMuttonKorma4').innerHTML = localStorage.getItem('noOfMuttonKorma4');
}
if(localStorage.getItem('noOfRisoto1') > 0){
    document.getElementById('noOfFoodItemRisoto1').innerHTML = localStorage.getItem('noOfRisoto1');
}
if(localStorage.getItem('noOfRisoto2') > 0){
    document.getElementById('noOfFoodItemRisoto2').innerHTML = localStorage.getItem('noOfRisoto2');
}
if(localStorage.getItem('noOfPizza1') > 0){
    document.getElementById('noOfFoodItemPizza1').innerHTML = localStorage.getItem('noOfPizza1');
}
if(localStorage.getItem('noOfPizza2') > 0){
    document.getElementById('noOfFoodItemPizza2').innerHTML = localStorage.getItem('noOfPizza2');
}
if(localStorage.getItem('noOfPesto1') > 0){
    document.getElementById('noOfFoodItemPesto1').innerHTML = localStorage.getItem('noOfPesto1');
}
if(localStorage.getItem('noOfPesto2') > 0){
    document.getElementById('noOfFoodItemPesto2').innerHTML = localStorage.getItem('noOfPesto2');
}
if(localStorage.getItem('noOfSpagiti1') > 0){
    document.getElementById('noOfFoodItemSpagiti1').innerHTML = localStorage.getItem('noOfSpagiti1');
}
if(localStorage.getItem('noOfSpagiti2') > 0){
    document.getElementById('noOfFoodItemSpagiti2').innerHTML = localStorage.getItem('noOfSpagiti2');
}
if(localStorage.getItem('noOfTofu1') > 0){
    document.getElementById('noOfFoodItemTofu1').innerHTML = localStorage.getItem('noOfTofu1');
}
if(localStorage.getItem('noOfTofu2') > 0){
    document.getElementById('noOfFoodItemTofu2').innerHTML = localStorage.getItem('noOfTofu2');
}
if(localStorage.getItem('noOfManchurian1') > 0){
    document.getElementById('noOfFoodItemManchurian1').innerHTML = localStorage.getItem('noOfManchurian1');
}
if(localStorage.getItem('noOfManchurian2') > 0){
    document.getElementById('noOfFoodItemManchurian2').innerHTML = localStorage.getItem('noOfManchurian2');
}
if(localStorage.getItem('noOfMasalaDosa1') > 0){
    document.getElementById('noOfFoodItemMasalaDosa1').innerHTML = localStorage.getItem('noOfMasalaDosa1');
}
if(localStorage.getItem('noOfMasalaDosa2') > 0){
    document.getElementById('noOfFoodItemMasalaDosa2').innerHTML = localStorage.getItem('noOfMasalaDosa2');
}
if(localStorage.getItem('noOfIdli1') > 0){
    document.getElementById('noOfFoodItemIdli1').innerHTML = localStorage.getItem('noOfIdli1');
}
if(localStorage.getItem('noOfIdli2') > 0){
    document.getElementById('noOfFoodItemIdli2').innerHTML = localStorage.getItem('noOfIdli2');
}
if(localStorage.getItem('noOfFish1') > 0){
    document.getElementById('noOfFoodItemFish1').innerHTML = localStorage.getItem('noOfFish1');
}
if(localStorage.getItem('noOfFish2') > 0){
    document.getElementById('noOfFoodItemFish2').innerHTML = localStorage.getItem('noOfFish2');
}
if(localStorage.getItem('noOfChetti1') > 0){
    document.getElementById('noOfFoodItemChetti1').innerHTML = localStorage.getItem('noOfChetti1');
}
if(localStorage.getItem('noOfChetti2') > 0){
    document.getElementById('noOfFoodItemChetti2').innerHTML = localStorage.getItem('noOfChetti2');
}







if(localStorage.getItem('noOfCholeBhature1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfCholeBhature2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfCholeBhature3') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfCholeBhature4') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfParanthe1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfParanthe2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfParanthe3') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfParanthe4') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfDalMakhni1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfDalMakhni2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfDalMakhni3') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfDalMakhni4') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfNaan1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfNaan2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfNaan3') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfNaan4') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfRoganJosh1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfRoganJosh2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfRoganJosh3') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfRoganJosh4') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfBiryani1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfBiryani2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfBiryani3') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfBiryani4') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfTandooriChicken1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfTandooriChicken2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfTandooriChicken3') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfTandooriChicken4') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfMuttonKorma1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfMuttonKorma2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfMuttonKorma3') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfMuttonKorma4') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfRisoto1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfRisoto2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfPizza1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfPizza2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfPesto1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfPesto2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfSpagiti1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfSpagiti2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfTofu1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfTofu2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfManchurian1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfManchurian2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfMasalaDosa1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfMasalaDosa2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfIdli1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfIdli2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfFish1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfFish2') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfChetti1') == 0){
    div.parentNode.removeChild(div);
}
if(localStorage.getItem('noOfChetti2') == 0){
    div.parentNode.removeChild(div);
}






function clearBasket(){
    localStorage.clear();
}

