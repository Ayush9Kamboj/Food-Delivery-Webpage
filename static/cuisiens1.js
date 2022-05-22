
// document.getElementById('sep1').onclick();


function changeHtmlToVeg(){

    document.getElementById('loadingScreen1').style.opacity=1;
    document.getElementById('cardKaBaap').innerHTML = '';
    
    window.setTimeout(function(){
        document.getElementById('loadingScreen1').style.opacity=0;

        document.getElementById('cardKaBaap').innerHTML = "<div class='caard'><div class='caard1'><img src='/static/images/cuisienes/indian/choleBhature.jpg'alt='img'></div><div class='caard2'><h1>Chole Bhature</h1><h2>Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida.</h2><a href='/choleBhature'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/indian/parathe.jpg'alt='img'></div><div class='caard2'><h1>Paranthe</h1><h2>Paratha is a bread dish originating from India. It is a breakfast dish that is popular in the Indian subcontinent. The recipe is one of the most popular breakfast dishes throughout the western, central and northern regions of India.</h2><a href='/paranthe'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/indian/dalMakhani.jpg'alt='img'></div><div class='caard2'><h1>Dal Makhani</h1><h2>Dal Makhani is a very popular Indian dish from the Punjab and Northern Indian region. Lentils as a whole are extremely popular across the entire country, however Dall Makhani is made with black lentils and kidney beans.</h2><a href='/dalMakhani'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/indian/naan.jpg'alt='img'></div><div class='caard2'><h1>Naan</h1><h2>Naan is a type of bread made with flour. It is a flatbread that is baked in a tandoor. Naan bread often looks like a tear drop. It is often covered in herbs and spices such as garlic to change the taste.</h2><a href='/naan'><button class='btn btn-primary'>View All</button></a></div></div>";
    }, 1000)
}

function changeHtmlToNonVeg(){

    document.getElementById('loadingScreen1').style.opacity=1;
    document.getElementById('cardKaBaap').innerHTML = '';
    
    window.setTimeout(function(){
        document.getElementById('loadingScreen1').style.opacity=0;
    
        document.getElementById('cardKaBaap').innerHTML = "<div class='caard'><div class='caard1'><img src='/static/images/cuisienes/indian/roganJosh.webp'alt='img'></div><div class='caard2'><h1>Rogan Josh</h1><h2>It is an aromatic curried meat dish of Kashmiri origin. It is made with red meat—traditionally lamb, mutton, or goat—and coloured and flavoured primarily by alkanet flower (or root) and Kashmiri chilies. It is one of the signature recipes of Kashmiri.</h2><a href='/roganJosh'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/indian/chickenBiryani.jpg'alt='img'></div><div class='caard2'><h1>Biryani</h1><h2>Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, goat, lamb, prawn, fish), and sometimes, in addition, eggs and potatoes.</h2><a href='/biryani'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/indian/tandoori.jpg'alt='img'></div><div class='caard2'><h1>Tandoori Chicken</h1><h2>Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven. The dish originated from the Indian subcontinent and is popular in many other parts of the world.</h2><a href='/tandooriChicken'><button class='btn btn-primary'>View All</button></a></div></div><div class='caard'><div class='caard1'><img src='/static/images/cuisienes/indian/muttonKorma.webp'alt='img'></div><div class='caard2'><h1>Mutton Korma</h1><h2>Mutton Korma or qorma is a dish originating in South Asia,[1] consisting of meat or vegetables braised with yogurt (dahi), water or stock, and spices to produce a thick sauce or gravy.</h2><a href='/muttonKorma'><button class='btn btn-primary'>View All</button></a></div></div>";
    }, 1000)
}

window.setTimeout(function(){
    document.getElementById('loadingScreen').style.opacity=0;
    document.getElementById('loadingScreen').style.height=0;
    document.getElementById('loadingScreen').style.width=0;
}, 500)

