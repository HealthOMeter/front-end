import axios from "axios";

export const addAppointment = (userId, payload, familyMemberId)=> {
    if (familyMemberId) {
        return axios.post(`http://localhost:3000/api/MedicalVisit/${userId}&familyMember=${familyMemberId}`, payload);
    }
    return axios.post(`http://localhost:3000/api/MedicalVisit/${userId}`, payload);
};
