import axiosClient from "./axiosClient";
const userAPI = {
  getUsers: () => {
    return axiosClient.get("users");
  },
  deleteUser: (userId, auth) => {
    return axiosClient.delete("users", {
      headers: { Authorization: `Bearer ${auth}` },
      params: { id: userId },
    });
  },
  updatetUser: (userId, auth) => {
    const formData = new FormData();
    for (let key in userId) {
      if (key === "id") continue;
      formData.append(key, userId[key]);
    }
    formData.append("id", userId.id.userId);
    return axiosClient.post("users/upload-avatar", formData);
  },
  addUser: (user) => {
    return axiosClient.post("users", user);
  },
  findUser: (e) => {
    return axiosClient.get("users/search/{TenNguoiDung}", {
      params: {
        hoTen: e,
      },
    });
  },
};
export default userAPI;
