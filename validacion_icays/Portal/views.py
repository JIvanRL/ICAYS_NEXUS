from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')
def contacto(request):
    return render(request, 'contactos.html')
def servicios(request):
    return render(request, 'servicios.html')
def nosotros(request):
    return render(request, 'nosotros.html')