from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    registrationPlate = serializers.CharField(source='registration_plate')

    class Meta:
        model = Car
        fields = ['id', 'brand', 'model', 'year', 'color', 'registrationPlate']
