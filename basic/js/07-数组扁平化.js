var arr = [0, 11, [20, 5, [20, 0], 0, 11], 20, 5];

function flatten1(arr){
    let result=[]

    arr.forEach(item=>{
        if(Array.isArray(item)){
            result=result.concat(flatten1(item)) 
        }else{
            result=result.concat(item)
        }
    })
    return result
}


function flatten2(arr){
    let result=[...arr]

    while(result.some(item=>Array.isArray(item))){
        result=[].concat(...result)
    }
    return result
}

console.log(flatten2(arr))