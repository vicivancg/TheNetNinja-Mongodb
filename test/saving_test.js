//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe tests

describe('Saving records',function(){
    
    //Create tests
    it('Saves a record to the database =)',function(done){
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });

    it('Saves another record to the database =)',function(done){
        var char = new MarioChar({
            name: 'Luigi'
        });

        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });
});