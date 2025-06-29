from django.db import models
from client.models import Client
class Car(models.Model):
    id = models.BigAutoField(primary_key=True)
    brand = models.CharField(max_length=255, blank=False, null=False)
    model = models.CharField(max_length=255, blank=False, null=False)
    year = models.IntegerField(default=2025, null=False)
    color = models.CharField(max_length=50, blank=False, null=False)
    registration_plate = models.CharField(max_length=50, blank=False, null=False)
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='cars')

    class Meta:
        db_table = 'car'

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year}) - {self.color} - {self.registration_plate}"