import request from "@/utils/request";

interface Interface1<T> {
    code:number
    data:T
    msg:string
}

export const login = ():Promise<BaseAxiosRespond<any>> =>{
    return  request.get('',{
        params:{
            id:1
        }
    })
}

