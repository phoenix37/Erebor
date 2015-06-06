# -*- coding: utf-8 -*-
from django.contrib.auth.views import login, logout  # moduł logowania
from django.conf.urls import include, url
from django.contrib import admin
from todo.views import hello, current_datetime, hours_ahead
from tasks.views import index, edit


urlpatterns = [
    # Examples:
    # url(r'^$', 'todo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^hello/$', hello),
    url(r'^time/$', current_datetime),
    url(r'^time/plus/(\d{1,2})/$', hours_ahead),
    url(r'^$', index),
    url(r'^edit/(\d{1,2})/', edit),
    url(r'^accounts/login/$',  login),
    url(r'^accounts/logout/$', logout),
    url(r'^accounts/profile/$', index),
]
