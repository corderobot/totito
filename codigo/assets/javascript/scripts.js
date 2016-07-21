// var boton = document.getElementById("saludar");
var jugador = false; // Se sabe si es el turno del jugador 1 o 2
var simbolo = ""; // Se sabe si toca el simbolo del jugador 1 o 2
var simbolo1 = "X"; // Simbolo del jugador 1
var simbolo2 = "Y"; // Simbolo del jugador 2
var totito = [];
var cells = [];

boton.addEventListener("click", button);

function button(){
	cells = [];
	totito = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];

	for(var i = 0; i < 9; i++){
		cell = document.getElementById("cell-" + i);
		cells.push(i);
		console.log(cells);
		cell.value = "";
		cell.addEventListener("click", function(){
			if (cell.value == ""){
				console.log("Dentro");
				presionado(7);
			};
		});
	}
	turno.innerHTML = "Turno jugador 1"
	jugador = false;
}


function presionado(num){
	turn();
	elegido(num);
	revisar();
}

function elegido(num){
		var celda = document.getElementById("cell-" + num);
		console.log(celda);
		celda.innerHTML = simbolo;
		celda.value = 9;
		console.log("Valor: " + celda.value);
		if (num < 3) {
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
		console.log(totito[1]);
}

function revisar(){
	var ganador = 0;
	var o = 0;
	for (var i = 0; i < 3; i++) {
		ganador += totito[i][o];
		felicidades(ganador);
		o++;
	};
	o = 0;
	ganador = 0;
	for (var i = 2; i > -1; i--) {
		ganador += totito[i][o];
		felicidades(ganador);
		o++;
	};
	for(var i = 0; i < 3; i++){
		ganador = 0;
		for(o = 0; o < 3; o++){
			ganador += totito[i][o];
			felicidades(ganador);
		};
	};
	for(var i = 0; i < 3; i++){
		ganador = 0;
		for(o = 0; o < 3; o++){
			ganador += totito[o][i];
			felicidades(ganador);
		};
	};
}

function turn(){
	if (jugador) { // Jugador 2
		turno.innerHTML = "Turno jugador 1";
		simbolo = simbolo2;
		jugador = false;
		eleccion = -1;
	} else{ // Jugador 1
		turno.innerHTML = "Turno jugador 2";
		simbolo = simbolo1;
		jugador = true;
		eleccion = 1;
	};
}

function felicidades(ganador){
	if(ganador == 3){
		alert("Ganador jugador 1");
	}else{
		if(ganador == -3){
			alert("Ganador jugador 2");
		};
	};
}