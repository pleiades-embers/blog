//字符串找出重复的标记数量
let str="asdhafhaoishfiosadjasn"

//输出结果
// { a: 5, s: 4, d: 2, h: 3, f: 2, o: 2, i: 2, j: 1, n: 1 }

const result=str.split("").reduce((a,b)=>(a[b]++||(a[b]=1),a),{})
console.log(result)