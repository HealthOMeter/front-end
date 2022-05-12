import axios from "axios";

export const getDashboard = (userId) => {
    return axios.get(`http://localhost:3000/api/Dashboard/${userId}`);
};