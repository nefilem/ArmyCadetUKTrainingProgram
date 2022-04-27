import axios from 'axios';
const url = "https://kgtrainingserver.herokuapp.com"

export class ApiClient {
    async apiCall(method, url, data) {
        return axios({
            method,
            url,
            data,
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            throw error;
        })
    }
    async getSubjects() {
        return await this.apiCall("get", url + '/lessons')        
    }
    async postSubjects(data){
        return await this.apiCall("post", url+"/lessons/showfiltered",data)
    }

    async subjectsbylevel(data) {
        return await this.apiCall("get", url + "/lessons/subjectsbylevel/" + data);
    }
}