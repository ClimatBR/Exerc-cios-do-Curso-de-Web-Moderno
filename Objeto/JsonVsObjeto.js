//JSON pode ser lido em todas as linguagens
const obj = {a: 1, b: 2,c: 4, soma(){return a + b + c}}
console.log(JSON.stringify(obj))//transforma em JSON

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))//Transforma em objeto
console.log(JSON.parse('{"a": 1.9, "b": "string", "c": true, "d": {}, "e": []}'))