import axios from "axios";
import { API_BASE } from "./base.api";

export const addAppointment = (userId, payload, familyMemberId)=> {
    if (familyMemberId) {
        return axios.post(`http://localhost:3000/api/MedicalVisit/${userId}&familyMember=${familyMemberId}`, payload);
    }
    return axios.post(`http://localhost:3000/api/MedicalVisit/${userId}`, payload);
};

export const getAllAppointments = (userId)=> {
    return axios.get(`http://localhost:3000/api/MedicalVisit/${userId}`);
};

export const getRegularAppointments = (userId)=> {
    return axios.get(`http://localhost:3000/api/MedicalVisit/${userId}?isRegular=true`);
};

export const markAppointmentDone = (userId, visitId)=> {
    return axios.patch(`http://localhost:3000/api/MedicalVisit?userId=${userId}&medicalVisitId=${visitId}`)
}