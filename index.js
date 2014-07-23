var MyClass = require('./MyClass.js');
var MyChildClass = require('./MyChildClass.js');

var o1 = MyClass.create('This is my new message');
var o2 = MyChildClass.create('This is my newer message');

o1.output();
o2.output();
o2.myParentMethod();