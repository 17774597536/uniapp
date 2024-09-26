// request.ts
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import axios from 'axios';
import {UniAdapter} from "uniapp-axios-adapter";
import {getBaseUrl} from "@/utils/request/config";
import {mustAuth} from "@/common/decorator/auth-method";

// @ts-ignore

class Request {
    private static instance: Request;
    private axiosInstance: AxiosInstance;
    public lock:boolean = false

    // 私有构造函数
    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: getBaseUrl(process.env.NODE_ENV as any), // 替换为你的 API 基础 URL
            timeout: 10000,
            headers: {'Content-Type': 'application/json'},
            adapter: UniAdapter
        });
        // 添加请求拦截器
        this.axiosInstance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                // 在请求头中添加自定义字段，或者其他请求配置
                // config.headers['Authorization'] = `Bearer ${token}`;
                return config;
            },
            (error) => Promise.reject(error)
        );

        // 添加响应拦截器
        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                // 可以在这里处理错误，例如显示错误提示
                return Promise.reject(error);
            }
        );
    }
    public setLock(params:any){
        this.lock = params
    }
    public getLock (){
        return this.lock
    }
    // 获取单例实例
    public static getInstance(): Request {
        if (!Request.instance) {
            Request.instance = new Request();
        }
        return Request.instance;
    }

    // 封装请求方法
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, config);
        return response.data;

    }

    public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data, config);
        return response.data;
    }

    // @ts-ignore
    @mustAuth()
    set(){
        if (this.getLock()) return
            console.log(1111)
    }

    // 可以根据需要添加更多方法
}
export default Request.getInstance();
