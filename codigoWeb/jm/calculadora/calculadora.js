
var operacion=prompt("vamos a operar. elige una de estas operaciones: sumar, multiplicar, restar o dividir. Escribe la operacion que quieras en minusculas");


function suma(a,b){
alert("El resultado de la suma " +a+"+"+b+ " es "+(a+b));
}

function multiplicacion(a,b){
	alert("El resultado de la multiplicacion " +a+"*"+b+ " es " +(a*b));
}

function division(a,b){
	alert("El resultado de la división " +a+"/" +b+ " es " + (a/b));
}

function resta (a,b){
	alert("El resultado de la resta " + a +"-" +b+ " es "+ (a-b));
}


switch(operacion) {
		
		
    case 'sumar':
	 
	var a =prompt("introduce el primer miembro de la suma");
	var b=prompt("introduce el segundo miembro de la suma");
	suma(parseInt(a),parseInt(b));
        break;
		
			
    case 'restar':
			
	var a =prompt("introduce el primer miembro de la resta");
	var b=prompt("introduce el segundo miembro de la resta");
	resta(parseInt(a),parseInt(b));
        break;
		
		
			
    case 'multiplicar':
			
	var a =prompt("introduce el primer miembro de la multiplicacion");
	var b=prompt("introduce el segundo miembro de la multiplicacion");
	multiplicacion(parseInt(a),parseInt(b));
        break;
			
		
	case 'dividir':
			
	var a =prompt("introduce el primer miembro de la division");
	var b=prompt("introduce el segundo miembro de la division");
	division(parseInt(a),parseInt(b));
	break;
			
	
}