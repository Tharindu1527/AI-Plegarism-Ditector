from rest_framework import serializers #transform data to JSON
from . import models

class LecturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Lecturer
        fields = ["id","full_name","email","password","qualification","department","mobile_no","address"]