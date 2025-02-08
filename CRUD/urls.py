
from django.urls import path
from .views import getTasks, createObject, details#, createTask, task_detail

urlpatterns = [
    path('skills/', getTasks, {'table_name': 'ProgrammingSkills'}, name='getSkills'), #SHORTCUT
    path('projects/', getTasks, {'table_name': 'PersonalProjects'}, name='getSkills'), #SHORTCUT
    path('<str:table_name>/', getTasks, name='getAnyTasks'),
    path('<str:table_name>/create/', createObject, name='createObject'),
    path('<str:table_name>/<int:pk>/', details, name='details'),
    # path('skills/create/', createTask, name='create_tasks'),
    # path('skills/<int:pk>/', task_detail, name='task_detail'),
]
