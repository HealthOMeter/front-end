import { fetchData } from "./base.api";

export const getCategories = (userId)=> {
    return fetchData(`http://localhost:3000/api/Categories/${userId}`, 'GET');
};