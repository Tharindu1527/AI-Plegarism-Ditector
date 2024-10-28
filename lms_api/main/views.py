from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import LecturerSerializer
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions #if want to access to data must want cedentials
from . import models

#we use generics method to get post and delete functions.when we useprevious method using API view then we have to mension all input Fields

class LecturerList(generics.ListCreateAPIView):
    queryset = models.Lecturer.objects.all()
    serializer_class = LecturerSerializer
    permission_classes = [permissions.IsAuthenticated]

class LecturerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Lecturer.objects.all()
    serializer_class = LecturerSerializer
    permission_classes = [permissions.IsAuthenticated]