import json
from datetime import datetime
import random

# JSON lists para as cidades
lisboa_list = {
    "places": [
       "Praça do Comércio",
        "Rossio",
        "Cais do Sodré",
        "Terreiro do Paço",
        "Elevador de Santa Justa",
        "Parque Eduardo VII",
        "Avenida da Liberdade",
        "Estação do Oriente",
        "Praça Marquês de Pombal",
        "Largo do Carmo",
        "Jardim da Estrela",
        "Praça do Príncipe Real",
        "Miradouro de São Pedro de Alcântara",
        "LX Factory",
        "Mercado da Ribeira (Time Out Market)",
        "Parque das Nações",
        "Belém",
        "Chiado",
        "Bairro Alto",
        "Praça de Espanha"
    ]
}

porto_list = {
    "places": [
    "Avenida dos Aliados",
        "Praça da Liberdade",
        "Ribeira",
        "Ponte Dom Luís I",
        "Estação de São Bento",
        "Casa da Música",
        "Mercado do Bolhão",
        "Jardins do Palácio de Cristal",
        "Torre dos Clérigos",
        "Matosinhos (Zona da Praia)",
        "Foz do Douro (Praia)",
        "Estádio do Dragão",
        "Parque da Cidade",
        "Cedofeita",
        "Mercado Beira-Rio",
        "Praça Carlos Alberto",
        "Rua de Santa Catarina",
        "Fundação de Serralves",
        "Avenida da Boavista",
        "Parque das Camélias"
    ]
}

aveiro_list = {
    "places": [
          "Estação de Aveiro",
        "Praça da República",
        "Ponte dos Laços",
        "Fórum Aveiro",
        "Mercado do Peixe",
        "Sé de Aveiro",
        "Cais da Ribeira de Esgueira",
        "Jardim do Rossio",
        "Museu de Aveiro",
        "Praia da Barra",
        "Centro Cultural e de Congressos de Aveiro",
        "Ria de Aveiro",
        "Parque Infante D. Pedro",
        "Canal Central",
        "Universidade de Aveiro",
        "Parque de Santo António",
        "Capela de São Gonçalinho",
        "Farol da Barra",
        "Jardim do Bairro de Santiago",
        "Glicínias Plaza"
    ]
}

braga_list = {
    "places": [
           "Praça da República",
        "Sé de Braga",
        "Arco da Porta Nova",
        "Jardim de Santa Bárbara",
        "Estação Ferroviária de Braga",
        "Avenida Central",
        "Theatro Circo",
        "Santuário do Bom Jesus do Monte",
        "Santuário do Sameiro",
        "Parque da Ponte",
        "Praça do Município",
        "Parque de Exposições de Braga",
        "Mercado Municipal de Braga",
        "Museu dos Biscainhos",
        "Parque da Rodovia",
        "Universidade do Minho",
        "Braga Parque (Centro Comercial)",
        "Parque da Ponte de Santiago",
        "Avenida Liberdade",
        "Campo da Vinha"
    ]
}

# Função para criar objetos no formato desejado
def create_ride_object(user, from_city, from_location, to_city, to_location, available_seats, date, duration, price):
    return {
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
date = datetime(2023, 5, 20)

# Lista para armazenar os objetos de viagem
rides = []

# Criar objetos de viagem combinando lugares de diferentes cidades
user_counter = 0
for lisboa_place in lisboa_list["places"]:
    for porto_place in porto_list["places"]:
        ride = create_ride_object(
            user=user_counter,
            from_city="Lisboa",
            from_location=lisboa_place,
            to_city="Porto",
            to_location=porto_place,
            available_seats=random.randint(1, 4),
            date=date,
            duration=0,
            price=random.randint(5, 10),
        )
        rides.append(ride)
        user_counter += 1
count =0
for aveiro_place in aveiro_list["places"]:
    for braga_place in braga_list["places"]:
        ride = create_ride_object(
            user=user_counter,
            from_city="Aveiro",
            from_location=aveiro_place,
            to_city="Braga",
            to_location=braga_place,
            available_seats=4,
            date=date,
            duration=0,
            price=5
        )
        rides.append(ride)
        user_counter += 1

# Converter a lista de objetos em JSON
json_data = json.dumps(rides, indent=2)

# Imprimir a lista de objetos em formato JSON
print(json_data)
