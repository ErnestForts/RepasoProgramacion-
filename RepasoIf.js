function signoZodiaco(dia, mes) {
    if ((dia >= 21 && mes == "marzo") || (dia <= 20 && mes == "abril")) {
        return "Aries";
    }
    else if ((dia >= 21 && mes == "abril") || (dia <= 21 && mes == "mayo")) {
        return "Tauro";
    }
    else if ((dia >= 22 && mes == "mayo") || (dia <= 21 && mes == "junio")) {
        return "Géminis";
    }
    else if ((dia >= 22 && mes == "junio") || (dia <= 22 && mes == "julio")) {
        return "Cáncer";
    }
    else if ((dia >= 23 && mes == "julio") || (dia <= 23 && mes == "agosto")) {
        return "Leo";
    }
    else if ((dia >= 23 && mes == "agost") || (dia <= 23 && mes == "septiembre")) {
        return "Virgo";
    }
    else if ((dia >= 24 && mes == "septiembre") || (dia <= 23 && mes == "octubre")) {
        return "Libra";
    }
    else if ((dia >= 24 && mes == "octubre") || (dia <= 22 && mes == "noviembre")) {
        return "Escorpión";
    }
    else if ((dia >= 23 && mes == "noviembre") || (dia <= 21 && mes == "diciembre")) {
        return "Sagitario";
    }
    else if ((dia >= 22 && mes == "diciembre") || (dia <= 20 && mes == "enero")) {
        return "Capricornio";
    }
    else if ((dia >= 21 && mes == "enero") || (dia <= 18 && mes == "febrero")) {
        return "Acuario";
    }
    else if ((dia >= 19 && mes == "febrero") || (dia <= 20 && mes == "marzo")) {
        return "Piscis";
    }
}
console.log(signoZodiaco(22, "mayo"));
function continente(pais) {
    if (pais == "España" || pais == "Francia" || pais == "Italia" || pais == "Andorra" || pais == "Alemania") {
        return "Europa";
    }
    else if (pais == "Argentina" || pais == "Mexico" || pais == "Canadá" || pais == "Estados Unidos" || pais == "Perú") {
        return "América";
    }
    else if (pais == "Japón" || pais == "India" || pais == "China" || pais == "Taiwan" || pais == "Catar") {
        return "Asia";
    }
    else if (pais == "Camerún" || pais == "Egipto" || pais == "Ghana" || pais == "Kenia" || pais == "Nigeria") {
        return "África";
    }
}
console.log(continente("Mexico"));
function numImp(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            //console.log(i)
        }
    }
}
numImp(9);
function arrReverse(arr) {
    var arrResult = new Array();
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
        arrResult.push(arr[i]);
    }
    console.log(arrResult);
}
arrReverse([1, 2, 3, 4,]);
function arcoIris(colores) {
    for (var i = 0; i < colores.length; i++) {
        if (colores[i] == "rojo" || colores[i] == "naranja" || colores[i] == "amarillo" || colores[i] == "verde" || colores[i] == "azul" || colores[i] == "índigo" || colores[i] == "violeta") {
            console.log(colores[i]);
        }
    }
}
arcoIris(["verde", "marrón", "rojo", "negro", "azul"]);
function numPar(num) {
    var i = 0;
    while (i < num.length) {
        if (num[i] % 2 == 0) {
            return 'yes';
        }
        i++;
    }
}
console.log(numPar([9, 2, 3, 6, 7, 33, 66]));
function nombreM(nombres) {
    for (var i = 0; i < nombres.length; i++) {
        for (var j = 0; j < nombres[i].length; j++) {
            while (nombres[i][0] !== "M") {
                return "No todos empiezan con M";
            }
        }
    }
    return "Todos empiezan con M";
}
console.log(nombreM(["Manolo", "Mike", "Maria"]));
function sumArr(palabras) {
    var sumaTotal = 0;
    for (var i = 0; i < palabras.length; i++) {
        for (var j = 0; j < palabras[i].length; j++) {
            sumaTotal++;
        }
    }
    return sumaTotal;
}
console.log(sumArr(["Coche", "Moto", "Bici"]));
function parImpar(num) {
    if (num % 2 == 0) {
        console.log("El numero es par");
    }
    else if (num % 2 !== 0) {
        console.log("El numero es impar");
    }
}
parImpar(43);
parImpar(sumArr(["Casa", "Coche", "Ciudad", "Cesta"]));
parImpar(sumArr(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]));
parImpar(sumArr(["Venezuela", "Veneno", "Voltaje"]));
