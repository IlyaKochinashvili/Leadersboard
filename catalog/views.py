from django.shortcuts import render

from catalog.models import Person


# Create your views here.

def index_view(request):
    persons = Person.objects.order_by('-points')[:10]
    context = {'persons': persons, }
    return render(request, 'index.html', context)


