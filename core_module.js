const path = require('path');
const os = require('os');
const fs = require('fs');

const myPath = '/home/afzal/Desktop/all code practise/node-js/core_module.js';

// ---------- Path Module --------------------------------
/*
console.log(path.basename(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath)); */

// ---------- OS Module --------
/* console.log(os.freemem());
console.log(os.cpus()); */

// ---------- fs Module --------------------------------
/* fs.writeFileSync('core_module.txt', 'Core module learning');
fs.appendFileSync('core_module.txt', 'Learn something more about core module');

fs.readFile('core_module.txt', (err, data) => {
    console.log(data.toString());
});
console.log('Hello, core module'); */

// ---------- events Module --------------------------------
const EventEmitter = require('events');

const events = new EventEmitter();

// Register a listener for bellRing event
events.on('bellRing', () => {
    console.log('We need to run');
});

// rise an event
events.emit('bellRing');
