

function uniqueArray (arr,key){
    return arr.reduce((acc,obj)=>{
        const hasObj=acc.find(item=>item[key]===obj[key])
        if(!hasObj){
            acc.push(obj)
        }
        return acc
    },[])
}


// 示例用法
const array = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Jake' }
  ];
  
const result = uniqueArray(array, 'id');
console.log(result);