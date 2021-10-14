const perimetroDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * 4;
const areaDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * ladoDelCuadrado;

var calcularAreaCuadrado = () => {

    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
const perimetroDelTriangulo = (ladoDelTriangulo) => (ladoDelTriangulo*3);
const areaDelTriangulo = (baseDelTriangulo,alturaDelTriangulo) => (baseDelTriangulo * alturaDelTriangulo)/2;

var calcularAreaTriangulo = () => {

    const baseDelTriangulo = document.querySelector("#base-triangulo").value;
    const alturaDelTriangulo = document.querySelector("#altura-triangulo").value;
    const resultado = areaDelTriangulo(baseDelTriangulo,alturaDelTriangulo)
    document.querySelector("#resultado").innerText = resultado
}
var calcularPerimetroTriangulo = () => {

    const ladoDelTriangulo = document.querySelector("#lado-triangulo").value;
    const resultado = perimetroDelTriangulo(ladoDelTriangulo)
    document.querySelector("#resultado").innerHTML = resultado
}
// const ladoDelCuadrado = 6;
// const PI = 3.1416;
// let variableQueCambia
// const area = lado*lado;
// const perimetro = lado * 4;

// console.log(`Àrea ${area}`);
// console.group({area:area, perimetro:perimetro})