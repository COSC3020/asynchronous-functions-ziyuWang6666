const fs = require('fs');
const assert = require('assert');
const { resolve } = require('path');
eval(fs.readFileSync('code.js')+'');

// normal case
const arr1 = [3, 5, 9, 3, 4, 6, 7, 2, 1, 8, 3, 3, 5, 2, 3, 9];
const key1 = 3;
nmPTP(arr1, key1, function(result) {
    assert(result == 5);
});


// empty array
const arr2 = [];
const key2 = 3;
nmPTP(arr2, key2, function(result) {
    assert(result == 0);
});

// 0 occurrences
const arr3 = [-1, 10, 20, 98, 2, 30, 8, 7, 4];
const key3 = 3;
nmPTP(arr3, key3, function(result) {
    assert(result == 0);
});
