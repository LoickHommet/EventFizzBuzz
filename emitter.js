const EventEmitter = require('events')


class Logger extends EventEmitter {

    FizzBuzz(number){
        console.log("Nombre envoyé")
        this.emit("nombreRecu", number)
    }
}

module.exports = Logger
