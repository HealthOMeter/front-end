import { fetchData } from "./base.api";

export const getFiles = (userId)=> {
    return fetchData(`http://localhost:3000/api/Documents/${userId}`, 'GET');
}