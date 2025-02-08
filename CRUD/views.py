from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ProgrammingSkills
from .serializers import TaskSerializer

@api_view(['GET'])
def getTasks(request):
    tasks = ProgrammingSkills.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createTask(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def task_detail(request, pk):
    try:
        tasks = ProgrammingSkills.objects.get(pk=pk)
    except ProgrammingSkills.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = TaskSerializer(tasks)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        serializer = TaskSerializer(tasks, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == 'DELETE':
        tasks.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)