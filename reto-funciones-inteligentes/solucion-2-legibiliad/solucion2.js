const coupons = [
    "Batman",
    "Superman",
    "Zorro",
    "Aquaman",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularprecio(){
    
    const inputprecio = document.getElementById("precio");
    const value1 = inputprecio.value;
    const InputCoupon = document.getElementById("InputCoupon");
    const codigo = InputCoupon.value;

    let descuento;

    if (!coupons.includes(codigo)) {
      alert("El cupón " + codigo + " no es válido");
      descuento=  NaN;
      calculo= NaN;
   } else if (codigo === "Batman") {
      descuento = 15;
   } else if (codigo === "Superman") {
      descuento = 30;
   } else if (codigo === "Zorro") {
      descuento = 25;
   }


    const calculo = calcularPrecioConDescuento(value1,descuento);
    
    const resulinsert = document.getElementById("resultadodelprecio");
    document.getElementById("resultadodeldescuento").innerText = "el descuneto aplicado es de: " + descuento + "%   ";    
    resulinsert.innerText = " El precio con descuento es: " + "$" +calculo;
}
