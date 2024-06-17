//desarrollar un programa que permita registrar la temperatura minima y maxima
//durante los primeros 5 dias del mes
//calcular la temperatura promedio minima y maxima durante el periodo registrado.
//a su vez indicar cual fue la temperatura maxima registrada durante todos los dias 

temp_minimas = [0]
temp_maximas = [0]

//Pedir al usuario que ingrese las temperaturas mínimas y máximas durante los primeros 5 días
for dia in range(1, 6):
    temp_min = float(input(f"Ingrese la temperatura mínima del día {dia}: "))
    temp_max = float(input(f"Ingrese la temperatura máxima del día {dia}: "))
    
    //Agregar las temperaturas a las listas
    temp_minimas.append(temp_min)
    temp_maximas.append(temp_max)

//Calcular la temperatura promedio mínima y máxima
promedio_minima = sum(temp_minimas) / len(temp_minimas)
promedio_maxima = sum(temp_maximas) / len(temp_maximas)

//Determinar la temperatura máxima registrada durante todos los días
maxima_registrada = max(temp_maximas)

//Mostrar los resultados
print(f"Temperatura promedio mínima durante el período registrado: {promedio_minima:.2f}°C");
print(f"Temperatura promedio máxima durante el período registrado: {promedio_maxima:.2f}°C");
print(f"La temperatura máxima registrada durante todos los días fue: {maxima_registrada:.2f}°C");
