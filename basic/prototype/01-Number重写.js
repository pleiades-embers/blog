

Number.prototype.add=function(n){
    return this + n
}

Number.prototype.substract=function(n){
    return this - n
}

console.log((1).add(5).substract(2)===4)