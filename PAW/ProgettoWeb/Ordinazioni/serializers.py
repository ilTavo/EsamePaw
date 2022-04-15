
from rest_framework import serializers
from .models import Prodotto, Ordinazione


class ProdottoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prodotto
        fields = ['id', 'nome_prod', 'description','prezzo','note','categoria']
        
class OrdinazioneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ordinazione
        fields = ['data', 'nome_prenot', 'carrello','totale']
        

     