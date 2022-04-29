const Logger = require("./emitter")
const logger = new Logger

logger.on('nombreRecu', function(number){
    if(number % 5 == 0){
        console.log("Buzz");
    }
    console.log("nombre Recu: ", number)
});


module.exports = logger;