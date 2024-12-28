from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

from django.conf import settings
from django.conf.urls.static  import static

urlpatterns = [
    #Lecturer 
    path('lecturer/', views.LecturerList.as_view()),
    path('lecturer/<int:pk>/', views.LecturerDetail.as_view()),
    path('lecturer-login',views.lecturer_login),
    #categoryy
    path('category/', views.CategoryList.as_view()),
    
    #course
    path('course/', views.CourseList.as_view()),
    
    #Lecturercourse
    path('lecturer-courses/<int:lecturer_id>', views.LecturerCourseList.as_view()),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)