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

    switch(codigo) {
      case coupons[0]: // batman
        descuento = 25;
      break;
      case coupons[1]: //superman
        descuento = 50;
      break;
      case coupons[2]: // zorro
        descuento = 70;
      break;
      case coupons[3]: //aquaman
        descuento = 90;
      break;
    }


    const calculo = calcularPrecioConDescuento(value1,descuento);
    
    const resulinsert = document.getElementById("resultadodelprecio");
    document.getElementById("resultadodeldescuento").innerText = "el descuneto aplicado es de: " + descuento + "%   ";    
    resulinsert.innerText = " El precio con descuento es: " + "$" +calculo;
}
