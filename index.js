const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(a.map(n => n * 2))
//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40 ]
console.timeEnd('test')

console.log(a.filter( n => n % 2 === 0 ))
//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

console.log(a.find( n => n % 2 == 0))
//2

console.log(a.findIndex(n => n % 2 === 0 ))
//1

console.log(a.reduce((sum , num ) => sum + num , 0 ))
//210

console.log(a.every(n => n  < 21 ))
//true

console.log(a.some(n => n < 21 ))
//true