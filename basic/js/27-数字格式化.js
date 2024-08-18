const str= '1000000000'
//10,000,000,000

const s=str.replace(/\B(?=(\d{3})+$)/g,',')

console.log(s)
