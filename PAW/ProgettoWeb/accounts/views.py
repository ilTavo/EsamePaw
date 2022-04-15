from distutils import errors
from Ordinazioni.models import Ombrellone
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from cryptography.fernet import Fernet

class ListUsers(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        usernames = [user.username for user in User.objects.all()]
        return Response(usernames)
        
class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        ombrellone = Ombrellone.objects.get(user=user)
        ##Cryto il token per salvarlo nella local storage##
       ## key = Fernet.generate_key()      
       ## fernet = Fernet(key)
       ## kei = token.key   
        ##secretToken = fernet.encrypt(kei.encode())
        ##decMessage = fernet.decrypt(secretToken).decode()
        return Response({
            'token': token.key,
            'user_id': user.username,
            'fine_prenot':ombrellone.data_reset,
            'note':ombrellone.note
            
        })