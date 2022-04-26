import { fetchData } from "./base.api";

export const getDashboard = (userId) => {
    return fetchData(`http://localhost:3000/api/Dashboard/${userId}`, 'GET');
};