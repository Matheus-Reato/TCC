from django.db import models

class Client(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=False, null=False)
    cpf = models.CharField(max_length=11, blank=False, null=False)
    phone_number = models.CharField(max_length=12, blank=False, null=False)


    class Meta:
        db_table = 'client'

    def __str__(self):
        return f"{self.name} {self.cpf} ({self.phone_number})"
    