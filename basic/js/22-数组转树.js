const data = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 3 }
  ]

 
//转化结果如下
// {
//     id:1,
//     children:[
//         {
//             id:2,
//             children:[
//                 {
//                     id:4,
//                     children:[]
//                 },
//                 {
//                     id:5,
//                     children:[]
//                 }
//             ]
//         }
//     ]
// }
function createNode(id,data){
  const childData=data.filter(({parentId}) =>parentId === id)

  const node={
    id,
    children:childData.reduce((acc,cur)=>{
        acc.push(createNode(cur.id,data))
        return acc
    },[])
  }
  return node
}


function getTree(data){
    const rootData = data.find(({parentId})=>parentId===null)

    if(!rootData){
        return new Error("数据中找不到根节点")
    }

    return createNode(rootData.id,data)
}

console.log(JSON.stringify(getTree(data)))