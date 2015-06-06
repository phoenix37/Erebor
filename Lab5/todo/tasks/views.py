from django.shortcuts import render, get_object_or_404, redirect
from tasks.models import Task
from tasks.forms import TaskForm


def index(request):
    states = [x[0] for x in Task.STATUS_CHOICES]
    tasks = Task.objects.all()
    return render(request, 'index.html', {'states': states, 'tasks': tasks})


def edit(request, pk):
    task = get_object_or_404(Task, pk=pk)
    if request.method == "POST":
        form = TaskForm(request.POST, instance=task)
        if form.is_valid():
            task = form.save(commit=False)
            task.author = request.user
            task.save()
            return redirect('tasks.views.index')
    else:
        form = TaskForm(instance=task)
    return render(request, 'edit.html', {'form': form, 'task': task})
