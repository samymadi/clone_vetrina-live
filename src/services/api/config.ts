import axios, { AxiosRequestConfig } from 'axios'

//constant
import { BASE_URL } from './CONSTANTS'



const headers ={
    authorization:'Bearer 6gXMpVxn0M8uFohPosDPjIlNwrKxemtJ6nhZdcie5NPbWGrxAUIRUJTFxUCDeaInH9U167I1A9K0xWKX',
    accept: "application/json, text/plain, */*",
}


const config:AxiosRequestConfig<any> = 
        {   
            
            baseURL:BASE_URL,
            headers
        } 



export const request = axios.create(config)