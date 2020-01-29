module.exports = (n, thisNumber) => {
    let arr = [];
    let arr1 = [];
    const divide = n / 2;
    
    for (let i = 0; i < n; i++) {
        arr[i] = i;        
    }

    arr1 = arr.splice(divide, divide)
    
    if (arr.indexOf(thisNumber) !== -1) {
        return arr1[arr.indexOf(thisNumber)];
    } else {
        return arr[arr1.indexOf(thisNumber)];
    }  
};