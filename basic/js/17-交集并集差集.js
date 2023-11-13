const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];


const union=[...new Set([...arr1,...arr2])]

const cross=[...new Set([...arr1.filter(item=>arr2.includes(item))])]

const diff=union.filter(item=>!cross.includes(item))

