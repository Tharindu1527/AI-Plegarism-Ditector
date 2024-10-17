from django.contrib import admin
from . import models

#register all models inside the admin pannel

admin.site.register(models.Lecturer)
admin.site.register(models.CourseCategory)
admin.site.register(models.Course)
admin.site.register(models.Student)

