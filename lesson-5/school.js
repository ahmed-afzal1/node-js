const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class started');

        // rise an event
        setTimeout(() => {
            this.emit('bellRing', {
                first: 'second period',
                text: 'ended',
            });
        }, 2000);
    }
}

module.exports = School;
