var jugador = false; // Se sabe si es el turno del jugador 1 o 2
var simbolo = ""; // Se sabe si toca el simbolo del jugador 1 o 2
var simbolo1 = "X"; // Simbolo del jugador 1
var simbolo2 = "O"; // Simbolo del jugador 2
var totito = []; // Matriz que sirve para llevar el control de las casillas usadas
var cells = []; // Matriz usada para otorgarle el evento click a los divs
var eleccion; // Se lleva el control de si el "0" cambia a "-1" o "1"
var cont = true; // Evita errores de otorgar a los divs de nuevo el evento click

boton.addEventListener("click", button); // Se usa el boton para iniciar el juego
boton.innerHTML = "Comenzar"; // Ayuda al usuario para saber como comenzar

function button(){
	boton.innerHTML = "Reiniciar"; // Se cambia el texto del botón para que el usuario sepa que puede reinicar el juego
	totito = [  // Se inicializa la matriz 
		[0, 0, 0], 
		[0, 0, 0],
		[0, 0, 0]
	];

	for(var i = 0; i < 9; i++){ // Se crean los eventos para los div
		if (cont) { // Al reinicar ya no se crearan de nuevo los eventos
			cell = document.getElementById("cell-" + i);
			cells.push(cell);
			evento(cell, i);
		};
		cells[i].value = true;  // Se toman los divs como si no se han oprimido
		cells[i].innerHTML = ""; // Se vacian los divs
	}
	cont = false; // Si se reinicia ya no se crearan de nuevo los eventos
	turno.innerHTML = "Turno jugador 1"; // Ayuda visual para saber el turno
	jugador = false; // Se cambia a opcion de jugador 1
}

function evento(cell, i){
	cell.addEventListener("click", function(){ // Se les da el evento click a los divs
		if (cells[i].value){ // Si ya fueron oprimidos no se entrará
			cells[i].value = false; // Evita que se vuelva a entrar
			presionado(i); // Ayuda a saber que div fue oprimido
		};		
	});
}


function presionado(num){
	turn(); // Se cambia de turno y de simbolo
	elegido(num); // Se sabe que div fue oprimido y visualmente aparece el simbolo del jugador
	revisar(); // Se revisa si hay un ganador
}

function elegido(num){
		var celda = document.getElementById("cell-" + num); // Se le obtiene el div oprimido
		celda.innerHTML = simbolo; // Se le cambia el simbolo al div 
		if (num < 3) { // Se le cambia el valor a la matriz depeniendo del div oprimido
			totito[0][num]+= eleccion;
		} else{
			if (num > 2 && num < 6) {
				totito[1][num - 3]+= eleccion;
			} else{
				if (num > 5 && num < 9) {
					totito[2][num - 6]+= eleccion;
				};
			};
		};
}

function revisar(){
	var ganador = 0; // Si inicializa el contador para saber si hay un ganador
	var conta = true; // Se sabe el lado que toca revisar
	var o = 0; // Se inicializa una variable para el for
	for (var j = 0; j < 2; j++) { // Se revsa si hay un ganador horizontalmente
		if (j == 1) { 
			conta = false; 
		};
		for(var i = 0; i < 3; i++){
			ganador = 0;
			for(o = 0; o < 3; o++){
				if (conta) {
					ganador += totito[i][o];
				}else{
					ganador += totito[o][i];
				};
				felicidades(ganador); // Se entra a la funcion para conocer si hay un ganador
			};
		};
	};
	o = 0;
	ganador = 0;
	for (var i = 0; i < 3; i++) { 
		ganador += totito[i][o];
		felicidades(ganador); // Se entra a la funcion para conocer si hay un ganador
		o++;
	};
	o = 0;
	ganador = 0;
	for (var i = 2; i > -1; i--) {
		ganador += totito[i][o];
		felicidades(ganador); // Se entra a la funcion para conocer si hay un ganador
		o++; 
	};
}

function turn(){
	if (jugador) { // Jugador 2
		turno.innerHTML = "Turno jugador 1"; // Ayuda visual para saber de quien es el turno
		simbolo = simbolo2; // Se cambia de simbolo
		jugador = false; // Se cambia de jugador
		eleccion = -1; // Se cambia el valor que usar en la matriz "totito"
	} else{ // Jugador 1
		turno.innerHTML = "Turno jugador 2"; // Ayuda visual para saber de quien es el turno
		simbolo = simbolo1; // Se cambia de simbolo
		jugador = true; // Se cambia de jugador
		eleccion = 1; // Se cambia el valor que usar en la matriz "totito"
	};
}

function felicidades(ganador){
	if(ganador == 3){ // Si la variable encontró tres "1s" en un for, el jugador 1 ganó
		alert("Ganador jugador 1"); // Se avisa que el jugador 1 ganó
		button(); // Todo se reinicia
	}else{
		if(ganador == -3){ // Si la variable encontró tres "-1s" en un for, el jugador 2 ganó
			alert("Ganador jugador 2"); // Se avisa que el jugador 2 ganó
			button();
		};
	};
}