const inputCodigo = document.getElementById("inputCodigo");
const inputNombre = document.getElementById("inputNombre");
const tbody = document.getElementById("tbody");
const formulario = document.getElementById("formulario");
const mensaje=document.getElementById("mensaje")
const table=document.getElementById("table")

//cuando es una valor nada si podemos obviar la inicializacion pero cuando ya es una array de valores si o si debemos inicializarlo si no como guiardariamos los valores denro del array si este no existiece
let productos = [];

const llenarProductos = function (products) {
  let contenido = "";
  products.forEach((objProducts, i) => {
    contenido += `<tr>
		<td>${i + 1}</td>
			<td>${objProducts.codigo}</td>
			<td>${objProducts.nombre}</td>
		</tr>`;
    tbody.innerHTML = contenido;
  });
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  let objProducto = {
    codigo: inputCodigo.value,
    nombre: inputNombre.value,
  };
  productos.push(objProducto);

  //?una vez obteniendo el valor y guardarlo en un arreglo lo que debemos hacer es guardarlo en nuestro localSotrage recibe 1era parametro como string y el 2do tbm los 2 deben ser string clave y valor

  //?convierte un objeto o array en un string
  //?para encontrar donde estan las variables creadas en el storage entramos en a consola y aplicacion/ almacenamiento local o almacenamiento session dependiendo donde lo guardaste
  let productosString = JSON.stringify(productos);
  window.localStorage.setItem("listaproductos", productosString);
  llenarProductos(productos);
};

//^ AHORA POR QUE CREAMOS ESTA FUNCION DE VERIFICAR SI HAY O NO DATOS GUARDADOS EN STORAGE Y ES FUNCION DEBE LLAMAR APENAS EL NAVEGADOR SE ACTUALIZE XK NECESITA LLENAR ESA TABLA CON LOS DATOS QUE TIENE GUARADO
const verificarStorage=function(){
	let productosStorage=window.localStorage.getItem("listaproductos")
	// si el resultado es de tipo objeto normal podemos considerar sin comillas como un string si no como esta en consola
	console.log(typeof productosStorage)
	if (productosStorage){
		//?si hay elementos entonces debemos convertir nuestro string => json |!! array
		let productosJSON=JSON.parse(productosStorage)
		table.removeAttribute("hidden")

		// llenar los porductos alas tablas
		llenarProductos(productosJSON)
	}else{
		table.setAttribute("hidden","hidden")
		mensaje.innerHTML=`<h2>NO EXISTEN PRODUCTOS</h2>`
	}

}
//* para eliminar el localStorage
//* window.localStorage.removeItem("name_key")
//?metodo que se va ejecutar siempre
verificarStorage()

//? recuerda que productos esta inicializado con [] vacio entonces que cuando ejecuten otra vez este archivo nuevamente se pondra a vacio