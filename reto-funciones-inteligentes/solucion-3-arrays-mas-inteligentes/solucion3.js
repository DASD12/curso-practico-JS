const coupons = [
  {
      name: "Batman",
      discount: 15,
  },
  {
      name: "Superman",
      discount: 50,
  },
  {
      name: "Zorro",
      discount: 25,
  },
  {
    name: "Aquaman",
    discount: 70,
},
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

    const isCouponValueValid = function (coupon) {
      return coupon.name === codigo;
    };
  
    const userCoupon = coupons.find(isCouponValueValid);
  
    if (!userCoupon) {
      alert("El cupón " + userCouponValue + "no es válido");
     } else {
        const descuento = userCoupon.discount;

        const calculo = calcularPrecioConDescuento(value1,descuento);
    
        const resulinsert = document.getElementById("resultadodelprecio");
        document.getElementById("resultadodeldescuento").innerText = "el descuneto aplicado es de: " + descuento + "%   ";    
        resulinsert.innerText = " El precio con descuento es: " + "$" +calculo;
      }


   
}
