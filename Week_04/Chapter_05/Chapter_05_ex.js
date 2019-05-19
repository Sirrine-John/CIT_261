let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(prev,curr){
    return prev.concat(curr);
}));
// → [1, 2, 3, 4, 5, 6]

function loop(startingVal,testFunction,updateFunction,bodyFunction){
    // console.log(startingVal);
    // console.log(testFunction(startingVal));
    // console.log(updateFunction(startingVal));   
    // bodyFunction(startingVal);
    let n = startingVal;
        while (testFunction(n)){
            bodyFunction(n);
            n = updateFunction(n);
        }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1