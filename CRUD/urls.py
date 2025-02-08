
from django.urls import path
from .views import getTasks#, createTask, task_detail

urlpatterns = [
    path('<str:table_name>/', getTasks, name='getAnyTasks'),
    # path('skills/create/', createTask, name='create_tasks'),
    # path('skills/<int:pk>/', task_detail, name='task_detail'),
]
