var valores = [true, 5, false, "hola", "adios", 2];
var letras1 = valores[3].length ;
var letras2 = valores[4].length ;
if (letras1>letras2) {
	alert( "de estas dos palabras : adios y hola, el mayor numero de letras le pertenece a hola, con este numero:" + letras1);
} else {
	alert( "de estas dos palabras : adios y hola, el mayor numero de letras le pertenece a adios, con este numero:" + letras2);
}

if(letras1>letras2){
	alert(false)
}else if(letras2>letras1){
	alert(true)
}

var suma;
suma= valores[1]+ valores[5];
alert("2+5="+suma);

var resta;
resta= valores[5]-valores[1];
alert("5-2="+resta);

var multiplicación;
multiplicación= valores[5]*valores[1];
alert("5x2="+multiplicación);

var división;
división= valores[1]/valores[5];
alert("5:2="+división);

var resto;
resto= valores[1]%valores[5];
alert("resto de 5/2="+resto);