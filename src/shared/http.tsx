import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { getCode, getMe, mockItemCreate, mockItemIndex, mockItemIndexBalance, mockSession, mockTagEdit, mockTagIndex, mockTagShow } from "../mock/mock";
type GetConfig = Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>
type PostConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method'>
type PatchConfig = Omit<AxiosRequestConfig, 'url' | 'data'>
type DeleteConfig = Omit<AxiosRequestConfig, 'params'>
export class Http {
    instance: AxiosInstance
    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        })
    }
    // read
    get<R = unknown>(url: string, query?: Record<string, JSONValue>, config?: GetConfig) {
        return this.instance.request<R>({ ...config, url: url, params: query, method: 'get' })
    }
    // create
    post<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PostConfig) {
        console.log(222)
        return this.instance.request<R>({ ...config, url, data, method: 'post' })
    }
    // update
    patch<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PatchConfig) {
        return this.instance.request<R>({ ...config, url, data, method: 'patch' })
    }
    // destroy
    delete<R = unknown>(url: string, query?: Record<string, string>, config?: DeleteConfig) {
        return this.instance.request<R>({ ...config, url: url, params: query, method: 'delete' })
    }
}

const mock = (response: AxiosResponse) => {
    console.log('mock数据')
    if (location.hostname !== 'localhost'
        && location.hostname !== '127.0.0.1'
        && location.hostname !== '192.168.3.57') { return false }
    switch (response.config?.params?._mock) {
        case 'tagIndex':
            [response.status, response.data] = mockTagIndex(response.config)
            return true
        case 'session':
            [response.status, response.data] = mockSession(response.config)
            console.log(2, response.data)
            return true
        case 'itemCreate':
            [response.status, response.data] = mockItemCreate(response.config)
            return true
        case 'tagShow':
            [response.status, response.data] = mockTagShow(response.config)
            return true
        case 'tagEdit':
            [response.status, response.data] = mockTagEdit(response.config)
            return true
        case 'itemIndex':
            [response.status, response.data] = mockItemIndex(response.config)
            return true
        case 'itemIndexBalance':
            [response.status, response.data] = mockItemIndexBalance(response.config)
            return true
        case 'mes':
            [response.status, response.data] = getMe(response.config)
            return true
        case 'validation':
            [response.status, response.data] = getCode(response.config)
            return true

    }
    return false
}
export const http = new Http('http://127.0.0.1:3000/')

http.instance.interceptors.request.use(config => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
        config.headers!.Authorization = `Bearer ${jwt}`
    }
    return config
})
//使用拦截器来实践mock数据
http.instance.interceptors.response.use((response) => {
    console.log(response)
    mock(response)
    return response
}, (error) => {
    if (mock(error.response)) {
        return error.response
    } else {
        throw error
    }
})


http.instance.interceptors.response.use(response => {
    return response
}, (error) => {
    if (error.response) {
        console.log('error 有错误')
        const axiosError = error as AxiosError
        if (axiosError.response?.status === 426) {
            alert('你太频繁了')
        }
    }
    throw error
})