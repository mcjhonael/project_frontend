let btnGenerar = document.getElementById("btnGenerar");
let lista = document.getElementById("lista");

const llenarNumeros = function () {
  //otra manera creando un nodo
  let li = document.createElement("li");
  //el metodo trunc permite corta de la coma hacia la derecha
  let numeroAleatorio = Math.trunc(Math.random() * (100 - 1) + 1);
  // anadiendo el valor al nodo
  li.innerHTML = `<li>${numeroAleatorio}</li>`;
  
  //agregando ese nodo nuevo al nodo padre
  lista.appendChild(li);
  li.classList.add("item-color");
  li.onclick=()=>{
      alert(`${numeroAleatorio}`)
  }
};
btnGenerar.onclick = function () {
  llenarNumeros();
};
