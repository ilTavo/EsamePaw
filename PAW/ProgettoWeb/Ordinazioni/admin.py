from django.contrib import admin
from .models import Ombrellone, Prodotto, Ordinazione

# Register your models here.

admin.site.register(Prodotto)
admin.site.register(Ordinazione)
admin.site.register(Ombrellone)