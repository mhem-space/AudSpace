var cadena=prompt("escribe una frase");
function info(cadena) { 
   if(cadena == cadena.toUpperCase()) {
    document.write(" est� formada s�lo por may�sculas");	
  }
  else if(cadena == cadena.toLowerCase()){
	document.write(" est� formada s�lo por minusculas");
  } else {
    document.write(" est� formada por ambas");
  }
 }
info(cadena);