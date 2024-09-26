export const getStorage = (key:string) =>{
    return uni.getStorageSync(key)
}
export const setStorage = (key:string,value: any) =>{
     uni.setStorageSync(key,value)
}
export const getStorageToJson = (key:string) =>{
    return JSON.parse(uni.getStorageSync(key))
}
export const setStorageToJson = (key:string,value: any) =>{
    uni.setStorageSync(key,JSON.stringify(value))
}
export const removeStorage = (key:string) =>{
     uni.removeStorageSync(key)
}
export const clearStorage= () =>{
     uni.clearStorageSync()
}


