
// document.getElementById('sep1').onclick();


function changeHtmlToVeg(){

    document.getElementById('loadingScreen1').style.opacity=1;
    document.getElementById('cardKaBaap').innerHTML = '';
    
    window.setTimeout(function(){
        document.getElementById('loadingScreen1').style.opacity=0;

        document.getElementById('cardKaBaap').innerHTML = "<div class='caard'><div class='caard1'><img src='/static/images/cuisienes/chinese/tofu.jpg'alt='img'></div><div class='caard2'><h1>Tofu</h1><h2>Tofu also known as bean curd, is a food prepared by coagulating soy milk and then pressing the resulting curds into solid white blocks of varying softness.</h2><a href='/tofu'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/chinese/manchurian.jpg'alt='img'></div><div class='caard2'><h1>Manchurian</h1><h2>Manchurian is a class of Indian Chinese dishes made by roughly chopping and deep-frying ingredients such as chicken, cauliflower, prawns, fish, mutton, and paneer, and then sautéeing it in a sauce flavored with soy sauce.</h2><a href='/manchurian'><button class='btn btn-primary'>View All</button></a></div></div>";
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

