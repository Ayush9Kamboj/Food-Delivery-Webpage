"""Project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from xml.etree.ElementInclude import include
from django import views
from django.contrib import admin
from django.urls import path
from App import views


admin.site.site_header = "Zinggi Admin"
admin.site.site_title = "Admin Postal"
admin.site.index_title = "Available Data"


urlpatterns = [
    path('', views.index, name='Home Page'),
    path('northIndian/', views.northIndian, name='North Indian Page'),
    path('southIndian/', views.southIndian, name='South Indian Page'),
    path('italian/', views.italian, name='Italian Page'),
    path('chinese/', views.chinese, name='Chinese Page'),
    path('viewAll1/', views.viewAll1, name='View All 1st Page'),
    path('dominos/', views.dominos, name='Dominos Page'),
    path('kfc/', views.kfc, name='Kfc Page'),
    path('pizzaHut/', views.pizzaHut, name='Pizza Hut Page'),
    path('starbucks/', views.starbucks, name='Kfc Page'),
    path('haldiram/', views.haldiram, name='Pizza Hut Page'),
    path('viewAll2/', views.viewAll2, name='View All 2st Page'),
    path('french/', views.french, name='French Page'),
    path('japanese/', views.japanese, name='Japanese Page'),
    path('thai/', views.thai, name='Thai Page'),
    path('turkish/', views.turkish, name='Turkish Page'),
    path('choleBhature/', views.choleBhature, name='Chole Bhature Page'),
    path('myBasket/', views.myBasket, name='My Basket Page'),
    path('paranthe/', views.paranthe, name='Paranthe Page'),
    path('dalMakhani/', views.dalMakhani, name='Dal Makhani Page'),
    path('naan/', views.naan, name='Naan Page'),
    path('roganJosh/', views.roganJosh, name='Rogan Josh Page'),
    path('biryani/', views.biryani, name='Biryani Page'),
    path('tandooriChicken/', views.tandooriChicken, name='Tandoori Chicken Page'),
    path('muttonKorma/', views.muttonKorma, name='Mutton Korma Page'),
    path('risoto/', views.risoto, name='Risoto Page'),
    path('pizza/', views.pizza, name='Pizza Page'),
    path('pesto/', views.pesto, name='Pesto Page'),
    path('spagiti/', views.spagiti, name='Spagiti Page'),
    path('tofu/', views.tofu, name='Tofu Page'),
    path('manchurian/', views.manchurian, name='Manchurian Page'),
    path('masalaDosa/', views.masalaDosa, name='Masala Dosa Page'),
    path('idli/', views.idli, name='Idli Page'),
    path('fish/', views.fish, name='Fish Molee Page'),
    path('chetti/', views.chetti, name='Chicken Chettinad Page'),
    path('contactUs/', views.contactUs, name='Subscribe Page'),
    path('aboutUs/', views.aboutUs, name='View All 1st Page'),
    path('contactUs/submit/', views.submit, name='View All 1st Page'),

]
