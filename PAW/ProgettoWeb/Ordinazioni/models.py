from pyexpat import model
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User
from django.db import models

# Create your models here.
    
class Prodotto(models.Model):
    nome_prod =models.CharField(max_length=50)
    description = models.TextField(null= True)
    prezzo = models.DecimalField(max_digits=4, decimal_places=2)
    note = models.TextField(max_length=240,blank= True)
    categoria = models.CharField(max_length=30, default='Bar')
    
    def __str__(self) :
        return self.nome_prod

class Ordinazione(models.Model):
    data = models.DateTimeField()
    nome_prenot = models.CharField(max_length=153)
    totale = models.DecimalField(max_digits=4, decimal_places=2)   
    carrello = ArrayField(
            models.CharField(max_length=50, blank=True),
            size=30,
        )       
    def __str__(self) :
        return self.nome_prenot
    
class Ombrellone(models.Model):
    user = models.OneToOneField(User, null= True, on_delete=models.CASCADE)
    data_reset =models.DateField()
    note = models.CharField(max_length=30, blank= True)

    def __str__(self) :
        return str(self.user)