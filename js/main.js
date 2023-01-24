// algoritmo para saber si se puede salir a andar en moto
alert("Programa para ver si salir o no a andar en moto");
alert("Responder las siguientes preguntas con si o con no");
let lluvia = prompt("Esta lloviendo?");
let casco = prompt("Tenes casco?");

if(lluvia == "si"){
    if(casco == "no"){
        alert("Esta lloviendo y no tenes casco, NO PODES SALIR A ANDAR EN MOTO")
    }
} if (lluvia == "si"){
    if(casco == "si"){
        alert("Esta lloviendo y tenes casco, SALI A ANDAR EN MOTO CON MUCHO CUIDADO");
    }
} if (lluvia == "no"){
    if(casco == "no"){
        alert("No esta lloviendo pero no tenes casco, NO SALGAS A ANDAR EN MOTO Y COMPRA UN CASCO");
    }
} if (lluvia == "no"){
    if(casco == "si"){
        alert("No llueve y tenes casco, DISFRUTA DE UN LINDO DIA DE ANDAR EN MOTO");
    }
} 


// algoritmo para promediar la cilindrada de las motos que quiero
alert("Comienza el programa para ver el promedio de cilindrada de motos que quiere");

let cantidadMotos = prompt("Indique cuantas motos desea");
let cilindradaMotos; //registro de cilindrada
let sumaMotos = 0; //acumulador de cilindrada
let i; //ciclo

for(i=1;i<=cantidadMotos;i++){
    cilindradaMotos = parseInt(prompt("Ingrese la cilindrada de la moto "+i));

    sumaMotos = sumaMotos + cilindradaMotos;
}

alert("El promedio de cilindrada de las "+cantidadMotos+ " motos deseadas es: "+sumaMotos/cantidadMotos);

alert("Fin del programa, gracias")