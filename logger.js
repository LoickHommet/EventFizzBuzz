const Logger = require("./emitter")
const logger = new Logger

logger.on('nombreRecu', function(number){
    console.log("nombre Recu: ", number)
});


module.exports = logger;