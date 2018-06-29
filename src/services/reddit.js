import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.post['Accept'] = 'application/json'

axios.defaults.timeout = 50000
axios.interceptors.request.use(
    config =>{
        config.headers = {
            'Content-Type' : 'application/x-www-form-urlencoded',
        }
        return config
    },
    err =>{
        return Promise.reject(err)
    }
)
export default {
    Get (url, params = {}){
        return new Promise((resolve, reject) => {
            axios.get(url, params).then(res =>{
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    Post (url, params = {}){
        return new Promise((resolve, reject) => {
          axios.post(url, params).then(res =>{
              resolve(res.data)
          }).catch(error => {
              reject(error)
          })
            
       })
    }
}
