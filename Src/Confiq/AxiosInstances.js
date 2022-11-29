import axios from 'axios';
import store from '../Store'
import { Change_Loading } from '../Store/Actions/SharedAction'
import { otherStatus } from './helper';
export const apiInstance = axios.create({
    baseURL: "https://lms.royaldonuts.xyz/api/",
    timeout: 5000,
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        // 'Access-Control-Max-Age': 0
    }
})

apiInstance.interceptors.request.use(function (config) {
    console.log("confiqqqqqqqqqqqqqqqqqqqqqq" , config.url)
    config.headers.Authorization = `Bearer ${store.getState()?.user?.userData?.token}`
    store.dispatch(Change_Loading(true))
    return config;
}, function (error) {
    return Promise.reject(error);
});

apiInstance.interceptors.response.use(function (response) {
    store.dispatch(Change_Loading(false))
    return response;
}, function (error) {
    otherStatus(error.response)
    store.dispatch(Change_Loading(false))
    return Promise.reject(error);
});


// API Instance withOut Button Loader
export const apiInstanceWIthOutLoader = axios.create({
    baseURL: "https://lms.royaldonuts.xyz/api/",
    timeout: 5000,
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        // 'Access-Control-Max-Age': 0
    }
})

apiInstanceWIthOutLoader.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${store.getState()?.user?.userData?.token}`
    return config;
}, function (error) {
    return Promise.reject(error);
});

apiInstanceWIthOutLoader.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    otherStatus(error.response)
    return Promise.reject(error);
});

