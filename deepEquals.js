'use strict';

var equal = require('deep-equal');

var expect = function(expected, actual){
  console.log('expected: %s | actual: %s | assertions is: %s',expected, actual, expected === actual);
};

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

var obj1 = {
  name: 'felipe',
  age: '31',
  height: '170'
};

var obj2 = {
  name: 'felipe',
  age: obj1.age,
  height: [
    '5',
    '7'
  ]
};

var obj3 = [
  'felipe',
  '31',
  '170'
];

var obj4 = {
  name: 'felipe',
  age: 31,
  height: 170
};

var obj5 = {
  name: obj1.name,
  age: obj1.age,
  height: obj1.height
};

var obj10 = {
  user : {
    obj1
  },
  something: true,
  somethingElse: false
}

var obj20 = {
  user : {
    obj5
  },
  something: true,
  somethingElse: false
}

var obj21 = {
  user : {
    obj5
  },
  something: true,
  somethingElse: 'false'
}


var obj22 = {
  user : {
    obj5
  },
  something: true,
  somethingElse: null
}

var obj30 = {
  a: obj1,
  b: obj2,
  c: obj3,
  d: obj4
};

var obj31 = {
  a: {
   name: 'felipe',
   age: '31',
   height: '170'
  },
  b: {
   name: 'felipe',
   age: obj1.age,
   height: [
     '5',
     '7'
   ]
  },
  c: [
   'felipe',
   '31',
   '170'
  ],
  d: {
   name: 'felipe',
   age: 31,
   height: 170
  }
}

var obj50 = {
  level1 : {
    a: true,
    b: {
      level2: {
        a1: 'a string',
        b1: true,
        c1: {
          level3: {
            a2: 'another string',
            b2: [
              1,
              0
            ]
          }
        }
      }
    }
  }
}

var obj51 = {
  level1 : {
    a: true,
    b: {
      level2: {
        a1: 'a string',
        b1: true,
        c1: {
          level3: {
            a2: 'another string',
            b2: [
              1,
              false
            ]
          }
        }
      }
    }
  }
};

var obj52 = {
  a: 'string',
  b: NaN
};

var obj53 = {
  a: 'string',
  b: NaN
};


// expect(false, deepEquals(obj1, obj2));
// expect(false, deepEquals(obj1, obj3));
// expect(false, deepEquals(obj1, obj4));
// expect(true, deepEquals(obj1, obj5));
// expect(true,deepEquals(obj10, obj20));
// expect(false,deepEquals(obj10, obj21));
// expect(false,deepEquals(obj10, obj22));
// expect(true,deepEquals(obj30, obj31));
// expect(false,deepEquals(obj30, null));
// expect(true,deepEquals(null, null));


function compare(o1, o2) {

  var nodeEqual = equal(o1, o2, {strict:true});
  var myEqual = deepEquals(o1, o2)
  var c = nodeEqual === myEqual;

  // console.log('node.deepEqual: %s', nodeEqual);
  // console.log('deepEquals:%s', myEqual)
  console.log('===> ', c);

  return c;
}

compare(obj1, obj2);
compare(obj1, obj3);
compare(obj1, obj4);
compare(obj1, obj5);
compare(obj10, obj20);
compare(obj10, obj21);
compare(obj10, obj22);
compare(obj30, obj31);
compare(obj30, null);
compare(null, null);
compare(undefined, null);
compare(undefined, undefined);
compare(1,true);
compare(false,0);
compare(obj50,obj51);
compare(obj52,obj53);
compare(NaN,NaN);
compare(1);
compare({},NaN);
compare({},null);
compare({},undefined);
compare(undefined,{});
compare({},{});
compare('true',true);
compare('false',false);
