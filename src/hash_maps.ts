// Hashmaps use cases: caching

let cache: {[key:string]: string } = {}

interface CacheResponse {
    fromCache: boolean,
    data: string
}

const getWebpageData = (key: string) => {
    if (cache[key]) {
        const response : CacheResponse = {
            fromCache: true,
            data: cache[key]
        } 
        return response
    } else {
        const dataFromServer  = "<h1>some made up data</h1>"
        cache[key] = dataFromServer
        const response: CacheResponse = {
            fromCache: false,
            data: dataFromServer
        }
        return response
    }
}

console.log(getWebpageData("DAN001"))
console.log(getWebpageData("DAN001"))
console.log(getWebpageData("DAN001"))