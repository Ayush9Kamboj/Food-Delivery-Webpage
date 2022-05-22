// function getAppAlert(){
//     open('indian.html')
// }

// let alert1 = document.getElementsByClassName('getApp');
// // alert1.onclick = getAppAlert;

// document.onclick = getAppAlert;

// let alert2 = document.getElementsByClassName('butoooon');
// alert2.onclick = getAppAlert

// function indianPage(){
//     document.getElementById('button1').click();
//     console.log('clicked');
// }


// let indian = document.getElementById('indian');
// indian.onclick = indianPage;

// cuiniens

indian.addEventListener('mouseover', function(){
    italian.style.opacity = 0.3;
    chinese.style.opacity = 0.3;
    viewAll1.style.opacity = 0.3;
})
indian.addEventListener('mouseout', function(){
    italian.style.opacity = 1;
    chinese.style.opacity = 1;
    viewAll1.style.opacity = 1;
})


italian.addEventListener('mouseover', function(){
    indian.style.opacity = 0.3;
    chinese.style.opacity = 0.3;
    viewAll1.style.opacity = 0.3;
})
italian.addEventListener('mouseout', function(){
    indian.style.opacity = 1;
    chinese.style.opacity = 1;
    viewAll1.style.opacity = 1;
})


chinese.addEventListener('mouseover', function(){
    italian.style.opacity = 0.3;
    indian.style.opacity = 0.3;
    viewAll1.style.opacity = 0.3;
})
chinese.addEventListener('mouseout', function(){
    italian.style.opacity = 1;
    indian.style.opacity = 1;
    viewAll1.style.opacity = 1;
})


viewAll1.addEventListener('mouseover', function(){
    italian.style.opacity = 0.3;
    chinese.style.opacity = 0.3;
    indian.style.opacity = 0.3;
})
viewAll1.addEventListener('mouseout', function(){
    italian.style.opacity = 1;
    chinese.style.opacity = 1;
    indian.style.opacity = 1;
})

// restaurant

dominos.addEventListener('mouseover', function(){
    kfc.style.opacity = 0.3;
    pizzaHut.style.opacity = 0.3;
    viewAll2.style.opacity = 0.3;
})
dominos.addEventListener('mouseout', function(){
    kfc.style.opacity = 1;
    pizzaHut.style.opacity = 1;
    viewAll2.style.opacity = 1;
})


kfc.addEventListener('mouseover', function(){
    pizzaHut.style.opacity = 0.3;
    viewAll2.style.opacity = 0.3;
    dominos.style.opacity = 0.3;
})
kfc.addEventListener('mouseout', function(){
    pizzaHut.style.opacity = 1;
    viewAll2.style.opacity = 1;
    dominos.style.opacity = 1;
})


pizzaHut.addEventListener('mouseover', function(){
    viewAll2.style.opacity = 0.3;
    dominos.style.opacity = 0.3;
    kfc.style.opacity = 0.3;
})
pizzaHut.addEventListener('mouseout', function(){
    viewAll2.style.opacity = 1;
    dominos.style.opacity = 1;
    kfc.style.opacity = 1;
})


viewAll2.addEventListener('mouseover', function(){
    dominos.style.opacity = 0.3;
    kfc.style.opacity = 0.3;
    pizzaHut.style.opacity = 0.3;
})
viewAll2.addEventListener('mouseout', function(){
    dominos.style.opacity = 1;
    kfc.style.opacity = 1;
    pizzaHut.style.opacity = 1;
})

// $(window).on('load', function () {  
//     $(".loading-1").fadeOut("slow");  
// });

window.setTimeout(function(){
    document.getElementById('loadingScreen').style.opacity=0;
    document.getElementById('loadingScreen').style.height=0;
    document.getElementById('loadingScreen').style.width=0;
}, 2000)