// const list1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1,
// ];

function moda(list1){
const lista1Count = {};

list1.map(
    function(elemento){

        if(lista1Count[elemento]){

            lista1Count[elemento] += 1;

        } else{

            lista1Count[elemento] = 1;
        }
    }
);

let lista1Array = Object.entries(lista1Count).sort(
    function (a,b){
        return a[1]-b[1];
    }
); //convertir un objeto en una lista

const moda = lista1Array[lista1Array.length - 1];
return moda
}