

function httpRequest(url,method,data,headers){

    return new Promise((resolve,reject)=>{

        const xhr=new XMLHttpRequest()
        xhr.open(method,url)


        if(headers){
            Object.keys(headers).forEach(key=>{
                xhr.setRequestHeader(key,headers[key])
            })
        }

        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4){
                if(xhr.status===200){
                    resolve(xhr.responseText)
                }else{
                    reject(xhr.statusText)
                }
            }
        }

        xhr.send(data)
    })
}