import axiosClient from "./axiosClient";
const userAPI = {
  getUser: (userName) => {
    if(!userName)
    {
      return axiosClient.get(`users`)
    }
    else{
      return axiosClient.get(`users/search/${userName}`);
    }
    
  },
  getUserById : (userId) => {
    return axiosClient.get(`users/${userId}`)
  },
  addUser : () => {

  },
  editUser: (value, userId) => {
    return axiosClient.put(`users/${userId}`, value);
  },
  deleteUser:(userId) => {
    return axiosClient.delete(`users`,{
      params:{
        id: userId
      }
    })
  },
  getBooked: () => {
    return axiosClient.get(`thue-cong-viec`);
  },
  getBookedByUser: (id) => {
    return axiosClient.get(`thue-cong-viec/${id}`);
  },
  getBookedById: () => {
    return axiosClient.get(`cong-viec/?nguoiTao=30`);
  },

};
export default userAPI;
