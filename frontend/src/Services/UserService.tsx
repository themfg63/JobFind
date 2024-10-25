import axios from "axios" 

const base_url = "http://localhost:8080/users/"

const registerUser = async (user:any) => {
    return axios.post(`${base_url}register`,user)
    .then(res => res.data)
    .catch(error =>{throw error;});
}

const loginUser = async (login:any) => {
    return axios.post(`${base_url}login`,login)
    .then(res => res.data)
    .catch(error => {throw error;});
}

const sendMail = async (email:any) => {
    return axios.post(`${base_url}sendMail/${email}`)
        .then(result => result.data)
        .catch(error => {throw error;});
}

const verifyMail = async (email:any, otp:any) => {
    return axios.get(`${base_url}verifyMail/${email}/${otp}`)
        .then(result => result.data)
        .catch(error => {throw error;});
}

const changePass = async (email:string,password:string) => {
    return axios.post(`${base_url}changePass`,{email,password})
        .then(result => result.data)
        .catch(error => {throw error;});
}

export {registerUser, loginUser, sendMail,verifyMail,changePass}