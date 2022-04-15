from django.urls import path
from .views import ProdottoDetails, ProdottoList, OrdinazioneList, OrdinazioneDetails


urlpatterns = [
    path('prodotti/', ProdottoList.as_view()),
    path('prodotti/<int:id>/', ProdottoDetails.as_view()),
    path('ordinazioni/', OrdinazioneList.as_view()),
    path('ordinazioni/<int:id>/', OrdinazioneDetails.as_view()),
  #  path('articles/<int:pk>/', article_details),
]   