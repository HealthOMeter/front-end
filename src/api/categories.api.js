import axios from "axios";

export const getCategories = (userId)=> {
    return axios.get(`http://localhost:3000/api/Categories/${userId}`);
};

export const addCategories = (userId, payload)=> {
    return axios.post(`http://localhost:3000/api/Categories?userId=${userId}&newCategory=${payload}`);
};