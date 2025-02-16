
from rest_framework import serializers
from .models import ProgrammingSkills, PersonalProjects, ExperienceMap

class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingSkills
        fields = '__all__'

class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalProjects
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceMap
        fields = '__all__'
