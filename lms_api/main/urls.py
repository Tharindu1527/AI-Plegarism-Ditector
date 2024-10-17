from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('lecturer/', views.LecturerList.as_view()),
    path('lecturer/<int:pk>/', views.LecturerDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)