import re
from django.shortcuts import render, HttpResponse
from Ordinazioni.models import Prodotto, Ordinazione
from .serializers import ProdottoSerializer, OrdinazioneSerializer
from django.http import JsonResponse
#from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import status, generics, mixins


'''
# Create your views here.
#@csrf_exempt
@api_view(['GET','POST'])
def article_list(request):
    #get all article

    if request.method =='GET':
        prodottos = Prodotto.objects.all()
        serializer = ProdottoSerializer(prodottos, many=True)
        return Response(serializer.data)

    elif request.method =='POST':
        serializer = ProdottoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#@csrf_exempt
-- CREA TRAMITE IDECORATOR PAGINE PER VISUALIZZARE I JSON E FARE LE POST,GET,PUT
@api_view(['GET','PUT', 'DELETE'])
def article_details(request, pk):
    try:
        article =Prodotto.objects.get(pk=pk)

    except Prodotto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method =='GET':
        serializer = ProdottoSerializer(article)
        return Response(serializer.data)

    elif request.method =='PUT':
        
        serializer = ProdottoSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
'''

class ProdottoList(APIView):
    ## DA VERIFICARE PERCHè IL PASSAGGIO DEL TOKEN NELL'HEADER NON PASSA ##
   ## authentication_classes = [authentication.TokenAuthentication]
   ## permission_classes = [permissions.IsAuthenticated]

    def get(self,request, format=None):
        prodottos = Prodotto.objects.all()
        serializer = ProdottoSerializer(prodottos, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = ProdottoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProdottoDetails(APIView):

    def get_object(self, id):
        try:
            return Prodotto.objects.get(id=id)

        except Prodotto.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get (self, request, id):
        prodottos = self.get_object(id)
        serializer = ProdottoSerializer(prodottos)
        return Response(serializer.data)

    def put(self, request, id):
        article = self.get_object(id)
        serializer = ProdottoSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete (self, request, id):
        article = self.get_object(id)
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

class OrdinazioneList(APIView):
    def get(self,request):
        Ordinaziones = Ordinazione.objects.all()
        serializer = OrdinazioneSerializer(Ordinaziones, many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = OrdinazioneSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OrdinazioneDetails(APIView):

    def get_object(self, id):
        try:
            return Ordinazione.objects.get(id=id)

        except Ordinazione.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get (self, request, id):
        Ordinaziones = self.get_object(id)
        serializer = OrdinazioneSerializer(Ordinaziones)
        return Response(serializer.data)

    def put(self, request, id):
        ordine = self.get_object(id)
        serializer = OrdinazioneSerializer(ordine, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete (self, request, id):
        article = self.get_object(id)
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)