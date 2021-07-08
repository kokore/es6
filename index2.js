const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let muitple = function muit(n){
    return n * 2 
}

let modtwo = function mod(n){
    return n % 2 === 0
}

let sumall = function sum(su , nu){
    return su + nu
}

let everygo = function eve(n){
    return n < 21 ? true : false
}

let somego = function som(n){
    return n < 21 ? true : false
}
console.log(a.map(muitple))
//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40 ]

console.log(a.filter(modtwo))
//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

console.log(a.find(modtwo))
//2

console.log(a.findIndex(modtwo))
//1

console.log(a.reduce(sumall))
//210

console.log(a.every(everygo))
//true

console.log(a.some(somego))
//true