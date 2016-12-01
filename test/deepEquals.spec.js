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

function compare(o1, o2) {

  var nodeEqual = equal(o1, o2, {strict:true});
  var myEqual = deepEquals(o1, o2)
  var c = nodeEqual === myEqual;

  return c;
}

describe('define deepEquals', function (){

  it('should expect deepEquals to be equal to node deepEqual', function (){
    expect(compare(obj1, obj2)).to.be.true;
    expect(compare(obj1, obj3)).to.be.true;
    expect(compare(obj1, obj4)).to.be.true;
    expect(compare(obj1, obj5)).to.be.true;
    expect(compare(obj10, obj20)).to.be.true;
    expect(compare(obj10, obj21)).to.be.true;
    expect(compare(obj10, obj22)).to.be.true;
    expect(compare(obj30, obj31)).to.be.true;
    expect(compare(obj30, null)).to.be.true;
    expect(compare(null, null)).to.be.true;
    expect(compare(undefined, null)).to.be.true;
    expect(compare(undefined, undefined)).to.be.true;
    expect(compare(1,true)).to.be.true;
    expect(compare(false,0)).to.be.true;
    expect(compare(obj50,obj51)).to.be.true;
    expect(compare(obj52,obj53)).to.be.true;
    expect(compare(NaN,NaN)).to.be.true;
    expect(compare(1)).to.be.true;
    expect(compare({},NaN)).to.be.true;
    expect(compare({},null)).to.be.true;
    expect(compare({},undefined)).to.be.true;
    expect(compare(undefined,{})).to.be.true;
    expect(compare({},{})).to.be.true;
    expect(compare('true',true)).to.be.true;
    expect(compare('false',false)).to.be.true;

  });

});
