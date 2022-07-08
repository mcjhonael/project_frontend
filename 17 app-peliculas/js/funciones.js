//esta funcion se va encargar de hacer una peticion al backend del api de DBmovei
// async para que esta funcion sea asincrona  y podemos consumirla fuera

//esto quiere decir que vamos a import las variables URL_BACKEND y API_KEY desde el archivo variables.js

import { URL_BACKEND, API_KEY } from "./variables.js";

//esto es para importar todo las variables o funciones que estan siendo exportable en el archivo variable.js y lo estoy guardando en la variable de nombre variable puede tener cualquier nombre pero este sera en un objeto y debemos acceder atravez del . para poder usar esa variable
// import *  as variables from "./variables.js";
// console.log(variables)

// https://api.themoviedb.org/3/movie/popular?api_key=03cace820f8371170cfba379540806e0&language=en-US&page=1
export const getPopulares = async () => {
  const response = await fetch(
    `${URL_BACKEND}movie/popular?api_key=${API_KEY}&language=es-PE&page=1`
  );
  const json = await response.json();
  return json;
};

//este metodo se encargara de mostrar cierta cantidad de caracteres recibe como parametro el objPelicula la cual vamos a destructurar
// podemos tambien verificar si hay o no overview
export const limitarCaracteres = ({ title, overview }) => {
  if (title.length >= 40) {
    //aqui indicamos que solamente desemos mostrar los 50 primeros caracteres y de alli concatenar con esto de ver mas
    // return overview.substr(0,50) + " <a href='#'>Ver mas</a>"
    // console.log(overview)
    return `${overview.substr(0, 50)} <a href='#'>Ver mas ...</a>`;
  } else {
    return overview.substr(0, 100) + " <a href='#'>Ver mas ...</a>";
  }
};

//^metodo que se encarga de buscar peliculas

export const buscarPeliculaPorNombre = async (busqueda) => {
  const response = await fetch(
    `${URL_BACKEND}search/movie?api_key=${API_KEY}&language=es-PE&page=1&include_adult=false&query=${busqueda}`
  );
  const json = await response.json();
  return json;
};
