var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var DNI;
var letra;
DNI=prompt("Dame el numero de tu DNI ");
letra=prompt("ahora dame la letra de tu DNI");
if(DNI>99999999||DNI<0){
	alert("numero de DNI incorrecto");
	cancel;
}else if(DNI<99999999){
	var resto;
    resto=DNI%23;
}

if(letras[resto] == letra){
	alert("los datos introducidos son correctos")
} else if(letras[resto] != letra){
	alert ("los datos introducidos son incorrectos. La letra asignada para el DNI "+DNI+" sería la letra "+letras[resto]+" en vez de la "+letra)
}