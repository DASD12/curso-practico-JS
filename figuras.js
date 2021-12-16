// codigo cuadrado

console.group("cuadrados"); // agrupar

function perimetrocuadrado(lado){
    return lado * 4;
};

function areacuadrado(lado){
    return lado * lado;
};

console.groupEnd();

// codigo triangulo

console.group("triangulos");

function perimetrotriangulo(lado1, lado2, basetriangulo){
    return Number(lado1) + Number(lado2) + Number(basetriangulo);
}

function areatriangulo(base, altura){
    return (base*altura) / 2;
}

console.groupEnd();

// codigo circulos

console.group("circulos");

//diametro
function diametrocirculo(radio){
    return radio*2;
}
//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//circunferencia
function perimetrocirculo(radio){
    const diametro= diametrocirculo(radio);
    return diametro*PI;
}
//area
function areacirculo(radio){
    return (radio * radio) * PI;
};
console.groupEnd();


function calcularperimetrocuadrado(){
    const input = document.getElementById("cuadrado");
    const value = input.value;
    
    const perimetro = perimetrocuadrado(value);
    alert(perimetro);
}

function calcularareacuadrado(){
    const input = document.getElementById("cuadrado");
    const value = input.value;
    
    const perimetro = areacuadrado(value);
    alert(perimetro);
}

function calcularperimetrotriangulo(){
    const lado1 = document.getElementById("lado1triangulo");
    const value1 = lado1.value;
    const lado2 = document.getElementById("lado2triangulo");
    const value2 = lado2.value;
    const base = document.getElementById("basetriangulo");
    const value3 = base.value;

    const perimetro = perimetrotriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularareatriangulo(){
    const base = document.getElementById("basetriangulo");
    const value1 = base.value;
    const altura = document.getElementById("alturatriangulo");
    const value2 = altura.value;

    const area = areatriangulo(value1,value2);
    alert(area);
}

function calculardiametrocirculo(){
    const radio = document.getElementById("radio");
    value1 = radio.value;
    const diametro = diametrocirculo(value1);
    alert(diametro);
}

function calcularperimetrocirculo(){
    const radio = document.getElementById("radio");
    const value1 = radio.value;
    const perimetro = perimetrocirculo(value1);
    alert(perimetro);
}

function calcularareacirculo(){
    const radio = document.getElementById("radio");
    const value1 = radio.value;
    const area = areacirculo(value1);
    alert(area);
}