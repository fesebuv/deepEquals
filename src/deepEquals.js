'use strict';

var deepEquals = function (o1, o2) {

  // console.log(o1);
  // console.log(o2);

  if(
    null === o1 ||
    null === o2 ||
    undefined === o1 ||
    undefined === o2 ||
    NaN === o1 ||
    NaN === o2){
    return o1 === o2;
  }

  if(
    typeof o1 === 'string' ||
    typeof o1 === 'number' ||
    typeof o1 === 'boolean') {
    return o1 === o2;
  }

  if(!o2) {
    return false;
  }

  // console.log(Object.keys(o1));

  var keys = Object.keys(o1);
  var len = keys.length;

  // console.log('keys----');
  // console.log(keys);
  // console.log('len----');
  // console.log(len);

  for(var i=0; i<len; i++) {

    var key = keys[i];
    var value1 = o1[key];
    var value2 = o2[key];



    if(!o2.hasOwnProperty(key)) {
      return false;
    }

    // console.log('value: %s, type:%s', value1, typeof value1);
    // console.log('value: %s, type:%s', value2, typeof value2);
    // console.log('is object? %s', typeof value1 === 'object')
    if(typeof value1 === 'object') {
      var r = deepEquals(value1, value2);
      if(!r){
        return r;
      }
      // return deepEquals(value1, value2);
    } else if(value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = {
  deepEquals: deepEquals
}
