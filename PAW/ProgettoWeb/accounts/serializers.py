from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User, Group

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        field = ['id','username','email','first_name','last_name']