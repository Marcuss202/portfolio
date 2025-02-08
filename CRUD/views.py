
from django.shortcuts import render
from django.apps import apps
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ProgrammingSkills, PersonalProjects
from .serializers import SkillsSerializer, PersonalSerializer

SERIALIZER_MAPPING = {
    'ProgrammingSkills': SkillsSerializer,
    'PersonalProjects': PersonalSerializer,
}

@api_view(['GET'])
def getTasks(request, table_name):
    try:
        # Dynamically get the model based on the URL
        model = apps.get_model('CRUD', table_name)
        if not model:
            return Response({"error": "Invalid table name"}, status=status.HTTP_400_BAD_REQUEST)

        # Get the correct serializer for this model
        serializer_class = SERIALIZER_MAPPING.get(table_name)
        if not serializer_class:
            return Response({"error": "No serializer found for this model"}, status=status.HTTP_400_BAD_REQUEST)

        # Fetch all objects from that model
        tasks = model.objects.all()
        serializer = serializer_class(tasks, many=True)
        return Response(serializer.data)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(['POST'])
# def createTask(request):
#     serializer = TaskSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)


# @api_view(['GET', 'PUT', 'DELETE'])
# def task_detail(request, pk):
#     try:
#         tasks = ProgrammingSkills.objects.get(pk=pk)
#     except ProgrammingSkills.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
#     if request.method == 'GET':
#         serializer = TaskSerializer(tasks)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
#     elif request.method == 'PUT':
#         serializer = TaskSerializer(tasks, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
#     elif request.method == 'DELETE':
#         tasks.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

