from django.urls import path
from .views import getTasks, createTask, task_detail

urlpatterns = [
    path('table/', getTasks, name='get_tasks'),
    path('table/create/', createTask, name='create_tasks'),
    path('table/<int:pk>/', task_detail, name='task_detail')
]
