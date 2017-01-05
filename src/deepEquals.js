'use strict';

// @NOTE: can be a separate file
var isPrimitive = function (obj){
  return (
    typeof obj === 'boolean' ||
    typeof obj === 'number' ||
    typeof obj === 'string' ||
    obj === undefined
  );
};

module.exports.deepEquals = function deepEquals (o1, o2) {

  if (!o1 || !o2 || isPrimitive(o1)) {
    return o1 === o2;
  }

  if(Object.keys(o1).length !== Object.keys(o2).length){
    return false;
  }

  var keys = Object.keys(o1);
  var len = keys.length;

  for(var i = 0; i < len; i++) {

    var key = keys[i];

    if (!deepEquals(o1[key], o2[key])) {
      return false;
    }
    
  }
  return true;
};
