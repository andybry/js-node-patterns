var Base = require('./Base.js');

module.exports = Base.extend({

  _init: function(message) {
    this._message = message;
    return this;
  },

  output: function() {
    console.log(this._message);
  },

  myParentMethod: function() {
    console.log('this is the parent method');
  }

});