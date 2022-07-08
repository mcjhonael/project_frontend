let body = document.querySelector("body");
let header = document.querySelector("header");

body.style.backgroundColor = "#444";

//retorna una array de las clases que tiene ese elemento
// con el classList tiene metodos como de un crud algo asi
header.classList;

//permite agregar 1 o muchas clases
header.classList.add("codigo", "codigo2");

//permite eliminar 1 o mas clases
header.classList.remove("codigo", "codigo2");

// busca si la clase que estamos indicando existe en nuestro elmento header retorna true false
console.log(header.classList.contains("hola"));

//permite reemplazar una clase por otra
header.classList.replace("hola", "pacolito");

console.log(header.classList);

console.log(body);

header.classList.add("header");

let seccion1 = document.querySelector(".seccion1");

console.log(seccion1);

// para conocer el tamanio del elemento
console.log(`alto del elemento: ${seccion1.clientHeight}`);
console.log(`ancho del elemento: ${seccion1.clientWidth}`);

//parte superior del elemento seccion1 hasta el viewport
console.log(`pixeles dede top .seccion1 ${seccion1.offsetTop}`);

//parte del costado del elemento de la izquiera desde el elemento

console.log(`pixeles desde el izquierda ${seccion1.offsetLeft}`);

//elemento.scrollTop => Devuelve la cantidad de pixeles que el elemento lleva como scroll interno
// no se puede hacer scroll xk el elemento seccion1 no tiene scroll el que tiene es el html ese si se scrolea
//debo hacer que la imagen cresca cuando haga scroll
console.log(`seccion1 scrollTop: ${seccion1.scrollTop}`)

let html = document.querySelector("html");

//nuestra cuantos pixeles hay cuando hacen scroll el elemento del html
console.log(html.scrollTop)

// entonces una vez que ya sabes que cuanto va bajar en px entonces debemos hacer la magia que cuando bajo capture el scroll y la imagen se agrande
let img=document.querySelector("img")

body.onscroll=function(){
    console.log(html.scrollTop)
    img.style.height=html.scrollTop+"px";
    //si es mayor de 200px que se quede alli y si no que se expanda pero no mayor a 200px
    if (html.scrollTop < 200){
        img.style.height=html.scrollTop;
    }
    else{
        img.style.height="200px"
    }
}