#!/bin/bash

echo "Aguardando o PostgreSQL ficar disponível..."
while ! nc -z db 5432; do
  sleep 1
done
echo "PostgreSQL está pronto!"

python manage.py migrate

python manage.py runserver 0.0.0.0:8000