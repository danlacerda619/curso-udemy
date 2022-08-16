let umaString = "Um texto"
// replace usado para fazer troca troca
//.length vai mostrar os numeros do caracteres
// .charAt ver o indice contando do zero
//.concat para juntar strings
//lastIndexOf para achar o ultimo indice
//indexOf pra encontrar o indice da palavra procurada
console.log(umaString.indexOf('texto'))
 console.log(umaString.charAt(6))
 console.log(umaString.length - 1)
let nome = 'joasaaaaaaa'
let nome2 = 'danilo'
if(nome.length < nome2.length) {
    console.log(`${nome} < ${nome2}`)
} else{
    console.log("deu erro")
}
console.log(umaString.replace(/Um texto/, 'maçã'))
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase()) 


