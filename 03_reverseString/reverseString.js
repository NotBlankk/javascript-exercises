const reverseString = function(str) {
    // return str.split("").reverse().join("")
    let ans = '';
    for (let i = str.length -1; i >=0; i--){
        ans += str[i]
    }

    return ans

};

// Do not edit below this line
module.exports = reverseString;
