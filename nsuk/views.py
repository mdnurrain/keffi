from django.shortcuts import render
from .models import Nsuktable
from .models import Nsukindex


# Create your views here.
def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def supervisor(request):
    supervisors = Nsuktable.objects.all()
    return render(request, 'supervisor.html',  {'supervisors':supervisors})

def timetable(request):
    supervisors = Nsukindex.objects.all()
    return render(request, 'timetable.html', {'supervisors':supervisors})