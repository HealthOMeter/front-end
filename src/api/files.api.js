import axios from "axios";

export const getFiles = (userId) => {
  return axios.get(`http://localhost:3000/api/Documents/${userId}`);
};

export const uploadFile = (payload, userId) => {
  return axios.post(`http://localhost:3000/api/UploadFile/${userId}`, payload);
};

export const sendFileInfo = (payload, userId) => {
  return axios.post(`http://localhost:3000/api/Documents/${userId}`, payload)
}