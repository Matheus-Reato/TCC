from django.urls import path
from . import views

urlpatterns = [
    path('cars', views.car_manager,  name='car_manager'),
    path('cars/<int:id>', views.get_by_id, name='get_by_id'),
]
