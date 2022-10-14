import axiosClient from "./axiosClient";
const userAPI = {
  getUser: () => {
    return axiosClient.get("users");
  },
  editUser: (value, userId) => {
    return axiosClient.put(`users/${userId}`, value);
  },
  addUser: (user) => {
    return axiosClient.post("users", user);
  },
  deleteUser: (id) => {
    return axiosClient.delete("users", {
      params: {
        id: id,
      },
    });
  },
  getBooked: () => {
    return axiosClient.get(`thue-cong-viec`);
  },
  getBookedByUser: (id) => {
    return axiosClient.get(`thue-cong-viec/{id}`);
  },
  getBookedById: () => {
    return axiosClient.get(`thue-cong-viec/lay-danh-sach-da-thue`);
  },
};
export default userAPI;
