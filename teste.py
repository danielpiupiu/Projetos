import random

def gerar_numeros_unicos(quantidade, maximo):
    numeros = set()
    while len(numeros) < quantidade:
        numeros.add(random.randint(1, maximo))
    return sorted(numeros)

quantidade = int(input("Quantos números você deseja gerar? "))
maximo = 50

if 1 <= quantidade <= maximo:
    numeros_gerados = gerar_numeros_unicos(quantidade, maximo)
    print("Números gerados em ordem crescente:", numeros_gerados)
else:
    print("Número inválido. Por favor, escolha um número entre 1 e", maximo)
