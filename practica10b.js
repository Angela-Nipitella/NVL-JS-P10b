/* Asumiendo que Math.floor((Math.random() * 100) + 1); saca elementos al azar entre 1 y 100, queremos que hagas lo siguiente:

Saca 50 números al azar entre 1 y 100
Almacena los números que salgan impares en un array impares
Almacena los números que salgan pares en un array pares */

var n = 0 ;
var num = 50 ;
var numero_alea ;
var arreglo_imp = [] ;
var arreglo_par = [] ;


while(n < num)
{
    numero_alea = Math.floor((Math.random() * 100) + 1);
    if (numero_alea % 2 == 0)
    {
        arreglo_par.push(numero_alea) ;
    }
    else {
        arreglo_imp.push(numero_alea) ;
    }
    n++;
}

// for (let index = 0; index < 50; index++) {
//     numero_alea = Math.floor((Math.random() * 100) + 1);
//     if (numero_alea % 2 == 0)
//     {
//         arreglo_par.push(numero_alea) ;
//     }
//     else {
//         arreglo_imp.push(numero_alea) ;
//     }
// }

document.write("Numeros Pares: ");
arreglo_par.forEach(element => {
    document.write(element+"\n\r");
});
document.write("<br>");


document.write("Numeros imPares: ");
arreglo_imp.forEach(element => {
    document.write(element+"\n\r");
});