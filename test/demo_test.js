//const mocha = require('mocha');
const assert = require('assert');

//Describe tests

describe('some demo tests',function(){
    /*
        Creamos una prueba por medio de it,
        recibe la descripción de la prueba
        y un callback donde podremos hacer
        la prueba con la funcion de assert,
        en ella se define lo que se espera,
        si se cumple, la prueba es correcta,
        si no, la prueba no cumple.

        para ejecutar la prueba debemos
        definir en el package.json en test
        que utilizaremos mocha:

        "test": "mocha"

        y ejecutar:

        npm run test
    */

    //Create tests
    it('adds two numbers together =)',function(){
        assert(2+3 === 5);
    });
});