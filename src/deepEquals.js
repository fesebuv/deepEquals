'use strict';

var isPrimitive = function (obj){
  return (
    typeof obj === 'boolean' ||
    typeof obj === 'null' ||
    typeof obj === 'undefined' ||
    typeof obj === 'number' ||
    typeof obj === 'string'
  );
};

var isSpecialObj = function (obj){
  return (
    NaN === obj ||
    undefined === obj ||
    null === obj
  );
};

var deepEquals = function (o1, o2) {

  if(isPrimitive(o1) || isSpecialObj(o1)){
    return o1 === o2;
  }

  if(!o2) {
    return false;
  }

  var keys = Object.keys(o1);
  var len = keys.length;

  for(var i=0; i<len; i++) {

    var key = keys[i];
    var value1 = o1[key];
    var value2 = o2[key];

    if(!o2.hasOwnProperty(key)) {
      return false;
    }

    if(typeof value1 === 'object') {
      var r = deepEquals(value1, value2);
      if(!r){
        return r;
      }
    } else if(value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = {
  deepEquals: deepEquals
}
