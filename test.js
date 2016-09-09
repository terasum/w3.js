/**
 * Created by chenquan on 16-9-9.
 */
var SolidityFunction = require('./index.js');

////////////////////////////////////////////
//
//
// test
///////////////////////////////////////

// contract abi
var abi = [{
    name: 'myConstantMethod',
    type: 'function',
    constant: true,
    inputs: [{ name: 'a', type: 'string' }],
    outputs: [{name: 'd', type: 'string' }]
}, {
    name: 'myStateChangingMethod',
    type: 'function',
    constant: false,
    inputs: [{ name: 'a', type: 'string' }, { name: 'b', type: 'int' }],
    outputs: []
}, {
    name: 'myEvent',
    type: 'event',
    inputs: [{name: 'a', type: 'int', indexed: true},{name: 'b', type: 'bool', indexed: false}]
}];

var abimethod = {constant:false,
    inputs:[{name:"a",type:"bytes1[]"}],
    name:"myStateChangingMethod",
    outputs:[],
    type:"function"};

var sf = new SolidityFunction(abimethod);
// var disName  = sf.displayName();
// var typeName = sf.typeName();
var data = sf.getData([1,2]);
// console.log(disName);
// console.log(typeName);
console.log(data);
