'use strict';

// @NOTE: can be a separate file
var isPrimitive = function (obj){
  return (
    typeof obj === 'boolean' ||
    typeof obj === 'number' ||
    typeof obj === 'string' ||
    obj === undefined // no typeof needed
  );
};

module.exports = function deepEquals(o1, o2) {
  if (!o1 || !o2 || isPrimitive(o1)) {
    return o1 === o2;
  }

  var keys = Object.keys(o1);
  var len = keys.length;

  for (var i = 0; i < len; i++) {
    var key = keys[i];
    if (!deepEquals(o1[key], o2[key])) {
      return false;
    }
  }

  return true;
};
