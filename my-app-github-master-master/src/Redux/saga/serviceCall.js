import axios from "axios"

export function getUser() {
    return axios.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users"
    });
};

