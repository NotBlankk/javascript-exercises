const sumAll = function(a, b) {
    ans = 0
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    if (a > b){
        let c = a
        a = b
        b = c
    }
    for (let i = a; i <= b; i++){
        ans += i

    }
    return ans

};

// Do not edit below this line
module.exports = sumAll;
