


interface Codec<T> {

}
interface DynamicOps<T>{

}
interface DateResult<T> {

}

class PrimitiveCodec<A> implements Codec<A> {
    // read<T> (ops:DynamicOps<T>, input:T) : DateResult<T>{

    // }

    // write<T> (ops:DynamicOps<T>, value:A) : T {

    // }

    decode<T>(ops:DynamicOps<T>,input:any):DateResult<Partial<A>>{
        return input
    }
    
    encode<T>(input:any, ops?:DynamicOps<T>,prefix?:T):DateResult<T>{
        return input
    }   
}

class DateCodec {
    static encode(a:Date): Object {
        return new PrimitiveCodec<number>().encode(a.getTime())
    }
    static decode(json:Object){
        // return json.flatMap(json=>parseInt(json)).map(timeStamp=>new Date(timeStamp))``
    }
}

//有效路径字符
function validPathChar(p) {
    return p === '_' || p === '-' || (p >= 'a' && p <= 'z') || (p >= '0' && p <= '9') || p === '/' || p === '.';
  }
  
//命名空间字符
  function validNamespaceChar(p) {
    return p === '_' || p === '-' || (p >= 'a' && p <= 'z') || (p >= '0' && p <= '9') || p === '.';
  }

const result=DateCodec.encode(new Date)

console.log(result)