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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

    const pi = Math.PI;

    var rad;
    rad = readLine();

    
    // Print the area of the circle:
    var area = pi * rad * rad;
    
    // Print the perimeter of the circle:
    var peri = 2 * pi * rad;

    console.log(area);
    console.log(peri);
    try {    