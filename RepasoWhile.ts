function numPar(num:number[]){
    let i = 0
    while(i<num.length){
        if (num[i]%2==0){
            return 'yes'
        }
        i++
    }
}
console.log(numPar([9,2,3,6,7,33,66]));