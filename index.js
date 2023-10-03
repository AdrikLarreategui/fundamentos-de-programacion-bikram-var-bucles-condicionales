const PI= 3.14
const TAU=PI+PI
let variableValorNumerico= 1
const MiNombre = 'MiNombre'
const MiNumeroFav = 17

let variableSinValor = undefined
let booleano1 = true
let booleano2 = false
let booleanoAnd = booleano1 = booleano2
if (booleano1>booleano2) {console.log('la variable es de tipo let')}
if (booleano1>booleano2) {console.log('false')}
const booleanoNot = !booleano1;
const booleanoMix0 = booleano1 && (booleano1 || (!booleano1 && !booleano2))
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
let contarHasta10_2 = 0;
for (; contarHasta10_2 !== 10; contarHasta10_2++) {console.log(`Contando $(contarHasta10_2)`)}
let postI = 0;
let postJ = 0;
for(let i = 0; i < 11; i++) {
    postI += postJ++;
}
let sumaPares = 0;
for(let i = 0; i < 10; i++) {
    if(i %2 === 0) {sumaPares += i 
    }
}
let booleanoOr = booleano1 || booleano2
booleanoMix1 = booleano1 && TAU === PI/2
let seisNoEsNueve = 6 != 9
const comparacion = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);
const booleanoMix2 = comparacion
let valorSuma = MiNumeroFav + variableValorNumerico
let valorResta = MiNumeroFav - variableValorNumerico
let valorMultiplicacion = MiNumeroFav * variableValorNumerico
let valorDivision = MiNumeroFav / 3
let contarHasta10 = 0
while (contarHasta10 < 10) {

    console.log('ocurren cosas: ', contarHasta10)
    
    contarHasta10++
    
    }
let sumaImpares = 0
for(let i = 0; i < 10; i++) {
    if(i %2 !== 0) {sumaImpares += i 
    }
}
preI = 0;
preJ = 0;
for(let i = 0; i < 11; i++) {
    preI += ++preJ
}