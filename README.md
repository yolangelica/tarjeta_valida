##Tarjeta de Credito Valida
-Para validad si los numeros ingresados de una Tarjeta de Credito son validos o no, primero:
-Declaro una funcion llamada isValidCard(numberCard), la que va a contener todo el proceso
- Con un prompt solicito los numeros de la tarjeta del cliente y guardare este dato en:var numberCard
-Por medio de un for iterar de forma inversa la extencion del numero de la tarjeta
-Declaro variable rever para guardar mis  numeros invertidos
-Pusheo los numeros invertidos a mi variable array vacia
-Por medio de un for iterar los  numeros, para identificar las posiciones pares
- Guardar los numeros pares en variable parPosition 
- Si los numeros de las posiciones pares son mayores a 10 --> se suman sus digitos(parPosition >=10)
 ejemplo de 11 debo sumar 1+1 = 2, para realizar esta operacion se puede utilizar la siguiente formula (x-9) ya que cualquier numero al que se le aplique la resta de 9 entrega el mismo resultado que si se sumaran sus digitos.
 - Luego modifico la  variable array y guardo la suma de los digitos, dato que acabo de obtener por la formula (x-9)
 -En array[j]=sum   modifico la  variable array y guardo la suma de los digitos(nuevos pares)
 -Con un nuevo for itero sobre los numeros impares y sobre los nuevos numeros pares( resultado de la suma entre digitos)
 -Si el resto de 10 igual a cero , enviar una alerta con "Tarjeta  Valida"
 - Si no, (%) enviar alerta "Tarjeta Invalida".
