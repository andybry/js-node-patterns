var Base = require('./Base.js');
var MyClass = require('./MyClass.js');

module.exports = Base.extend(MyClass, {

  output: function() {
    console.log('In the child class: ' + this._message);
  }

});