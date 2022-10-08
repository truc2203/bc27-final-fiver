import axiosClient from "./axiosClient";
const userAPI = {
    getUser : (userId) => {
      return axiosClient.get(`users/${userId}`)
    },
    editUser : (value,userId) => {
      return axiosClient.put(`users/${userId}`,value)
    },
    getBooked : () => {
      return axiosClient.get(`thue-cong-viec`)
    },
    getBookedByUser : (id) => {
      return axiosClient.get(`thue-cong-viec/{id}`)
    },
    getBookedById : () => {
      return axiosClient.get(`thue-cong-viec/lay-danh-sach-da-thue`)
    }
};
export default userAPI;
