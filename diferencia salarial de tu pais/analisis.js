
const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort((a,b)=>a-b);

// function (salaryA, salaryB){
//     return salaryA - salaryB;
// }

function esPar(numerito){
    return (numerito % 2 === 0);
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

function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);

        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

// mediana top 10%

const spliceStart = (salariosColSorted.length * 90)/100;
const splicesCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    splicesCount
    );

const medianaTop10Col = medianaSalariosCol(salariosColTop10);


console.log(
medianaGeneralCol,
medianaTop10Col,
);