let selectPais = document.getElementById("selectPais");
let selectProvincia = document.getElementById("selectProvincia");

// xk usamos una function afuera xk necesitamos que carge automaticamente los paises para luego recien cargar las provincias
const llenarPaises = () => {
  let contenido = `<option value=0>--- Seleccione un pais ---</option>`;
  paises.forEach(function (objPais) {
    contenido += `<option value=${objPais.id}>${objPais.nombre}</option>`;
  });
  selectPais.innerHTML = contenido;
};

llenarPaises();

const llenarDepartamento = function (idPais) {
  let provincias = departamentos.filter((objDepartamento) => {
    if (idPais == objDepartamento.paisId) {
      return objDepartamento;
    }
  });
  console.log(provincias);
  if (provincias.length > 0) {
    selectProvincia.removeAttribute("disabled");
    let contenido = "";
    provincias.forEach((objProvincia) => {
      contenido += `<option value=${objProvincia.id}>${objProvincia.nombre}</option>`;
    });
    selectProvincia.innerHTML = contenido;
  } else {
    selectProvincia.innerText = "";
    selectProvincia.setAttribute("disabled", "disabled");
  }
};

/**
 * elemento.onchange evento que se ejecuta cada vez que el valor de un elemento
 * cambia (en el caso del select, cada vez que un nuevo option es seleccionado)
 * @param {*} e
 */
selectPais.addEventListener("change", function () {
  llenarDepartamento(selectPais.value);
});

// if (x>5) {
//     console.log("x es mayor k 5");
//   }else{
//     console.log("x es menor que 5");
//   }
//   //OPERADOR TERNARIO solamente cuando hay una linea de codigo nada mas
//   x>5? console.log("x es mayor que 5"):console.log("x es menor que 5")