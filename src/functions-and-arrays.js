// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1 > num2){
        return num1
    }else if(num2 > num1){
        return num2
    }else{
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if(array.length === 0){
        return null
    }
    palabraLarga = array[0]

    for(let i = 0; i < array.length; i++){
        if(array[i].length > palabraLarga.length){
            palabraLarga = array[i]
        }
    }
    return palabraLarga
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(array) {
    sumaTotal = 0

    for(let i = 0; i < array.length; i++){
        sumaTotal += array[i]
    }
    return sumaTotal
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if(array.length === 0){
        return 0
    }

    const sum = sumNumbers(array)
    const porsentaje = sum / array.length
    return porsentaje
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let char = "a"


function doesWordExist(array,char) {
    contador = 0
    if(array.length === 0){
        return null
    }
    for(let i = 0; i < array.length; i++){
        if(array[i].includes(char)){
            contador ++
        }
    }
    if(contador !== 0){
        return true
    }else{
        return false
    }
}                                                      // ORGULLOSO DE ESTA SOLUCION, GRACIAS JORGE POR TUS ENSEÑANZAS
