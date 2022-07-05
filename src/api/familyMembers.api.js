import axios from "axios";

export const getFamily= (userId) => {
    return axios.get(`http://localhost:3000/api/FamilyMember/${userId}`);
};

export const getFamilyMember = (userId, memberId) => {
    return axios.get(`http://localhost:3000/api/FamilyMember/${userId}`);
};

export const addFamilyMember = (userId, payload) => {
    return axios.post(`http://localhost:3000/api/FamilyMember?userId=${userId}`, payload);
};