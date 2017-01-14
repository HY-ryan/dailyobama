from django.db import models

# Create your models here.

class Image (models.Model):
    dailyImage = models.ImageField(upload_to='obamaimg')
