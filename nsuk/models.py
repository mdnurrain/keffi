from django.db import models

# Create your models here.
class Nsuktable(models.Model):
    Supervisors = models.CharField(max_length=100)
    Subject = models.CharField(max_length=50)
    Time = models.TimeField()
    Date = models.DateField() 

class Nsukindex(models.Model):
    Subject = models.CharField(max_length=50)
    Time = models.TimeField()
    Date = models.DateField()




