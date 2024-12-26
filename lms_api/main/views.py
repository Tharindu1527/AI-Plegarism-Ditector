from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import LecturerSerializer,CategorySerializer
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions #if want to access to data must want cedentials
from . import models
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .serializers import LecturerSerializer

#we use generics method to get post and delete functions.when we useprevious method using API view then we have to mension all input Fields

class LecturerList(generics.ListCreateAPIView):
    queryset = models.Lecturer.objects.all()
    serializer_class = LecturerSerializer
    #permission_classes = [permissions.IsAuthenticated]

class LecturerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Lecturer.objects.all()
    serializer_class = LecturerSerializer
    #permission_classes = [permissions.IsAuthenticated]
 
@csrf_exempt  
def  lecturer_login(request):
    email=request.POST['email']
    password=request.POST['password']
    lecturerData=models.Lecturer.objects.get(email=email,password=password)
    if lecturerData:
        return HttpResponse({'bool' :'True'})
    else:
            return JsonResponse ({'bool':False})


class CategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CategorySerializer
    #permission_classes = [permissions.IsAuthenticated]
