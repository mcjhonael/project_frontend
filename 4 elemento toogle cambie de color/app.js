let btnDark = document.getElementById("btnDark");
let btnLight = document.getElementById("btnLight");
let btnToggle = document.getElementById("btnToggle");

let botones = document.getElementById("botones");

let container = document.getElementById("container");

btnDark.onclick = function () {
  // si estamos en el boton oscuro y presionamos el claro va quedar el claro entonces debemos eliminar el claro y agregar el oscuro
  if (container.classList.contains("btnLightHover") == true) {
    container.classList.remove("btnLightHover");
  }
  container.classList.add("btnDarkHover");
};

//lo mismo de arriba pero invertido
btnLight.onclick = () => {
  if (container.classList.contains("btnDarkHover")) {
    container.classList.remove("btnDarkHover");
  }
  container.classList.add("btnLightHover");
};

btnToggle.onclick = function () {
  if (container.classList.contains("btnLightHover")) {
    container.classList.remove("btnLightHover");
    container.classList.add("btnDarkHover");
  } else if (container.classList.contains("btnDarkHover")) {
    container.classList.remove("btnDarkHover");
    container.classList.add("btnLightHover");
  } else {
    // k tal no impieza con dar ni light entonces empieza con toggle x lo cual le asignamos las clase btnLighHover para k no se vea muy vacio
    container.classList.add("btnLightHover");
  }
};
