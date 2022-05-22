
// document.getElementById('sep1').onclick();


function changeHtmlToVeg(){

    document.getElementById('loadingScreen1').style.opacity=1;
    document.getElementById('cardKaBaap').innerHTML = '';
    
    window.setTimeout(function(){
        document.getElementById('loadingScreen1').style.opacity=0;

        document.getElementById('cardKaBaap').innerHTML = "<div class='caard'><div class='caard1'><img src='/static/images/cuisienes/italian/risoto.png'alt='img'></div><div class='caard2'><h1>Risoto</h1><h2>Traditional northern italian dish which main ingredients consist of rice and condiments and can also include broth, butter e/or parmesan cheese.</h2><a href='/risoto'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/italian/pizza.jpg'alt='img'></div><div class='caard2'><h1>Pizza</h1><h2>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.).</h2><a href='/pizza'><button class='btn btn-primary'>View All</button></a></div></div>";
    }, 1000)
}

function changeHtmlToNonVeg(){

    document.getElementById('loadingScreen1').style.opacity=1;
    document.getElementById('cardKaBaap').innerHTML = '';
    
    window.setTimeout(function(){
        document.getElementById('loadingScreen1').style.opacity=0;
    
        document.getElementById('cardKaBaap').innerHTML = "<div class='caard'><div class='caard1'><img src='/static/images/cuisienes/italian/pesto.jpg'alt='img'></div><div class='caard2'><h1>Chicken Pesto Fusilli</h1><h2>Pesto or pesto alla genovese , is a sauce originating in Genoa, the capital city of Liguria, Italy.</h2><a href='/pesto'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/italian/spaghetti.jpg'alt='img'></div><div class='caard2'><h1>Spaghetti Bolognese</h1><h2>Bolognese sauce known in Italian as ragù alla bolognese, pronounced is a meat-based sauce in Italian cuisine, typical of the city of Bologna. It is customarily used to dress tagliatelle al ragù and to prepare lasagne alla bolognese.</h2><a href='/spagiti'><button class='btn btn-primary'>View All</button></a></div></div>";
    }, 1000)
}

window.setTimeout(function(){
    document.getElementById('loadingScreen').style.opacity=0;
    document.getElementById('loadingScreen').style.height=0;
    document.getElementById('loadingScreen').style.width=0;
}, 500)

