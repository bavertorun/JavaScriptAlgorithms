const arr =  [1,23,546,234,2,56,98,34,-21,31]

const LinearSeacrh = (arr,element) =>{
    const len = arr.length
    for (let i = 0; i < len; i++){
        if(arr[i] === element){
            return i
        }        
    }
    return -1
}


console.log(LinearSeacrh(arr,98)) // 6
console.log(LinearSeacrh(arr,221)) // -1
