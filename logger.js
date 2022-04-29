const Logger = require("./emitter")
const logger = new Logger

logger.on('nombreRecu', function(number){
    if(number % 5 == 0){
        console.log("Buzz");
    }
    if(number % 3 == 0){
        console.log("Fizz");
    }
    if((number % 5 == 0) & (number % 3 == 0)){
        console.log("FizzBuzz");
    }
    console.log("nombre Recu: ", number)
});


module.exports = logger;