let btnTitulo1 = document.getElementById("btnTitulo1");
let btnTitulo2 = document.getElementById("btnTitulo2");
let selectPeliculas = document.getElementById("selectPeliculas");
let btnSelect = document.getElementById("btnSelect");
let h1 = document.querySelector("h1");

//recuerda que hay propiedad de los elementos y metodos de los elemento que podemos buscar super interesante
// https://developer.mozilla.org/es/docs/Web/API/Element

//? 1ro propiedades de los elementos
//? 2do metodos de los elementos
//? 3ero eventos de los elementos
btnTitulo2.onclick = function () {
  //el innerText setea el contenido de la etiqueta a un valor solamente de string
  h1.innerText = "titulo mejorado";
};
btnTitulo3.onclick = function () {
  h1.innerHTML = "<h6>titulo letra chica</h6>";
};

btnSelect.onclick = () => {
  console.log("mira")
    selectPeliculas.removeAttribute("disabled");
    let contenido="";
    peliculas.forEach(objPelicula => {
        contenido +=`<option value="${objPelicula.id}">${objPelicula.title}</option>`
    });
    selectPeliculas.innerHTML=contenido;

};

//retorna el valor del atributo que estamos buscando
//element.getAttribute("atributo") extrae los valores del atributo del elemento
// console.log(h1.getAttribute("class"))

//retorna si tiene o no el atributo que le estamos pasando true/false
// console.log(h1.hasAttribute("class"));

//elimina por completo el atributo clase osea ya no existe
// console.log(h1.removeAttribute("class"))

//si tiene el atributo con sus propios valores entonces los setea y le coloca los nuevos atributos y si no tiene el atributo lo agrega con sus propios
// console.log(h1.setAttribute("id","pacolita"));

// console.log(h1);
