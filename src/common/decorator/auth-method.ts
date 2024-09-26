import {useLoginStores} from "@/stores/login-stores";
import request from "@/utils/request";

function haveToken () {
    return new Promise((resolve,reject)=>{
        request.setLock(false)
        if (!useLoginStores()._getToken()) {
            request.setLock(true)
            reject('token为空，请重新登录')
        }else {
            resolve(useLoginStores()._getToken())
        }
    })
}
function checkSession () {
    return new Promise((resolve,reject)=>{
        request.setLock(false)
        uni.checkSession({
            success:(res)=>{
                resolve(res)
            },
            fail:(e)=>{
                request.setLock(true)
                reject('登录状态已过期，请重新登录')
            }
        })
    })
}
/**
 * 登录检查装饰器，使用该装饰器的方法，会先执行授权检查，如果未授权，将跳转登录页面
 */
export function mustAuth(option:any = {}) {
    return function(
        _target: any,
        _propertyName: string,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
    ) {
            const method = descriptor.value;
            descriptor.value = async function(...args: any[]) {
                if (request.getLock()) return
                    try {
                        await haveToken()
                        await checkSession()
                        await method?.apply(this, args);
                    }catch (e) {
                        console.log(this)
                        //TODO 没token去登录页/或者进行静默
                        useLoginStores()._setToken('123123')
                        console.log(e)
                    }
                }

    }
}



