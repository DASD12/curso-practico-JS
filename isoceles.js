function alturatriangulo(lado1, lado2, basetriangulo){
    if(lado1==lado2){
        const a = lado1**2;
        console.log(a);
        const b = basetriangulo**2;
        console.log(b);
        const resu = a-(b/2);
        console.log(resu);
        console.log(Math.sqrt(resu));
    }else{
        console.log("no es un triangulo isoceles");
    }
}
