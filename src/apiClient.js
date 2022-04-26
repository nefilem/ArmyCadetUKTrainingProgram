import axios from 'axios';
const url = "https://kgtrainingserver.herokuapp.com/schedule/"

export class ApiClient {
    apiCall(method, url, data) {
        return axios({
            method,
            url,
            data,
        }).catch((error) => {
            throw error;
        })
    }
    getSubjects() {
        return this.apiCall("get", url)        
    }
    postSubjects(data){
        return this.apiCall("post", url+"showfiltered",data)
    }
}