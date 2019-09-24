//require al inicio del fichero
//paquete nativo de Node.JS
// no se pone el .js porque es redundante sabemos que tiene que ser un archivo de JS
/* ****** Información útil **************
 * Esta constante para no utilizar todo yargs podemos recoger lo que me interesa que es mi código 
 * para eso ponemos .argv.
 */
const argv = require('./config/yargs').argv;
//no funcionaba listarTabla porque no estaba importando la función aquí.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//const colors = require('colors');
const colors = require('colors');
//console.log('limite', argv.limite);
console.log(argv);
//cogemos la posicion 0 del array y determinamos una accion en base al argumento que vamos a recibir
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            //.catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.red }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}


// paquete no nativo de Node.JS y se instala a parte
//let express = require('express');
//Archivos que nosotros creamos en el proyecto
// let paquete = require('./archivo'):
//Aplicación de consola
//deberiamos poder revisar si la base no es un numero 

//let base = 'abc';

// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(argv.base);
//console.log(argv2);
//console.log(process.argv);
//vamos a crear un archivo de texto con estos valores