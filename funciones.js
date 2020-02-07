const formulario = document.getElementsByName("formulario")[0];
const elementos = formulario.elements;
const entregAnticipo = document.getElementsByName("entregAnticipo");
const entregaUsado = document.getElementsByName("entregaUsado");
const resultado = document.getElementById("resultado");
const enviar = document.getElementById("enviar");

function entregAnticipoFn() {
  if (formulario.entregAnticipo[0].checked == true) {
    document.getElementById("muestra").classList.add("open");
  } else if (formulario.entregAnticipo[1].checked) {
    document.getElementById("muestra").classList.remove("open");
  }
}
for (var i = 0; i < entregAnticipo.length; i++) {
  entregAnticipo[i].addEventListener("click", entregAnticipoFn);
}

function entregUsadoFn() {
  if (formulario.entregaUsado[0].checked == true) {
    document.getElementById("entregaUsado").classList.add("open");
    document.getElementsByName("entregaUsadoHidden")[0].value =
      formulario.entregaUsado.value;
  } else if (formulario.entregaUsado[1].checked) {
    document.getElementById("entregaUsado").classList.remove("open");
    document.getElementsByName("entregaUsadoHidden")[0].value =
      formulario.entregaUsado.value;
    formulario.seleccionar1.value = "";
    formulario.seleccionar2.value = "";
    formulario.seleccionar3.value = "";
  }
}
for (var i = 0; i < entregaUsado.length; i++) {
  entregaUsado[i].addEventListener("click", entregUsadoFn);
}

enviar.addEventListener("click", obtenerResultados);

function validarSelect() {
  if (formulario.seleccionar1.value === "") {
    resultado.innerHTML = "Debes seleccionar una marca";
  } else if (formulario.seleccionar2.value === "") {
    resultado.innerHTML = "Debes seleccionar un modelo";
  } else if (formulario.seleccionar3.value === "") {
    resultado.innerHTML = "Debes seleccionar un año";
  } else {
    resultado.innerHTML = `
  <p> ${formulario.seleccionar1.value}</p> 
  <p> ${formulario.seleccionar2.value}</p> 
  <p> ${formulario.seleccionar3.value}</p> 
  <p> ${formulario.entregAnticipo.value}</p> 
  <p> ${formulario.entregaUsado.value} </p>`;
  }
}

function obtenerResultados(e) {
  validarSelect();
  e.preventDefault();
}
