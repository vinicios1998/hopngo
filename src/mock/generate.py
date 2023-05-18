import json
from datetime import datetime
import random

# JSON lists para as cidades
lisboa_list = {
    "places": [
       "Praça do Comércio",
        "Rossio",
        "Cais do Sodré",
        "Terreiro do Paço"
    ]
}

porto_list = {
    "places": [
        "Avenida dos Aliados",
        "Praça da Liberdade",
        "Ribeira",
        "Ponte Dom Luís I"
    ]
}

aveiro_list = {
    "places": [
        "Universidade de Aveiro",
         "Estação de Aveiro",
        "Glicínias Plaza"
        "Fórum Aveiro",
        "Mercado do Peixe"
    ]
}

# Função para criar objetos no formato desejado
def create_ride_object(id,user, from_city, from_location, to_city, to_location, available_seats, date, duration, price):
    return {
        "id":id,
        "user": user,
        "from": from_city,
        "fromLocation": from_location,
        "to": to_city,
        "toLocation": to_location,
        "availableSeats": available_seats,
        "date": date,
        "duration": duration,
        "price": price
    }

# Data fixa: 20 de maio de 2023

# Lista para armazenar os objetos de viagem
rides = []

# Criar objetos de viagem combinando lugares de diferentes cidades
trip_counter = 0
for lisboa_place in lisboa_list["places"]:
    for porto_place in porto_list["places"]:
        ride = create_ride_object(
            id=trip_counter,
            user=random.randint(1, 20),
            from_city="Lisboa",
            from_location=lisboa_place,
            to_city="Porto",
            to_location=porto_place,
            available_seats=random.randint(1, 4),
            date="20-05-2023",
            duration=random.randint(60, 80),
            price=random.randint(5, 10),
        )
        rides.append(ride)
        trip_counter+=1

for lisboa_place in lisboa_list["places"]:
    for aveiro_place in aveiro_list["places"]:
        ride = create_ride_object(
            id=trip_counter,
            user=random.randint(1, 20),
            from_city="Lisboa",
            from_location=lisboa_place,
            to_city="Aveiro",
            to_location=aveiro_place,
            available_seats=random.randint(1, 4),
            date="20-05-2023",
            duration=random.randint(60, 80),
            price=random.randint(5, 10),
        )
        rides.append(ride)
        trip_counter+=1

for porto_place in porto_list["places"]:
    for lisboa_place in lisboa_list["places"]:
        ride = create_ride_object(
            id=trip_counter,
            user=random.randint(1, 20),
            from_city="Porto",
            from_location=lisboa_place,
            to_city="Lisboa",
            to_location=porto_place,
            available_seats=random.randint(1, 4),
            date="20-05-2023",
            duration=random.randint(60, 80),
            price=random.randint(10, 15),
        )
        rides.append(ride)
        trip_counter+=1

for porto_place in porto_list["places"]:
    for aveiro_place in aveiro_list["places"]:
        ride = create_ride_object(
            id=trip_counter,
            user=random.randint(1, 20),
            from_city="Porto",
            from_location=lisboa_place,
            to_city="Aveiro",
            to_location=aveiro_place,
            available_seats=random.randint(1, 4),
            date="20-05-2023",
            duration=random.randint(40, 70),
            price=random.randint(3, 5),
        )
        rides.append(ride)
        trip_counter+=1

for aveiro_place in aveiro_list["places"]:
    for lisboa_place in lisboa_list["places"]:
        ride = create_ride_object(
            id=trip_counter,
            user=random.randint(1, 20),
            from_city="Aveiro",
            from_location=aveiro_place,
            to_city="Lisboa",
            to_location=lisboa_place,
            available_seats=random.randint(1, 4),
            date="20-05-2023",
            duration=random.randint(40, 70),
            price=random.randint(5, 10),
        )
        rides.append(ride)
        trip_counter+=1

for aveiro_place in aveiro_list["places"]:
    for porto_place in porto_list["places"]:
        ride = create_ride_object(
            id=trip_counter,
            user=random.randint(1, 20),
            from_city="Aveiro",
            from_location=aveiro_place,
            to_city="Porto",
            to_location=porto_place,
            available_seats=random.randint(1, 4),
            date="20-05-2023",
            duration=random.randint(40, 70),
            price=random.randint(3, 5),
        )
        rides.append(ride)
        trip_counter+=1

# Converter a lista de objetos em JSON
json_data = json.dumps(rides, indent=2)

with open("rides.json", "w") as file:
    file.write(json_data)
