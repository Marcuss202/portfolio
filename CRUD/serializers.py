from rest_framework import serializers
from .models import ProgrammingSkills

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingSkills
        fields = '__all__'