import axios from 'axios'
import {getSession} from 'next-auth/react'
import {generateApiEndpoint} from "@/utils";

let isRefreshing = false;
let failedQueue = []

const processQueue = (error, accessToken = null) => {
    failedQueue.forEach(prom => {
        if (error){
            prom.reject(error)
        } else {
            prom.resolve(accessToken)
        }
    })
    failedQueue = []
}

axios.interceptors.request.use(
    async config => {
        const {session:{user}} =  await getSession()
        const accessToken = user.accessToken
        if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    async response => {
        if (response.status===200 && response.data){
            return response.data
        } else {
            return Promise.reject((response?.errors)??'İşlem başarısız')
        }
    },
    async error => {
        const {session:{user}} =  await getSession()
        const refreshToken = user.refreshToken
        if (refreshToken){
            const originalRequest = error.config
            if (error.response.status === 401 && !originalRequest._retry){
                if (isRefreshing){
                    return new Promise((resolve, reject)=>{
                        failedQueue.push({resolve, reject})
                    }).then(accessToken=>{
                        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
                    }).catch(err=>{
                        return err
                    })
                }

                originalRequest._retry = true
                isRefreshing = true
                const endPoint = generateApiEndpoint('auth/refresh')

                return new Promise((resolve, reject)=>{
                    axios.post(endPoint, {refresh_token:refreshToken, mode:'json'})
                        .then(result=>{
                            // TODO: localstorage / session Token managment

                            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.access_token}`
                            originalRequest.headers['Authorization'] = `Bearer ${result.data.access_token}`

                            processQueue(null, result.data.access_token)
                            resolve(axios(originalRequest))
                        })
                        .catch(err=>{
                            processQueue(err, null)
                            reject(err)
                        })
                        .then(()=>{
                            isRefreshing = false
                        })
                })

            }
        }
        return Promise.reject(error)
    }
)
export default axios