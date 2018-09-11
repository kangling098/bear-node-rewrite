class EventEmitter {
    static defaultMaxListeners = 10
    constructor(){
        this._events = {};
    }
    eventNames(){
        return Object.keys(this._events);
    }
    getMaxListeners(){
        return this._count || EventEmitter.defaultMaxListeners;
    }
    once(type, callback, flag){
        
    }
}














module.exports = EventEmitter;