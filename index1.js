const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(a.map(function(n) {
    return n * 2
}))
//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40 ]

console.log(a.filter(function(n){
    return n % 2 == 0
}))
//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

console.log(a.find(function(n){
    return n % 2 == 0
}))
//2

console.log(a.findIndex(function(n){
    return n % 2 == 0
}))
//1

console.log(a.reduce(function(sum , num){
    return sum + num
}))
//210

console.log(a.every(function(n){
    return n < 21 ? true : false
}))
//true

console.log(a.some(function(n){
    return n < 21 ? true : false
}))
//true