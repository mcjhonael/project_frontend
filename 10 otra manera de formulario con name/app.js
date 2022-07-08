const inputNombre=document.getElementById("inputNombre");
const inputApellido=document.getElementById("inputApellido");
const inputFecha=document.getElementById("inputFecha");
const formulario=document.getElementById("formulario");

const inputManana=document.getElementById("inputManana");
const inputTarde=document.getElementById("inputTarde");
const inputNoche=document.getElementById("inputNoche");


// es un objeto que va ir al servidor
let objFormulario={
    nombre:"",
    apellido:"",
    fecha:"",
    turno:"manana"
}

const actualizarObjFormulario=(e)=>{
    //el target es el elemento que a ha cambiado cuando le presionamos una letra muestra que input es el que has presionado
    //el target permite sabes en k input a sucedido el evento 
    console.log(e.target.value)

    //para poder actualizar un objeto antes ya debe estar inicializado
    objFormulario[e.target.name]=e.target.value
    console.log(objFormulario)
    
}

//solamente lo referenciamos xk hay una diferencia cuando se compile el archivo js y empieza de arriba abajo si tiene esto () altoke lo va ejecutar automaticamente pero cuando no le colocamos el () entonces only referenciamos indicando que cuando recien se haga onkeyup recien debe ejecutarse la funcion actualizarObjFormulario
inputNombre.onkeyup=actualizarObjFormulario
inputApellido.onkeyup=actualizarObjFormulario
inputFecha.onchange=actualizarObjFormulario

const changeRadio=(e)=>{
    objFormulario[e.target.name]=e.target.value

}

inputManana.onchange=changeRadio
inputTarde.onchange=changeRadio
inputNoche.onchange=changeRadio



formulario.onsubmit=function(e){
    e.preventDefault()
    console.log('Enviando datos al servidorsh')
    console.log(objFormulario)
}