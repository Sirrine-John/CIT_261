function range(p1,p2,p3 = 1){
    const rangevar = [];
    if (p1 < p2){
        for (i = p1; i <= p2;i+=p3){
        rangevar.push(i);
        }
    }
    else if (p1 > p2){
        for (i = p1; i >= p2;i+=p3){
        rangevar.push(i);
        }
    }
    return rangevar;
}
console.log(range(1,10));
console.log(range(1,10,2));
console.log(range(5, 2, -1));

function sum(p1){
    var sumvar = 0;
    for(i = 0;i<p1.length;i++){
        sumvar += p1[i];
    }
    return sumvar;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sum(range(1, 10)));


function reverseArray(p1){
    var returnArray = [];
    for (i =0;i<p1.length;i++){
        returnArray[i] = p1[p1.length-1-i];
    }
    return returnArray;
}
function reverseArrayInPlace(p1){
    for (i = 0; i < Math.floor(p1.length/2);i++){
        var swap;
        swap = p1[p1.length-1-i];
        p1[p1.length-1-i] = p1[i];
        p1[i] = swap;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]