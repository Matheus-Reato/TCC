from rest_framework import serializers
from .models import Client
from cars.serializers import CarSerializer

class ClientSerializer(serializers.ModelSerializer):
    cars = CarSerializer(many=True, read_only=True)

    class Meta:
        model = Client
        fields = ['id', 'name', 'cpf', 'phone_number', 'cars']