const async = require('async');
function getCounts(arr, key) {
    return new Promise((resolve)=> {
        if(key=== null) {
            resolve(0);
        } else {
            let m = 0;
            for( var i = 0; i < arr.length; i++) {
                if(arr[i] == key) {
                    m++;
                }
            }
            resolve(m);
        }
    })
    
}

function nmPTP(arr, key, done) {
    var results = 0, len = arr.length;
    const size = Math.ceil(len/4);

    (async () => {
        for(let i = 0; i < 4; i++) {
            const result = await getCounts(arr.slice(i*size, (i+1)*size), key);
            results += result;
        }
        done(results);
    })();
}

