import axios from "axios";

export const getCategories = (userId)=> {
    return axios.get(`http://localhost:3000/api/Categories/${userId}`);
};