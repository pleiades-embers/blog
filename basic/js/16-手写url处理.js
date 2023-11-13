

let url="https://example.com/?foo=bar&baz=qux"

function parseUrlParams(url){
    let params={}

    let paramString=url.split("?")[1]

    if(!paramString) return 

    const paramArray=paramString.split("&")

    paramArray.forEach(item=>{
        const [key,value]=item?.split("=")
        params[key]=decodeURIComponent(value)
    })

    return params
}

console.log(parseUrlParams(url))