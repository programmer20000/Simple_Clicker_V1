from django.shortcuts import render


def clicker(request):
    context = {
        'title': 'Clicker'
    }
    return render(request=request, template_name='clicker_app/clicker.html',context=context)
