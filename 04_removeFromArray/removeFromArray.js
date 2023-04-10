const removeFromArray = function(array , num) {
    let remove = [];
    for(let i = 1; i <arguments.length;i++){
        remove.push(arguments[i]);
    }
    let result =[];
    for(let i = 0 ; i < array.length ; i++){
        if(!remove.includes(array[i])){
            result.push(array[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
