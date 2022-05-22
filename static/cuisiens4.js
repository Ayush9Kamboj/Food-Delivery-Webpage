
// document.getElementById('sep1').onclick();


function changeHtmlToVeg(){

    document.getElementById('loadingScreen1').style.opacity=1;
    document.getElementById('cardKaBaap').innerHTML = '';
    
    window.setTimeout(function(){
        document.getElementById('loadingScreen1').style.opacity=0;

        document.getElementById('cardKaBaap').innerHTML = "<div class='caard'><div class='caard1'><img src='/static/images/cuisienes/southIndian/masalaDosa.webp'alt='img'></div><div class='caard2'><h1>Masala Dosa</h1><h2>Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar. It is popular in South India, it can be found in all other parts of the country and overseas.</h2><a href='/masalaDosa'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/southIndian/idli.jpg'alt='img'></div><div class='caard2'><h1>Idli Sambhar</h1><h2>Idli Sambar is a South Indian breakfast meal where soft fluffy steamed cakes known as idli are served with sambar, a vegetable lentil stew. Idli sambar is made with lentils, plenty of spices, mixed vegetables and herbs.</h2><a href='/idli'><button class='btn btn-primary'>View All</button></a></div></div>";
    }, 1000)
}

function changeHtmlToNonVeg(){

    document.getElementById('loadingScreen1').style.opacity=1;
    document.getElementById('cardKaBaap').innerHTML = '';
    
    window.setTimeout(function(){
        document.getElementById('loadingScreen1').style.opacity=0;
    
        document.getElementById('cardKaBaap').innerHTML = "<div class='caard'><div class='caard1'><img src='/static/images/cuisienes/southIndian/fish.webp'alt='img'></div><div class='caard2'><h1>Fish Molee</h1><h2>Fish moilee/Moily or fish molee is a spicy fish and coconut dish of possible Portuguese or South Indian origin. It is common in India, Malaysia and Singapore. During the times of the British Empire, it spread into other places of South-East Asia, such as Singapore.</h2><a href='/fish'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/southIndian/chetti.jpg'alt='img'></div><div class='caard2'><h1>Chicken Chettinad</h1><h2>Chicken Chettinad or Chettinad chicken is a classic Indian recipe, from the cuisine of Chettinad, Tamil Nadu. It consists of chicken marinated in yogurt, turmeric and a paste of red chillies, kalpasi, coconut, poppy seeds, coriander seeds, cumin seeds, fennel seeds, black pepper, ground nuts, onions, garlic and gingelly oil. It is served hot and garnished with coriander leaves, accompanied with boiled rice or paratha.</h2><a href='/chetti'><button class='btn btn-primary'>View All</button></a></div></div>";
    }, 1000)
}

window.setTimeout(function(){
    document.getElementById('loadingScreen').style.opacity=0;
    document.getElementById('loadingScreen').style.height=0;
    document.getElementById('loadingScreen').style.width=0;
}, 500)

