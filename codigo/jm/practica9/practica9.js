var cadena=prompt("escribe una frase");
function info(cadena) { 
   if(cadena == cadena.toUpperCase()) {
    document.write(" está formada sólo por mayúsculas");	
  }
  else if(cadena == cadena.toLowerCase()){
	document.write(" está formada sólo por minusculas");
  } else {
    document.write(" está formada por ambas");
  }
 }
info(cadena);