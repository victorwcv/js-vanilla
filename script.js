// Obtener todos los botones de calcular por su clase
const calculateButtons = document.querySelectorAll("#first-section .btn");
const buttonMAU = document.getElementById('btn-MAU');

// Iterar sobre cada botón de calcular
calculateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtener el div padre del botón actual
    const esphereDiv = button.parentElement.parentElement;
    console.log(esphereDiv);

    // Encontrar los inputs dentro del div padre por su clase
    const inputs = esphereDiv.querySelectorAll(".input");

    // Obtener los valores de los inputs
    const pies = parseInt(inputs[0].value) || 0;
    const pulgadas = parseInt(inputs[1].value) || 0;
    const octavos = parseInt(inputs[2].value) || 0;

    const selectSphere = esphereDiv.querySelector('.heading').innerHTML;
    let factor;
    if (selectSphere === 'VBA-3105') {
      factor = 64.98;
    } else {
      factor = 64.61;
    }

    // Realizar el cálculo aquí según tu lógica deseada
    const resultado = (
      ((pies + pulgadas / 12 + octavos / 96) / factor) *
      100
    ).toFixed(2);

    // Encontrar el elemento de resultado dentro del div padre por su clase
    const resultElement = esphereDiv.querySelector(".calculo .resultado");

    // Mostrar el resultado en el elemento correspondiente
    resultElement.textContent = `${resultado} %`;
  });
});

buttonMAU.addEventListener('click', () => {
  const parentDiv = buttonMAU.parentElement;
  console.log(parentDiv);
  const inputs = parentDiv.querySelectorAll('.row-cont .input-b');
  console.log(inputs)
  const nominado = parseInt(inputs[0].value) || 0;
  const enviado = parseInt(inputs[1].value) || 0;
  const procesado = parseInt(inputs[3].value) || 0;
  console.log(nominado, enviado, procesado);
  inputs[2].value = nominado - enviado + procesado
})


function onlyNumbers(input) {
  input.value = input.value.replace(/\D/g, '');
}