const EventEmitter = require('events')


class Logger extends EventEmitter {

    FizzBuzz(number){
        console.log("Nombre envoyé")
        this.emit("nombre :", number)
    }
}

module.exports = Logger
