function numImp(num:number){
    for(let i = 0;i<=num;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
}
numImp(9)

function arrReverse(arr:number[]){
    let arrResult:number[]= new Array ()
    for(let i = arr.length-1; i >= 0 ; i--){
        console.log(arr[i])
        arrResult.push(arr[i])
    }
    console.log(arrResult)
}
arrReverse([1,2,3,4,])

function arcoIris(colores:string[]){
    for(let i = 0;i<colores.length;i++){
        if(colores[i] == "rojo" || colores[i] == "naranja" || colores[i] == "amarillo" || colores[i] == "verde" || colores[i] == "azul" || colores[i] == "índigo" || colores[i] == "violeta"){
            console.log(colores[i])
        }
    }
}
arcoIris(["verde","marrón","rojo","negro","azul"])

function nombreM(nombres:string[]){
    for(let i = 0; i < nombres.length; i++){
        for(let j = 0;j<nombres[i].length;j++){
            while(nombres[i][0]!=="M"){
                return "No todos empiezan con M"
            }
        }
    }
    return "Todos empiezan con M"
}
console.log(nombreM(["Manolo","Mike","Maria"]))

function sumArr(palabras:string[]){
    let sumaTotal:number=0
    for(let i = 0; i < palabras.length; i++){
        for(let j = 0;j<palabras[i].length;j++){
            sumaTotal++
        }
    }
    return sumaTotal
}
console.log(sumArr(["Coche","Moto","Bici"]))