const nestedArray = [1, [2, [3, 4], 5], 6];


// function flattenArray(arr){
//     let result =[]


//     arr.forEach((item)=>{
//         if(Array.isArray(item)){
//             result=result.concat(flattenArray(item))
//         }else{
//             result.push(item)
//         }
//     })
//     return result
// }


// function flattenArray(arr){
//     return  [...arr?.flat(Infinity)]
// }


function flattenArray(arr){
    return arr.reduce((result,item)=>{
        if(Array.isArray(item)){
            return result.concat(flattenArray(item))
        }else{
            return result.concat(item)
        }
    },[])
}

