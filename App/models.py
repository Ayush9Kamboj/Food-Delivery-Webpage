import email
from pyexpat import model
from django.db import models

# class Subscribers(models.Model):
#     email = models.CharField(max_length=122)
#     name = "Email-Id"
    
#     def  __str__(self):
#         return self.name

# class AppDawnload(models.Model):
#     email = models
    
class contactUs(models.Model):
    firstName = models.CharField(max_length=122)
    secondName = models.CharField(max_length=122)
    email = models.CharField(max_length=122)
    phone = models.CharField(max_length=122)
    context = models.CharField(max_length=122)
    a = "Details"
    
    def __str__(self):
        return self.a