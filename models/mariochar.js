const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

/*
    definimos el schema pasando un objeto con las propiedades
    que tendra (nombre y valor), cada objeto puede tener todas
    o solo algunas.
*/

const MarioCharSchema = new Schema({
    name: String,
    wight: Number
});

/*
    Creamos el modelo, pasando el nombre de la colección
    (a nivel mongodb) y el Schema
*/

const MarioChar = mongoose.model('mariochar',MarioCharSchema);

/*
    Pasamos el modelo a la propiedad exports, para que pueda
    ser utilizado por otros modulos
*/

module.exports = MarioChar;