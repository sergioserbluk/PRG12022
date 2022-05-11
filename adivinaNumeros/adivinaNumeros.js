let us1;
let us2;
let numero ;
let numerobuscado;
let intentos=1;
us1 = prompt("Ingrese su nombre");
us2 = prompt("Ingrese su nombre");
numerobuscado=prompt(us1 +" Ingrese un numero a buscar");
numero=prompt(us2 +" Ingrese un numero");
while (numerobuscado != numero){
    if (numerobuscado > numero){
        numero=prompt(us2 +" El numero a buscar es mayor");
    }else{
        numero=prompt(us2 +" El numero a buscar es menor");

    intentos=intentos+1;
}
}
alert("Adivinaste en " + intentos +", el numero a buscar era: "+numerobuscado);