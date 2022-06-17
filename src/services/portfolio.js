import axios from "axios"

const url = "http://localhost:3005/portfolio/"
const siteId = "62aca0c8373d8d132b664bbc"

const get = ()=>{
    return axios.get(url+siteId)
}


const service = {get}

export default service