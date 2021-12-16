// const precioOriginal = 100;
// const descuento = 15;


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularprecio(){
    const inputprecio = document.getElementById("precio");
    const value1 = inputprecio.value;
    const inputdescuento = document.getElementById("descuento");
    const value2 = inputdescuento.value;
    const calculo = calcularPrecioConDescuento(value1,value2);
    
    const resulinsert = document.getElementById("resultadodelprecio");
    resulinsert.innerText = " El precio con descuento es: " + "$" +calculo;
}
