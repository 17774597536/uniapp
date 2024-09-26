interface BaseAxiosRespond<T>{
    code:number
    data:T
    message:string
}


interface PaginationRespond<T>{
    total:number
    list?:Array<T>
    rows?:Array<T>
    records?:Array<T>
    [key:string]:any
}


interface ArrayRespond<T>{
    [key:string]:Array<T>
}

type UsePagination<T> = BaseAxiosRespond<PaginationRespond<T>>
type NormalArray<T> = BaseAxiosRespond<ArrayRespond<T>>
