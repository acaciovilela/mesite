from django.shortcuts import render
from dtlblog.models import Post

# Create your views here.
def index(request):
    posts = Post.objects.filter(status=1).order_by('-created_on')
    return render(request, 'home/index.html', {'posts': posts})
