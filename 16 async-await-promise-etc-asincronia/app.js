// /**
//  * Destructurar arreglos
//  */

// let nombres = ["Anita", "Lucio", "María", "Omar", "Fernanda"];
// //aqui estamos sacando los valores y guardandolos en una var
// let [a, b, c, d, e] = nombres;

// // console.log(e); //Fernanda
// // console.log(b); //Lucio

// //destructuramos solamente el 1er valor y el ultimo separados en ,
// let [ani, , , , fer] = nombres;
// // console.log(fer); //Fernanda
// // console.log(ani); //Anita

// // operador rest => ...
// // es como sacar una copia del contenido no de la direccion de memoria

// //siempre lo haciamos asi pero es una mala practica por que de esta manera estamos copiando la direccion de memoria osea la raiz de esa variable y si cambia los valores de nombresTemporales tambien cambiara el valor de nombres MUY MALA PRACTICA LO QUE DEBEMOS HACER ES UNA COPIA DE ESE ARRAY
// //  let nombresTemporales=nombres
// console.log("****");
// let [...nombresTemporal] = nombres;
// nombresTemporal[0] = "lorenzo";
// console.log(nombresTemporal);
// //vez que no se a modificado el array principal
// console.log(nombres);
// console.log("***");

// let [ele1, ele2, ...resto] = nombres;
// console.log(ele1);
// console.log(ele2);
// //esta variable resto tendra un mini arreglo de los datos restantes
// console.log(resto);
// // console.log(...resto);

// //cuando deseamos agregar un valor a nuestro array no podemos usar push en react si no debemos hacer esto sacar una copia add el valor y sacar otra copia
// //otra forma de add elementos

// //el operador REST siempre debe estar al final
// let nombresCopia = ["Juan", ...nombres];
// console.log(nombresCopia);
// console.log(nombres);

// //otra forma de sacar una copia cambiando la posicion de la copia normal y arriba tambien podemos hacer esa copia y add un elemento antes del operador REST

// let names=[...nombres]
// console.log(names)

// //para destructuracion de un arreglo x un funcion
// const dosPrimeros = ([a, b]) => {
//   console.log(a);
//   console.log(b);
// };

// dosPrimeros(nombres);

console.log("*********************************************");

// Destructuración de Objetos

let restaurant = {
	nombre: "El pollo real",
	tipo: "Pollería",
	aforo: 500,
	geo: {
		lat: -70,
		lng: -16,
		name: {
			pes: "pescadito",
			frito: "fritos",
		},
	},
};

// Creando una variable "nombre" que es copia de restaurant.nombre
//ya que no es como los array que tiene posiciones y podemos colocar a,b,c,d => debemos sacarlo por su clave
//para poder cambiar el nombre cogemos la clave:new_name
let {
	nombre,
	aforo: capacidad,
	tipo,
	geo: {
		lat,
		lng,
		name: { pes },
	},
} = restaurant;
console.log(nombre);
console.log(tipo);
console.log(capacidad);
console.log(lat);
console.log(restaurant.geo.lat);
console.log(pes);

let {
	geo: { lat: latitud, lng: longitud },
} = restaurant;
// console.log(geo);//error
console.log(latitud, longitud);

//recibe el objeto y los destructuramos para usar sus valores dentro de la funcion
const nombreYAforo = ({ nombre, aforo }) => {
	console.log(nombre, aforo);
};
nombreYAforo(restaurant);

//   forma correcta de copiar un objeto por completo
//cualquiera de las formas de hacer una buena copia de los datos de un objeto
let copiaRest = { ...restaurant };
let { ...copia2 } = restaurant;

//   console.log(copiaRest);
//   console.log(copia2)

const modificarAforo = (objRestaurant, nuevoAforo) => {
	//mandaremos una copia implicita osea que se sobre entiende de todos los valores de objRestaurant y si debajo colocamos claves que se repitan con valores diferentes lo que ara es sobre escribirlo
	//aforo lo andamos sobreescribiendo xk con ...objRestaurant ya esta aforo:5000 pero le mandamos de nuevo un nuevo valor aforo  y lo va sobreescribir recuerda que siempre debe estar entre {} xk es un objeto
	return { ...objRestaurant, aforo: nuevoAforo };
};

let restaurantGrande = modificarAforo(restaurant, 5000);
console.log(restaurantGrande);

/**
 * Ejemplo de destructuracion al estilo REACT!
 * el famoso hooks de useState
 */
const useState = (estadoInicial) => {
	let inicial = estadoInicial;
	const modificarEstado = (nuevoEstado) => {
		inicial = nuevoEstado;
	};

	return [inicial, modificarEstado];
};

const [state, setState] = useState("Jorge");
setState("nuevo estado");

/**asincronia en js
 * PROCESO SINCRONO
 * - proceso que se ejecuta 1 despues del otro
 * - un proceso espera al anterior  a que termine para empezar
 */
console.log("sincronia en js");

/**
 * setTimeout
 */
/**
 * UN PROCESO ASINCRONO POR QUE TENEMOS QUE APRENDER ESO DE LA ASINCRONIA XK MIRA SI BIEN SABES UN PROCESO ASINCRONO ES QUE P1 SE EJECUTA P2 ESTA REALIZANDO UNA TAREA Y HASTA QUE TERMINE VA DEMORAR ENTONCES DEJAMOS QUE HAGA CON CALMA ENTONCES PARA NO PERDER TIEMPO QUE SE EJECUTE P3 OSEA SERIA P1 - P3 - P2

 * Y ESTO LO USAMOS XK CUANDO HACEMOS PETICIONES AL BACKEND ESTO DEMORA ASI x eso la importancia de aprender este proceso asincrono
UN PROCESO QUE PUEDE EJECUTARSE MIENTRAS OTRO PROCESO SE EJECUTE SIMULTANEAMENTE
EJEMPLOS:
		FETCH(AJAX)
		SETTIMEOUT
XK ES NECESARIO TAMBIEN XK EL P2 ES UN PROCESO INDEPENDIENTE A LOS DEMAS PROCESOS ENTONCES POR ENDE PUEDE EJECUTARSE APARTE Y NORMAL

ENTONCES CUANDO QUERAMOS LLAMAR LOS DATOS DEL SERVER DEBEMOS USAR PROCESOS ASINCRONOS Y PARA ELLO TENEMOS FETCH ENTONCES K PASARA TODO EL NAVEGADAR SE VA PINTANDO NORMALMENTE Y CUANDO TERMINE FETCH DE TRAER LOS DATOS RECIEN SE PINTARAN ESOS DATOS 

EL PROBLEMA DE SETTIME QUE ES ASINCRONO SI PERO SE EJECUTA DEACUERDO A UN TIEMPO QUE LE ESTABLECEMOS ENTONCES PARA ELLO SALTAMOS A LAS PROMESAS
 */
let resultado = [];
const traerDatos = () => {
	console.log("Conectándose a la base de gatos");
	console.log("Los datos llegaron del servidor =)");
	resultado = [5000, 8500, 10000];
};

console.log("LOG 1");

//funcion asincrona
setTimeout(traerDatos, 2000);

console.log("LOG 2");
console.log(resultado);
console.log("LOG 3");

/**
 * promesas
 */

/**
 * Las promesas nos ayudan a esperar el resultado
 * de un proceso asincrono
 * - LA PROMESA ES UN PROCESO ASINCRONO SI O SI
 * - TODA PROMESA DEVUELVE UN RESULTADO POSITIVO O NEGATIVO
 * - LAS PROMESAS TIENE 2 PARTES:
 * CREACION Y CONSUMO  = CASI EL 80% SERA DE CONSUMO Y NDA DE CREACION
 * 

RECUERDA QUE DENTRO DE LA PROMESA SIEMPRE DEBE AVER UN PROCESO ASINCRONO

EJM: CREACION DE LA PROMESA

let miPromesa=new Promise((resolve,reject)=>{
		//?aqui dentro de la promesa siempre debe aver un proceso asincrono OJO...
		//?se debe llamar a resolve cuando el resultado sea positivo y reject cuando sea negativo o error
		setTimeout(()=>{
				resolve("resultados")
		},2000)
})

EJEMPLO: CONSUMO DE LA PROMESA
respuesta esta conectada directamente con la funcion resolve

miPromesa.then((respuesta)=>{
		console.log(respuesta); //resultado despues de los 2 segundos
}).catch((error)=>{
		console.log(error)
})
 */

let miPromesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		// ambas funcionan como un return
		// resolve
		// reject
		// resolve(["02815740", "01845421", "01854216"]);
		// reject("El usuario no se ha encontrado en la base de gatos");
		resolve({
			codigo: 200,
			mensaje: "No se encontró el producto",
			contenido: "Lentes Rayban",
		});
	}, 2000);
});

miPromesa
	.then((rpta) => {
		if (rpta.codigo === 200) {
			console.log("=)");
			console.log(rpta.contenido);
		} else {
			console.log("=(");
			console.log(rpta.mensaje);
		}
	})
	.catch((error) => {
		console.log("Ups! =(");
		console.log(error);
	});

/**
 * async await
 */

 let paises = [
		{ id: 1, nombre: "Perú" },
		{ id: 2, nombre: "Bolivia" },
		{ id: 3, nombre: "Chile" },
		{ id: 4, nombre: "Argentina" },
	];
	
	let departamentos = [
		{ id: 1, nombre: "Lima", paisId: 1 },
		{ id: 2, nombre: "Arequipa", paisId: 1 },
		{ id: 3, nombre: "Puno", paisId: 1 },
		{ id: 4, nombre: "La Paz", paisId: 2 },
		{ id: 5, nombre: "Cochabamba", paisId: 2 },
		{ id: 6, nombre: "Santa Cruz", paisId: 2 },
	];
	
	const getPaisById = (id) => {
		let buscando = new Promise((resolve, reject) => {
			setTimeout(() => {
				let pais = paises.find((objPais) => {
					if (objPais.id === id) {
						return objPais;
					}
				});
				if (pais) {
					resolve(pais);
				} else {
					reject("No se encontro el país buscado joven");
				}
			}, 2000);
		});
		return buscando;
	};
	
	const getDepartamentosByPaisId = (id) => {
		const buscando = new Promise((resolve, reject) => {
			setTimeout(() => {
				const dptos = departamentos.filter((objDpto) => {
					if (objDpto.paisId === id) {
						return objDpto;
					}
				});
				resolve(dptos);
			}, 3000);
		});
		return buscando;
	};
	
	/**
	 * funcion que retorna tanto el pais como la lista de departamentos
	 * dado el id de un pais
	 */

	//?vamos a convertir esta funcion en una function de tipo async
	//async convierte una function normal a una promesa ejmp:
	//getAllByPaisId = con el async sera una promesa y debemos consumirla con el then
	const getAllByPaisId = async (id) => {
			//^mira aqui vemos que vamos a guardar la respuesta de getPaisById en una variable llamada pasiEncontrado
			//?sabes que aqui adentro debemos consumir la promesa getPaisById con el then pero no lo aremos asi entonces para evitar consumirla alli debemos colocar el await que dira yo te esperare hasta que termine de realizar todo lo que tengas en getPaisById
			let paisEncontrado = await getPaisById(id);
			let departamentosFiltrados = await getDepartamentosByPaisId(id);

		//este es un objeto implicito por que no se guarda en una variable
		//siempre debe retornar algo xk afuera lo vamos a consumir como si fuera una promesa gracias a l async
			return {
			paisEncontrado: paisEncontrado,
			departamentosFiltrados: departamentosFiltrados,
		};
	};
	//con el then estamos consumiendo lo que a retornado la funcion
	getAllByPaisId(1).then((rptaFinal) => {
		console.log(rptaFinal);
	});

	//mucho ojo no se puede usar la sentencia await si la funcion padre osea general en la que se usa no es una funcion async es decir una sentencia await solo se usa en una funcion async

	
	
	const funcionAsincrona = async () => {
		return 100;
	};
	
	funcionAsincrona().then((valor) => {
		console.log(valor);
	});
	


/**
 * fetch (ajax)
 */

/**
 * importaciones y exportaciones
 * aprenda a importar desde la China
 */
