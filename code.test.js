
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

async function runTests() {
    // normal case
    const arr1 = [3, 5, 9, 3, 4, 6, 7, 2, 1, 8, 3, 3, 5, 2, 3, 9];
    const key1 = 3;
    const res1 = await new Promise((resolve) => nmPTP(arr1, key1, resolve));
    assert.strictEqual(res1, 5);

    // empty array
    const arr2 = [];
    const key2 = 3;
    const res2 = await new Promise((resolve) => nmPTP(arr2, key2, resolve));
    assert.strictEqual(res2, 0);

    // 0 occurrences
    const arr3 = [-1, 10, 20, 98, 2, 30, 8, 7, 4];
    const key3 = 3;
    const res3 = await new Promise((resolve) => nmPTP(arr3, key3, resolve));
    assert.strictEqual(res3, 0);

    // console.log('All tests passed.');
}

runTests();
