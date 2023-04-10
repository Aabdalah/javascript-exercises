const reverseString = function(str) {
    let subArray = str.split("");
    str = subArray.reverse().join("");
    return str;
};

// Do not edit below this line
module.exports = reverseString;
