const repeatString = function(s, num) {
    ans = ''
    let i = num
    if (i < 0) {
        return 'ERROR'
    }
    while(i){
        ans = ans + s
        i--
    }
    
    return ans
    


};

// Do not edit below this line
module.exports = repeatString;
