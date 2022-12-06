var numero=prompt("escribe un numero");
function cambiarNumeroPorLetras (numero) {
	if (numero%2 === 0) {
		document.write("El numero " + numero + " es par")
	} else {
	 document.write("El numero " + numero + " es impar")
	}
}

cambiarNumeroPorLetras(numero)