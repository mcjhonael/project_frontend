//Capturar elementos por JQuery

//js
// let btnCambiarParrafo = document.getElementById("btnCambiarParrafo");

// $("") es una funcion que recibe el elemento que deseo seleccionar (capturar el elemento con JQuery)
// en jquery no hay necesidad de colocarlo en una variable si no asi nomas == mas abajo te muestro
let btnCambiarParrafo = $("#btnCambiarParrafo");

// lo que nos retorna es un elemento jquery x lo tanto ya no podemos usar los metodos de js ni elementos si no que debemos cambiar a jquery
// ojo no se puede mezclar js con jquery
console.log(btnCambiarParrafo);

//eventos en JQUERY
btnCambiarParrafo.click(() => {
  console.log("Holi");
});

//con el jq podemos buscar que acciones queremos tomar con el autocompletado (jqTextset)
$("#btnCambiarParrafo").click(function () {
  console.log("pacolitos");
  $("#btnCambiarParrafo").text("nuevo Texto");
});

//podemos colocar estilos
$("#btnCambiarNumero").click(function () {
  console.log("click numero");
  let random = (Math.random() * (47 - 0) + 0).toFixed(0);
  console.log(random);

  //aqui podemos crear un elemento asi e incluso colocando el valor
  let li = $(`<li>${random}</li>`);

  //una vez creado elemento y con su valor ya podemos agregarle a nuestro ul numero de esta manera
  $("#numeros").append(li);
});

//colocar estilos
$("#btnEstilosLi").click(() => {
  //es como usar SASS permite especificar que cosas hacer para agregar mas css solamente colocarmos .css() magia pura la misma manera para hacer las clases
  $("#numeros li").css("background-color", "#aaa").css("color","red");
});


//agregar una clase a un elemento

$("#formulario").addClass(formulario);