# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from django.contrib import admin  # import modułu admina
import datetime
from django.utils import timezone


class Task(models.Model):
    user = models.ForeignKey(User)
    name = models.CharField(max_length=120)
    description = models.TextField()
    publication_date = models.DateTimeField('date published')
    STATUS_CHOICES = (
        ('TODO', 'TODO'),
        ('DOING', 'DOING'),
        ('DONE', 'DONE'),
        )
    state = models.CharField(max_length=5, choices=STATUS_CHOICES)

    def is_new(self):
        return self.publication_date >=\
            timezone.now() - datetime.timedelta(days=1)

    def __unicode__(self):
        return self.name

    class Meta:
        ordering = ['publication_date']

admin.site.register(Task)  # dodawanie zadań z poziomu panelu admina!!!
