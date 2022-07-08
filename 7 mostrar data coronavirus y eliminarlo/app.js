let btnMostrar = document.getElementById("btnMostrar");
let tableData = document.getElementById("tableData");
let tbody = document.getElementById("tbody");

const llenarTabla = () => {
  covid.forEach(function (objCovid, i) {
    //la fila
    let tr = document.createElement("tr");

    // 1er campo
    let tdNum = document.createElement("td");
    tdNum.innerText = i + 1;

    //2do campo ... etc
    let tdPais = document.createElement("td");
    tdPais.innerText = objCovid.country;

    let tdInfectado = document.createElement("td");
    tdInfectado.innerText = objCovid.casos;

    let tdFallecido = document.createElement("td");
    tdFallecido.innerText = objCovid.deaths;

    let tdRecuperados = document.createElement("td");
    tdRecuperados.innerText = objCovid.recovered;

    let tdButton = document.createElement("button");
    tdButton.innerText = "Eliminar";

    
    tr.appendChild(tdNum);
    tr.appendChild(tdPais);
    tr.appendChild(tdInfectado);
    tr.appendChild(tdFallecido);
    tr.appendChild(tdRecuperados);
    tr.appendChild(tdButton);
    tbody.appendChild(tr);
    
    tdButton.onclick=()=>{
        if(confirm(`Desea Eliminar a Pais ${objCovid.country}`)===true){
            tr.setAttribute("hidden","hidden")
        }
    }
});
};

btnMostrar.onclick = function () {
  tableData.removeAttribute("hidden");
  llenarTabla();
};
