const { expect } = require("chai");
const nmPTP = require("./nmPTP");

describe("nmPTP", function () {
    // normal case
    it("should correctly count occurrences in the array", function (done) {
        const arr = [3, 5, 9, 3, 4, 6, 7, 2, 1, 8, 3, 3, 5, 2, 3, 9];
        const key = 3;

        nmPTP(arr, key, function (result) {
            expect(result).to.equal(5);
            done();
        });
    });
    // empty array
    it("empty array: 0 occurrences in the array", function (done) {
        const arr = [];
        const key = 3;

        nmPTP(arr, key, function (result) {
            expect(result).to.equal(0);
            done();
        });
    });
    // 0 occurrences
    it("0 occurrences in the array", function (done) {
        const arr = [-1,10,20,98,2,30,8,7,4];
        const key = 3;

        nmPTP(arr, key, function (result) {
            expect(result).to.equal(0);
            done();
        });
    });
});
