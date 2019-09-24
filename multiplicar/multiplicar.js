//require al inicio del fichero
//paquete nativo de Node.JS
const fs = require('fs');
const colors = require('colors');

//definir valores por defecto en los parametros funcion de ES6 nueva.
let listarTabla = (base, limite = 10) => {
        console.log('=================='.green);
        console.log(`===== Tabla de ${ base }`.green);
        console.log('=================='.green)
        for (let i = 0; i <= limite; i++) {
            console.log(`${ base } x ${ i } = ${ base * i }`);
        }

    }
    // paquete no nativo de Node.JS y se instala a parte
    //let express = require('express');
    //Archivos que nosotros creamos en el proyecto
    // let paquete = require('./archivo'):
    //Aplicación de consola
    //let base = 6;
    //module.exports.crearArchivo yo también veo mejor hacerlo de la otra manera
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            //return es para que no siga el código leyendo más abajo
            return;
        }

        let data = '';

        //console.log(`Table of multiply 2`)
        for (let i = 0; i <= limite; i++) {
            //console.log(`${ base } x ${ i } = ${ base * i }`);
            data += `${ base } x ${ i } = ${ base * i }\n`;
        }
        //vamos a escribir los ficheros de forma clasica si el usuario no me pon un limite y si me lo pone lo pongo
        //como en el vídeo
        if (limite === 10) {
            fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-${ base }.txt`)
                    //console.log(`The file tabla-${ base }.txt has been saved!`);
            });
        } else {
            fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-${ base }-al-${ limite }.txt`)
                    //console.log(`The file tabla-${ base }.txt has been saved!`);
            });
        }

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

//vamos a crear un archivo de texto con estos valores