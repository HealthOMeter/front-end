import axios from "axios";

export const getFiles = (userId, category = "all") => {
  return axios.get(`http://localhost:3000/api/Documents/${userId}?category=${category}`);
};

export const uploadFile = (userId, payload) => {
  return axios.post(`http://localhost:3000/api/UploadFile/${userId}`, payload);
};

export const deleteFile = (userId, payload) => {
  return axios({
    method: "delete",
    headers: { "Content-Type": "application/json" },
    url: `http://localhost:3000/api/Documents?userId=${userId}`,
    data: payload,
  });
};
