'use strict';

const expect = require('chai').expect;
const equal = require('deep-equal');
const deepEquals = require('../src/deepEquals').deepEquals;

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

var Person1 = {
  firstName: 'first',
  lastName: 'last',
  age: 'age',
  eyeColor: 'eyecolor',
  nationality: 'English'
};
var Person2 = {
  firstName: 'first',
  lastName: 'last',
  age: 'age',
  eyeColor: 'eyecolor'
};

var Person3 = {
  firstname: 'first',
  lastName: 'last',
  age: 'age'
};

var nationality = new function(){
  Person2.nationality = 'English'
};

var tests = [
  {'compare an object that has a property that makes reference to the other':[obj1, obj2]},
  {'should compare two different objects':[obj1, obj3]},
  {'compare an object to an array':[obj1, obj4]},
  {'compare an object to an object that has reference to that object':[obj1, obj5]},
  {'compare two objects that have reference to similar object':[obj10, obj20]},
  {'compare two objects that have reference to similar object with a falsy value':[obj10, obj21]},
  {'compare two objects that have reference to similar object with a null value':[obj10, obj22]},
  {'compare object with objects that contains references':[obj30, obj31]},
  {'compare an object to a null':[obj30, null]},
  {'compare two nulls':[null, null]},
  {'compare an undefined object and a null':[undefined, null]},
  {'compare two undefined':[undefined, undefined]},
  {'compare a number to a boolean':[1,true]},
  {'compare a boolean to a number':[false,0]},
  {'should compare two objects':[obj50,obj51]},
  {'should compare two objects':[obj52,obj53]},
  {'compare two `NaN` objects':[NaN,NaN]},
  {'compare a number to an undefined parameter':[1]},
  {'compare an empty object to `NaN`':[{},NaN]},
  {'compare an empty object to a null':[{},null]},
  {'compare an empty object to undefined':[{},undefined]},
  {'compare undefined to an empty object':[undefined,{}]},
  {'compare two empty objects':[{},{}]},
  {'compare trufty to a boolean true':['true',true]},
  {'compare falsy to a boolean false':['false',false]},
  {'compare two objects one is extended':[Person1,Person2]},
  {'compare two objects with different number of keys': [Person1, Person3]}
];


function compare(o1, o2) {
  var nodeEqual = equal(o1, o2, {strict:true});
  var myEqual = deepEquals(o1, o2)
  return nodeEqual === myEqual;
}

describe('define deepEquals', function() {
  describe('it should compare two objects', function(){
    tests.map(function(obj, index) {
      for(var key in obj){
        if(obj.hasOwnProperty(key)){
          it(key, function() {
            var o1 = obj[key][0];
            var o2 = obj[key][1];
            expect(compare(o1,o2)).to.be.true;
          });
        }
      }
    });
  });
});
