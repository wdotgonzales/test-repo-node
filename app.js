// npm - global command , comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (store important information about projects/package)
// 3 Ways to Create JSON : 
// manual approach (create package.json in the root , create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)


// Using lodash
const _ = require('lodash');

const items = [1 , [2 , [3 , [4] ] ] ];
const newItems = _.flattenDeep(items);

console.log(newItems);