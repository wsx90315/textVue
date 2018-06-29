import http from './reddit'
const url =  process.env.NODE_ENV !== 'production' 
? '/api/common' 
: 'http://xxxx.xxxx.xxxx/common'

const murl = process.env.NODE_ENV !== 'production' 
? '/api/member' 
: 'http://xxxx.xxxx.xxxx/member'

export const userLogin = (params) =>{
    return http.Post(url + '/login', params)
}
export const usercar = (params) =>{
    return http.Get(murl  + '/usercar')
}
