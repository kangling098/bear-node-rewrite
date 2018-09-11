const EventEmitter = require('events');
let util = require('util');
class Girl {

}
util.inherits(Girl, EventEmitter);

let girl = new Girl;
const cry = () => {
    console.log('wang xin cry');
}
girl.setMaxListeners(1)
girl.on('newListener',(eventName)=>{
    console.log(eventName)
});

girl.on('cry',cry);
girl.on('cry',cry);
girl.emit('cry')
console.log(girl.eventNames())