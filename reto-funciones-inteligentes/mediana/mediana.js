// const list1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista){

        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promediolist = sumaLista / lista.length;
        return promediolist
}

function datos(list1){

    list1 = list1.sort((a,b)=>a-b);
    console.log(list1);
    const mitadLista1 = parseInt(list1.length / 2);

    promedio = calcularMediaAritmetica(list1);
    
    let mediana;

    if(esPar(list1.length)){
        const elemento1 = list1[mitadLista1];
        const elemento2 = list1[mitadLista1 - 1];
        const promedio = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ])
        return mediana = promedio;

    } else {
        return mediana = list1[mitadLista1]
    }
} 