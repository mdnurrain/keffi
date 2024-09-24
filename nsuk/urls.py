
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('login.html', views.login),
    path('supervisor.html', views.supervisor),
    path('timetable.html', views.timetable),
]
