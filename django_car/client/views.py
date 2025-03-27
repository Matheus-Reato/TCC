from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from client.serializers import ClientSerializer
from .models import Client

@api_view(['GET', 'PUT', 'DELETE'])
def get_by_id(request, id):

    try:
        client = Client.objects.get(pk=id)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ClientSerializer(client)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = ClientSerializer(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'DELETE':
        try:
            client.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET','POST'])
def client_manager(request):

    if request.method == 'GET':
        clients = Client.objects.all().order_by('id')                     
        serializer = ClientSerializer(clients, many=True)      
        return Response(serializer.data)

    if request.method == 'POST':
        new_client = request.data 
        serializer = ClientSerializer(data=new_client)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
