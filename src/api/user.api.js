import { fetchData } from "./base.api";

export const createUser = (name, email, password)=> {
    const payload = {
        "email": email,
        "name": name,
        "password": password,
    };

    return fetchData('api/Users', 'POST', payload);
};