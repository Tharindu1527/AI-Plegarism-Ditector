from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import LecturerSerializer,CategorySerializer,CourseSerializer
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
def lecturer_login(request):
    email = request.POST['email']
    password = request.POST['password']
    try:
        lecturerData = models.Lecturer.objects.get(email=email, password=password)
        return JsonResponse({
            'bool': True,
            'lecturer_id': lecturerData.id
        })
    except models.Lecturer.DoesNotExist:
        return JsonResponse({'bool': False})
    
class CategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CategorySerializer
    #permission_classes = [permissions.IsAuthenticated]

class CourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer

    def perform_create(self, serializer):
        print("Creating course with data:", self.request.data)  # Add this debug line
        serializer.save()
        return Response({'bool': True})
    #permission_classes = [permissions.IsAuthenticated]
# specific lecturer
class LecturerCourseList(generics.ListAPIView):
    serializer_class = CourseSerializer

    def get_queryset(self):
        lecturer_id = self.kwargs['lecturer_id']
        print(f"Fetching courses for lecturer: {lecturer_id}")  # Debug line
        return models.Course.objects.filter(lecturer_id=lecturer_id)