
function toString(foo) {
    // var foo = "get-element-by-id"

    var arr = foo.split('-')  //将单词分割为数组

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1)
    }
    return arr.join('')
}

function kebabCase(str){
    return str.replace(/[A-Z]/g, match => "-" + match.toL)
}




console.log(kebabCase(toString("get-element-by-id")))