//aremos una app de peliculas de una bd de peliculas https://www.themoviedb.org/?language=es tenemos que registrarnos para crear nuestra api_key ya que es solicitado
//dentro de perfil hay una opcion de configuracion con esta ruta https://www.themoviedb.org/settings/api y vamos a api y buscamos Clave de la API (v3 auth) y copiamos esa clave de la api y alli un ejemplo de como debemos hacer la solicitud clave_api = 03cace820f8371170cfba379540806e0
// este es el ejemplo https://api.themoviedb.org/3/movie/550?api_key=03cace820f8371170cfba379540806e0

// para ver la doc vamos a MAS>API y buscamos developers.themoviedb.org. y podemos ingresar a la doc
// https://developers.themoviedb.org/3/movies/get-popular-movies esta url ya esta las peliculas mas populares

//ahora vamos a trabajar con orden

//recuerda lo que retorna esa funcion es una promesa x eso lo consumimos asi

import {
  buscarPeliculaPorNombre,
  getPopulares,
  limitarCaracteres,
} from "./funciones.js";
import { URL_IMG } from "./variables.js";

//?en esta misma doc muestra como pdomos usar esta libreria para nuestro ejemplo usamremos el modelo freescroll
// https://flickity.metafizzy.co/options.html#freescroll

//?capturar el elemento para poder mostrar los carrusel
const contenedorCarrusel = document.getElementById("contenedor-carrusel");
const inputBuscador = document.getElementById("input-buscador");
const resultados = document.getElementById("resultados");

inputBuscador.onkeyup = (e) => {
  //^ aqui pondremos que apartir de las 3 primeras letras recien me muestre la lista de busqueda de peliculas y si es inferior a eso entonces no que no muestre nada
  if (inputBuscador.value.length < 3) {
    resultados.innerHTML = "";
    // TODO: limpiar la zona de resultados
    return;
  }
  //^ esta funcion se necarga de recibir lo que andamos buscando
  buscarPeliculaPorNombre(inputBuscador.value).then((rpta) => {
    console.log(rpta);
    dibujarBusqueda(rpta);
  });
};

//?instancias la clase Flickity pasandome como parametro el elemento que hemos capturado y un objeto con inf adicional
const flick = new Flickity(contenedorCarrusel, {
  freeScroll: true,
  wrapAround: true,
  autoPlay: 2000,
});

const dibujarBusqueda = ({ results }) => {
  resultados.innerHTML = "";
  results.forEach((objPelicula) => {
    let col = document.createElement("div");
    col.classList.add("col-md-2");
    // card.setAttribute("class","card text-left");
    col.innerHTML = `
        <div class="card">
          <img class="card-img-top" src="${URL_IMG}${objPelicula.poster_path}" 
                                    alt="imagen de la pelicula">
          <div class="card-body">
              <h4 class="card-title">${objPelicula.title}</h4>
              <p class="card-text">${limitarCaracteres(objPelicula)}</p>
          </div>
        </div>`;
    resultados.appendChild(col);
  });
};

//?aqui andamos destructurando la informacion
//^para poder ver las imagenes debo entrar a misma cuenta osae configuracion y buscar el enlace de la url para colocar las imagenes
const dibujarPopulares = ({ results }) => {
  results.forEach((objPelicula) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("text-left");
    card.classList.add("card-flickity");
    card.innerHTML = `
      <img class="card-img-top" src="${URL_IMG}${
      objPelicula.poster_path
    }" alt="">
      <div class="card-body">
        <h4 class="card-title">${objPelicula.title}</h4>
        <p class="card-text">${limitarCaracteres(objPelicula)}</p>
      </div>`;
    /**
     * PARA MI EL DANIO NO ES MAS QUE UNA FUENTE DE ENERGIA
     * append(elemento o arreglo de elementos)
     * es una función propia de flickity, no tiene nada que ver
     * con la función appendChild, pero sirve para agregar elementos
     * al carrusel (para no perder el estilo ni la funcionalidad de la
     * librería)
     * https://flickity.metafizzy.co/api.html
     */
    flick.append(card);
    //otra manera de hacer esto es dividirlo entre 2 todo
    // flick.select(results.length / 2);

    //cuando ya este llegando al final el carulsel entonces podemos realizar otra peticion para que de esa manera podramos traer nuevos datos para eso sirve este metodo
    // https://flickity.metafizzy.co/events.html
    flick.on("settle", function (index) {
      if (index == 19) {
        console.log("el final ya esta cerca acercado");
      }
    });
  });
};

getPopulares().then((data) => {
//   console.log(data);
  dibujarPopulares(data);
});


/**
 * ? asi es la documentacion cuando hagamos nosotros
 * * GET => /platos     => obtener todos los platos
 * * GET => /platos/:id => obtener la informacion del platos que tiene el id 33
 * * POST => /platos    =>agregar o crear un nuevo plato (atravez del body en la peticion, tendremos que mandar la informacion de un objeto de tipo plato no olvidar enviar tambien la informacion adicional a travez de los headers)
 * * PUT => /platos/:id =>editar o modificar la informacion de un objeto o registro de tipo plato
 * * DELETE => /platos/:id  => eliminar un plato o registro de tipo plato dado su id
 */