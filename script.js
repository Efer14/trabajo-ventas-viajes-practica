
import {
    barcelona,
    roma,
    paris,
    londres
} from './ciudades.js'

// obtener los elementos del DOM//

let enlaces = document.querySelectorAll('a')    // consultamos por todos los elementos a (4) del html// //genera 4 nodos//
let tituloElemento = document.getElementById('titulo')                // elementos id //
let subTituloElemento = document.getElementById('subtitulo')           // elementos id //
let parrafoElemento = document.getElementById('parrafo')               // elementos id //
let precioElemento = document.getElementById ('precio')

// agregar un evento click a cada enlace//      // foreach es un bucle, en el cual vamos a generar una funcion que genere un enlace por cada vez que pase por cada elemento del bucle; cada enlace producido generara la accion puesta en la funcion//
// escucha el evento,  addEventListener//                   
// se crea una funcion para enlaces que hace la accion enlace y se crea otra funcion para enlace para crear otra accion//
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // remover el active//
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // agregar active al que corresponda
        this.classList.add('active')

        // traer el contenido del elemento correspondiente a la eleccion. THiS ( es esto) HACE REFENCIA A LO QUE ESTA DENTRO DE TODA LA FUNCION PRINCIPAL EN ESTE CASO AL CLICK QUE SE ENCUENTRA EN UN PRINCIPIO
        // TEXCONTENT hace referencia a dentro de los nodos, donde esta el contenido de text content
        let contenido = obtenerContenido(this.textContent)

        // mostrar el contenido en el dom
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })

})

// funcion para tarer la informacion correcta desde cuidades.js   
// LA FUNCION  NOS VA A TIRAR UN ENLACE EL CUAL SON LOS STRING ( CUIDADES) CADA UNO DE LOS NODOS, CADA STRING LO IGUALAMOS A SU VARIABLE DE CUIDADES.JS PARA ASI LLAMAR LA INFORMACION QUE TIENEN DENTRO 

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,

    };

    return contenido[enlace];
}