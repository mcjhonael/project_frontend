let inputColor = document.getElementById("inputColor");
let body = document.getElementById("body");

inputColor.onchange = (e) => {
  console.log(typeof e.target.value);
  color = e.target.value;

  //pintar el fondo
  paintBack(color);
};

const paintBack = function (color) {
  body.style.backgroundColor = color;
  window.localStorage.setItem("localColor", color);
};

const verificarColor = () => {
  let getColor = window.localStorage.getItem("localColor");
  if (getColor) {
    paintBack(getColor);
    console.log(getColor)
    inputColor.value = getColor;
    console.log('**********')
    console.log(body.value)
  }
};
verificarColor();


//cuando queramos hacer un carrito de compras almacenaremos nuestras credenciales en nuestra maquina personal el problema sera que cuando entremos a otra maquina no podremos colocar nuestras credenciales de nuevo seria desde cero
// - dependera mucho del usuario como kiere k su aplicacion sea k  las credenciales se guarden en los Storage o si no ya seria desde la base de datos nomas k cuando el usuario entre autenticado a su aplicacion entonces este jale de la BD todos lo que tenia alistando para poder comprar