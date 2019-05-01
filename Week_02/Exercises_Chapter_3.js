//Minimum
function min(p1,p2){
    if (p1 > p2){
        return p2;
    }
    else if (p2 > p1){
        return p1;
    }
    else{return 'Equal Values'}
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(5, 5));
// → Equal Values

//Recursion
function isEven(p1){
    //console.log('Debug - '+p1);
    if (p1 < 0){
        return isEven(p1 * -1);
    }
    else if ((p1) > 1){
        return isEven((p1-2));
    }
    else if (p1 === 1){
        return false;
    }
    else if (p1 === 0){
        return true;
    }
    else{
        return 'Failed all tests';
    }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

