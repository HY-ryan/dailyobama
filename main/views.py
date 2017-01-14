from django.shortcuts import render, get_object_or_404, redirect, render_to_response
from django.utils import timezone
import json

from .models import Image

# Create your views here.

def index(request):
    imgArr = []
        
    img = Image.objects.all()
    imgArr = json.dumps(list(img.values_list('dailyImage', flat=True)))


    
    
    return render(request, 'index.html', {'image':img, 'imgArr':imgArr})
