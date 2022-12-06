function anade() {
  var elemento = document.createElement("li");
  var texto = document.createTextNode(prompt("escriba el elemento a añadir"));
  elemento.appendChild(texto);
 
  var lista = document.getElementById("lista");
  lista.appendChild(elemento);
 
  lista.innerHTML = lista.innerHTML + nuevoElemento;
}