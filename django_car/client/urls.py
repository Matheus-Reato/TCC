from django.urls import path

from client import views


urlpatterns = [
    path('clients', views.client_manager,  name='client_manager'),
    path('clients/<int:id>', views.get_by_id, name='get_by_id'),
]
