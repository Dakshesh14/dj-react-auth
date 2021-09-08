from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('api', include('knox.urls')),
    path('api/register', RegisterAPI.as_view()),
    path('api/login', LoginAPI.as_view()),
    path('api/user', UserAPI.as_view()),
    path('api/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
