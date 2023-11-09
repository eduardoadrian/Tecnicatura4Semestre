// this === global = true

// Mostrar algo en consola 
//console.log();

//Mostrar un mensaje en forma de error
//console.error();

//Ejecutar un código después de in intervalo de tiempo
//setTimeout(() => {});

//Ejecutar un código cada intervalo de tiempo
//setInterval(() => {});

//Da prioridad de ejecución a una función asincronica
//setInmdiate(()  => {});

console.log(global);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo); //detenemos la funcion
    }
    i++;
}, 1000);

setInmediate(() => {
    console.log('Saludo inmediato');
});

//requiere();
console.log(__filename);

global.miVariable = 'mi variable global';
console.log(miVariable);


