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

function getGrade(score) {
    let grade;
    var grad = score;
    // Write your code here
    if (grad > 25 && grad <= 30)
    {
        grade='A';
    }
    else if (grad > 20 && grad <= 25)
    {
        grade = 'B';
    } 
    else if (grad > 15 && grad <= 20) {
        grade = 'C';
    } 
    else if (grad > 10 && grad <= 15) {
        grade = 'D';
    } 
    else if (grad > 5 && grad <= 10) {
        grade = 'E';
    }
    else if (grad > 0 && grad <= 5) {
        grade = 'F';
    }
      return grade;
}

