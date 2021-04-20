function signoZodiaco(dia:number,mes:string){
    if((dia>=21 && mes == "marzo") || (dia<=20 && mes == "abril")){
        return "Aries"
    }else if((dia>=21 && mes == "abril") || (dia<=21 && mes == "mayo")){
        return "Tauro"
    }else if((dia>=22 && mes == "mayo") || (dia<=21 && mes == "junio")){
        return "Géminis"
    }else if((dia>=22 && mes == "junio") || (dia<=22 && mes == "julio")){
        return "Cáncer"
    }else if((dia>=23 && mes == "julio") || (dia<=23 && mes == "agosto")){
        return "Leo"
    }else if((dia>=23 && mes == "agost") || (dia<=23 && mes == "septiembre")){
        return "Virgo"
    }else if((dia>=24 && mes == "septiembre") || (dia<=23 && mes == "octubre")){
        return "Libra"
    }else if((dia>=24 && mes == "octubre") || (dia<=22 && mes == "noviembre")){
        return "Escorpión"
    }else if((dia>=23 && mes == "noviembre") || (dia<=21 && mes == "diciembre")){
        return "Sagitario"
    }else if((dia>=22 && mes == "diciembre") || (dia<=20 && mes == "enero")){
        return "Capricornio"
    }else if((dia>=21 && mes == "enero") || (dia<=18 && mes == "febrero")){
        return "Acuario"
    }else if((dia>=19 && mes == "febrero") || (dia<=20 && mes == "marzo")){
        return "Piscis"
    }
}
console.log(signoZodiaco(22,"mayo"))

function continente(pais:string){
    if(pais == "España" || pais == "Francia" || pais == "Italia" || pais == "Andorra" || pais == "Alemania"){
        return "Europa"
    }else if(pais == "Argentina" || pais == "Mexico" || pais == "Canadá" || pais == "Estados Unidos" || pais == "Perú"){
        return "América"
    }else if(pais == "Japón" || pais == "India" || pais == "China" || pais == "Taiwan" || pais == "Catar"){
        return "Asia"
    }else if(pais == "Camerún" || pais == "Egipto" || pais == "Ghana" || pais == "Kenia" || pais == "Nigeria"){
        return "África"
    }
}
console.log(continente("Mexico"))

function parImpar(num:number){
    if(num%2==0){
        console.log("El numero es par")
    }else if(num%2!==0){
        console.log("El numero es impar")
    }
}
parImpar(43)

parImpar(sumArr(["Casa","Coche","Ciudad","Cesta"]))
parImpar(sumArr(["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"]))
parImpar(sumArr(["Venezuela","Veneno","Voltaje"]))