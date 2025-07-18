from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Car
from rest_framework.response import Response
from rest_framework import status
from .serializers import CarSerializer

@api_view(['GET', 'PUT', 'DELETE'])
def get_by_id(request, id):

    if request.method == 'DELETE':
        try:
            Car.objects.filter(id=id).delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)

    try:
        car = Car.objects.get(pk=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CarSerializer(car)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = CarSerializer(car, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def car_manager(request):

    if request.method == 'GET':
        cars = Car.objects.all().order_by('id')                     
        serializer = CarSerializer(cars, many=True)      
        return Response(serializer.data)

    if request.method == 'POST':
        new_car = request.data 
        serializer = CarSerializer(data=new_car)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
