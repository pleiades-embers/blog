import JSONbig from 'json-bigint';

const jsonData: any = []
const promises = [];
const modules = import.meta.glob('../Json/*.json')
for (const path in modules) {
    const promise = modules[path]().then((mod) => {
        jsonData.push(mod?.default)
    })
    promises.push(promise);
}

const data = `{
  "data": {
    "test": "hello"
  },
  "method": "POST",
  "path": "/",
  "headers": {}
}`
Promise.all(promises).then(() => {
    const result=JSONbig.parse(data, (key, value) => {
        console.log(key, value)
    })
    console.log(result)
    console.log(JSONbig.parse(JSONbig.stringify(jsonData)))
});

