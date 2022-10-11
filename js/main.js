// esto es callbacks


// const number = 1;
// const anotherNumber = number;


// const operation = () => {};

// const operation2 = operation;

// operation2
// operation();

// const program = () => {};


//programa para hacer un time out "que espere unos segundos"

// setTimeout(() => {
//     console.log('ha pasado un segundo')
// }, 1000);

// console.log('esto es ahora');


// const operation = (onFinish) => {
//     timeout = 0;
//     const result = "??????";
//     timeout = timeout + loquetardo
//     onFinish(result, timeout,);
    
// }
// const showResult = (res, tiempo) => {
//     console.log(`El resultado es ${res} y he tardado ${tiempo} ms`)
// }
// const storageResult = (value, tiempo) => {
//     localStorage.setItem(`El resultado es ${value} y he tardado ${tiempo} ms`)
// }
// operation3(storageResult);
// operation3(showResult);


// const anExample = (window, ev) => {
//     console.log(param1, param2);
// }

// anExample('param1')
// anExample('param1')
// anExample('param1', 'param2','param3');

// fetch()

// addEventListener('click', anExample)


// const LanzarMisil = (cuandoExplote) => {
//     const time = Math.random();
//     return setTimeout(cuandoExplote,time);
// }

// const misilId1 = LanzarMisil(() => {
//     clearTimeout(misilId2);
// });
// const misilId2 = LanzarMisil(() => {
//     clearTimeout(misilId1);
// });
 



// const timeoutId = setTimeout(() => {}, 1000);

// clearTimeout(timeoutId);

// setInterval(() => {}, 1000); 
 

// CALCULADOR 

document.querySelector("#sumar").addEventListener('click',() =>
{
let num1 = parseInt(document.querySelector("#num1").value),
num2 = parseInt(document.querySelector("#num2").value);

setTimeout(()=>{
console.log('El resultado es ' + (num1 + num2));
}, 1000)
})


document.querySelector("#restar").addEventListener('click',() =>
{
let num1 = parseInt(document.querySelector("#num1").value),
num2 = parseInt(document.querySelector("#num2").value);

setTimeout(()=>{
console.log('El resultado es ' + (num1 - num2));
}, 1000)
})

document.querySelector("#multiplicar").addEventListener('click',() =>
{
let num1 = parseInt(document.querySelector("#num1").value),
num2 = parseInt(document.querySelector("#num2").value);

setTimeout(()=>{
console.log('El resultado es ' + (num1 * num2));
}, 1000)
})

document.querySelector("#dividir").addEventListener('click',() =>
{
let num1 = parseInt(document.querySelector("#num1").value),
num2 = parseInt(document.querySelector("#num2").value);

setTimeout(()=>{
console.log('El resultado es ' + (num1 / num2));
}, 1000)
})