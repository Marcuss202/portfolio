
from django.urls import path
from .views import getTasks, createObject, details

urlpatterns = [
    path('<str:table_name>/', getTasks, name='getAnyTasks'),
    path('<str:table_name>/create/', createObject, name='createObject'),
    path('<str:table_name>/<int:pk>/', details, name='details'),
]
