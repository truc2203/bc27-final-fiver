import axiosClient from "./axiosClient";
const userAPI = {
  getUsers: () => {
    return axiosClient.get("users");
  },
};
export default userAPI;
