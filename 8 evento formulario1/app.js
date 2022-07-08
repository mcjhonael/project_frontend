//^INFO: http://mialtoweb.es/eventos-ii-eventos-mas-importantes-en-javascript/

let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let formulario = document.getElementById("formulario");
let helperEmail = document.getElementById("helperEmail");

// obteer todo lo que escribes pero cuando salgas del input entonces recien te moestrara el valor q sea quedado

// inputEmail.onchange=function(){
//     console.log(inputEmail.value);
// }

//cuando suelte el boton del teclado  alli se despira el evento pero previo a eso cuando nosotros tecleamos para k se vea lo que escribimos presionamos se guarda la tecla y soltamos => recien se muestra en pantalla esa letra
// inputEmail.onkeyup=function(){
// console.log(inputEmail.value);
// }

// es lo mismo pero arrevez  cuando presionemo de arriba a bajo la tecla recien saltara el evento x lo tanto alli ocurre el evento en el anterior cuando sueltas el boton recien ocurre el evento
// inputEmail.onkeydown=function(){
// console.log(inputEmail.value);
// }

// aqui vamos a empezar a realizar el ejercicio
/**
 * creando el metodo de validacion de correo
 */

const validarEmail = function (email) {
  //valdiar si es un correcto valido osea con estructura de un correo
  let regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //muestra true o false si comprende la expresion regular o no
  //verificar si cumple o no el formato de un correo
//   console.log(regexEmail.test(email));
  if (regexEmail.test(email) === false || inputEmail.value==="") {
    helperEmail.removeAttribute("hidden");
    helperEmail.innerText = "Usuario incorrecto";
    helperEmail.classList.add("text-danger");
    inputEmail.classList.add("input-danger");
  } else {
    // verfica si el correo existe o no en nuestra DB
    let resultados = usuarios.filter(function (objUsuario) {
      if (objUsuario.correo === email) {
        return objUsuario.correo;
      }
    });
    console.log(resultados.length);
    //si es mayor a cero kiere decir que ya esta siendo usado ese correo
    if (resultados.length>0) {
        helperEmail.removeAttribute("hidden");
        helperEmail.innerText = "Usuario ya esta siendo usado"
        helperEmail.classList.add("text-danger")
        inputEmail.classList.add("input-danger")
    }else{
        helperEmail.removeAttribute("hidden");
        // helperEmail.removeAttribute("class")
        helperEmail.innerText = "Usuario disponible"
        helperEmail.classList.add("text-success")
        inputEmail.classList.add("input-success")
    }
  }
};
inputEmail.onkeyup = () => {
  validarEmail(inputEmail.value);
};

//enviaremos los datos x el evento submit no por el bottom dandole un evento 
//el evento formulario.onsubmit se ejecuta cuando se hace submit en el formulario
//no cuando al boton se pongo un evento

//si el boton de envio no es submit entonces ese evento onsubmit no se dispara
// si al boton no le pones type="submit" entonces entendera que es submit x defecto

formulario.onsubmit = (e) => {
    e.preventDefault();
    console.log("hola submit")
    //lo que siempre aremos es crear un objeto y mandarle recien al servidor los datos
    let objetoUsuario={
        usuario:inputEmail.value,
        password:inputPassword.value
    }
    console.log(objetoUsuario)
}