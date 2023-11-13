

class EventEmitter {
    constructor (){
        this.event={}
    }

    on(eventName,callback){
        if(!this.event[eventName]){
            this.event[eventName] = [callback]
        }
        this.event[eventName].push(callback)
    }
    emit(eventName,callback){
        this.event[eventName].forEach(cb=>cb())
    }
    off(eventName,callback){
        if(this.event[eventName]){
            this.event[eventName] =this.event[eventName].filter(cb=>cb!=callback)
        }

    }

}







const emitter = new EventEmitter();

// 订阅事件
const callback1 = (name) => {
  console.log(`Hello, ${name}!`);
};
emitter.on('greet', callback1);

// 发布事件
emitter.emit('greet', 'Alice');  // 输出 "Hello, Alice!"

// 取消订阅
emitter.off('greet', callback1);

// 再次发布事件，但回调函数不再被调用
emitter.emit('greet', 'Bob');