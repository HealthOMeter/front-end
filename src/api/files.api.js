import axios from "axios";

export const getFiles = (userId) => {
  return axios.get(`http://localhost:3000/api/Documents/${userId}`);
};

export const uploadFile = (userId, payload) => {
  return axios.post(`http://localhost:3000/api/UploadFile/${userId}`, payload);
};

export const deleteFile = (userId, docId) => {
  return axios.delete(`http://localhost:3000/api/Documents?userId=${userId}&docId=${docId}`);
}