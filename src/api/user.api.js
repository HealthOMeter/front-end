import axios from "axios";

export const createUser = (name, email, password)=> {
    const payload = {
        "email": email,
        "name": name,
        "password": password,
    };

    return axios.post('api/Users', 'POST', payload);
};