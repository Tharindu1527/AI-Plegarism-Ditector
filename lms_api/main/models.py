from django.db import models #this is create database structure

# Lecturer Model
class Lecturer(models.Model):
    full_name = models.CharField(max_length=100) #if don't use max_length we can't access charfields
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    department = models.CharField(max_length=100)
    mobile_no = models.CharField(max_length=20)
    address = models.TextField()

    class Meta :  #this use for change our models names (Sort using Alphebatic order)
        verbose_name_plural = "1 . Lecturer"

#Course Category Model
class CourseCategory(models.Model):
    title = models.CharField(max_length=150) #if don't use max_length we can't access charfields
    description = models.TextField()

    class Meta :
        verbose_name_plural = "2 . Course Categories"
    
    def __str__(self):
        return self.title

#Course Model
class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete = models.CASCADE) #when delete course category then autonimously delete course
    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE)
    title = models.CharField(max_length=150) #if don't use max_length we can't access charfields
    description = models.TextField()

    class Meta :
        verbose_name_plural = "3 . Course"

# Student Model
class Student(models.Model):
    full_name = models.CharField(max_length=100) #if don't use max_length we can't access charfields
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    department = models.CharField(max_length=100)
    mobile_no = models.CharField(max_length=20)
    address = models.TextField()
    interested_categories = models.TextField()

    class Meta :
        verbose_name_plural = "4 . Student"