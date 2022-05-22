import email
from django.shortcuts import render
# from App.models import Subscribers
from App.models import contactUs

# Create your views here.
def index(request):
    
    # if request.method == "POST":
    #     email = request.POST.get('email')
    #     index = Subscribers(email = email)
    #     index.save()
    
    
    
    
    return render(request, 'index.html')

def northIndian(request):
    return render(request, 'northIndian.html')

def southIndian(request):
    return render(request, 'southIndian.html')

def italian(request):
    return render(request, 'italian.html')

def chinese(request):
    return render(request, 'chinese.html')

def viewAll1(request):
    return render(request, 'viewAll1.html')

def dominos(request):
    return render(request, 'dominos.html')

def kfc(request):
    return render(request, 'kfc.html')

def pizzaHut(request):
    return render(request, 'pizzaHut.html')

def starbucks(request):
    return render(request, 'starbucks.html')

def haldiram(request):
    return render(request, 'haldiram.html')

def viewAll2(request):
    return render(request, 'viewAll2.html')

def french(request):
    return render(request, 'french.html')

def japanese(request):
    return render(request, 'japanese.html')

def thai(request):
    return render(request, 'thai.html')

def turkish(request):
    return render(request, 'turkish.html')

def choleBhature(request):
    return render(request, 'choleBhature.html')

def myBasket(request):
    return render(request, 'myBasket.html')

def paranthe(request):
    return render(request, 'paranthe.html')

def dalMakhani(request):
    return render(request, 'dalMakhni.html')

def naan(request):
    return render(request, 'naan.html')

def roganJosh(request):
    return render(request, 'roganJosh.html')

def biryani(request):
    return render(request, 'biryani.html')

def tandooriChicken(request):
    return render(request, 'tandooriChicken.html')

def muttonKorma(request):
    return render(request, 'muttonKorma.html')

def risoto(request):
    return render(request, 'risoto.html')

def pizza(request):
    return render(request, 'pizza.html')

def pesto(request):
    return render(request, 'pesto.html')

def spagiti(request):
    return render(request, 'spagiti.html')

def tofu(request):
    return render(request, 'tofu.html')

def manchurian(request):
    return render(request, 'manchurian.html')

def masalaDosa(request):
    return render(request, 'masalaDosa.html')

def idli(request):
    return render(request, 'idli.html')

def fish(request):
    return render(request, 'fish.html')

def chetti(request):
    return render(request, 'chetti.html')

def contactUs(request):
    return render(request, 'contactUs.html')

def aboutUs(request):
    return render(request, 'aboutUs.html')

def submit(request):
    
    if request.method == "POST":
        firstName = request.POST.get('firstName')
        secondName = request.POST.get('secondName')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        context = request.POST.get('context')
        index = contactUs(firstName = firstName, secondName = secondName, email = email, phone = phone, context = context )
        index.save()
        
    return render(request, 'index.html')