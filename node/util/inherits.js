const inherits = (child,father)=>{
    child.prototype.__proto__ = father.prototype;
}

module.exports = inherits;