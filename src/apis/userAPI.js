import axiosClient from "./axiosClient";
const userAPI = {
    getUser : (userId) => {
      return axiosClient.get(`users/${userId}`)
    },
    editUser : (value,userId) => {
      return axiosClient.put(`users/${userId}`,value)
    }
};
export default userAPI;
