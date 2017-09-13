/*
    Importamos Mongoose
*/
const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the db before running tests (Mocha hooks)
before(function(done){
    mongoose.connect('mongodb://localhost/testaroo',{ useMongoClient: true });
    
    /*
        agregamos 2 listeners al objeto connection, el primero se dispara
        solo una vez cuando elevento open sucede, el segundo que es error
        cuando algun error en la conexión sucedio, y el error es un objeto
        que podemos acceder desde el callback
    */
    mongoose.connection.once('open',function(){
        console.log('Connection has been made, how make fireworks...');
        done();
    }).on('error',function(err){
        console.log('Connection error: ' + err);
    });
});

//Drop characters collection before each test
beforeEach(function(done){
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});