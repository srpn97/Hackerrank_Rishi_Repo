'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var x = 0;
    var y = 0;
    for ( x = 0; x <= s.length; x++)
    {
        if (s[x] == 'a' || s[x] == 'e' || s[x] == 'i' || s[x] == 'o' || s[x] == 'u')
        {
            console.log(s[x]);
        }
    }

    for (y = 0; y < s.length; y++) {
        if (s[y] == 'a' || s[y] == 'e' || s[y] == 'i' || s[y] == 'o' || s[y] == 'u'){
            continue;
        }
        else {
            console.log(s[y]);
        }

    }
      
}

