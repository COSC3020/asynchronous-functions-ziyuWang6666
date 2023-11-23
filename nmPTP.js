function getCounts(arr, key) {
    if(key=== null) return 0;
    let m = 0;
    for( var i = 0; i < arr.length; i++) {
        if(arr[i] == key) {
            m++;
        }
    }
    return m;
}

const async = require('async');
function nmPTP(arr, key, done) {
    const size = Math.ceil(arr.length/4);
    var results = 0;

    (async () => {
        for(let i = 0; i < 4; i++) {
            const result = await getCounts(arr.slice(i*size, (i+1)*size), key);
            results += result;
        }
        done(results);
    })();
}

module.exports = nmPTP;

