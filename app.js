
// aplicar un Wyle
function isValidCard(numberCard){// declaro funcion 
	var numberCard= prompt("Ingresa el número de tu tarjeta");// se pregunta por los numeros de la tarjeta
	var array =[ ];
	for (var i = numberCard.length -1 ; i >= 0; i--){// for itera de forma inversa la extencion del numero
			var rever= parseInt(numberCard[i]);//declaro variable rever para guardar mis  numeros invertidos

			array.push(rever);
	}       //pusheo los numeros invertidos a mi variable array vacia

	var imparPosition = [];
  for (var j = 1; j < array.length ; j +=2) { 	//recorrer numeros para identificar las posiciones pares
			 var parPosition= array[j]*2; // variable parPosition guarda los numeros en posiciones pares
		 	 if ( parPosition >=10){		// si los n de las posiciones pares son mayores a 10 abajo se suman 
						sum = parPosition - 9;	// por medio de la formula (x -9) sumo los digitos para obtener un numero
						array[j]=sum;// modifico la  variable array y guardo la suma de los digitos(nuevos pares)
			 }   
			 
			 else {array[j]= parPosition;
			      }
			 var totalSum= 0;
			 for(var y= 0; y<array.length; y++){// itera sobre los numeros impares con los nuevos pares
			 	totalSum+= array[y];//sumar los digitos y nuevos digitos
			 }
		
		}
				if (totalSum %10== 0){// si el resto de 10 igual a cero
						alert ("Tarjeta  Valida");// alert  con informacion 
		}
				else {
				alert( "Tarjeta Invalida");// si el resto es !=10 alerta con informacion invalida
		}
	}

		isValidCard();




