# w3.js 
w3.js is a method_id and param interpretor of solidity abi

## useage:

```
var SF = require('index.js');
var abimethod = {
     name: 'myConstantMethod',
     type: 'function',
     constant: true,
     inputs: [{ name: 'a', type: 'string' }],
     outputs: [{name: 'd', type: 'string' }]
};

var sf = SF(abimethod);


// Note: this function's params should match with the abimethod input property defination.
var data  = sf.getData('abc');
console.log(data);

//'0x65a0d493000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000036162630000000000000000000000000000000000000000000000000000000000'


```